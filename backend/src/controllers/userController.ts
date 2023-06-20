import { Request, RequestHandler, Response } from "express";
import mssql from 'mssql'
import { sqlConfig } from "../config"
import { v4 as uid } from "uuid"
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve(__dirname, '../../.env') })
import jwt from 'jsonwebtoken'
import { UserRequest, User } from "../interfaces/interfaces";
import { registrationSchema } from "../Helpers/userValidation";

export const createUser = async (req: UserRequest, res: Response) => {
    try {
        const { username, email, password } = req.body
        const { error } = registrationSchema.validate(req.body)
        if (error) {
            return res.status(404).json(error.details[0].message)
        }
        const pool = await mssql.connect(sqlConfig)
        let user: User[] = (await (await pool.request())
            .input('email', email)
            .execute('getUserByEmail')).recordset
        if (user.length) {
            return res.status(409).json({ message: "User already exists!" })
        } else {
            let userId = uid()
            let hashedPassword = await bcrypt.hash(password, 7)
            const pool = await mssql.connect(sqlConfig)
            await pool.request()
                .input('userId', mssql.VarChar, userId)
                .input('username', mssql.VarChar, username)
                .input('email', mssql.VarChar, email)
                .input('password', mssql.VarChar, hashedPassword)
                .execute('insertUser')

            return res.status(201).json({ message: 'User Registered successfully' })
        }

    } catch (error: any) {
        return res.status(500).json(error.message)
    }
}

export const getAllUsers: RequestHandler = async (req, res) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        let users: User[] = (await (await pool.request()).execute('getusers')).recordset;
        return res.status(200).json(users);
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
}

export const getUserByEmail: RequestHandler<{ email: string }> = async (req, res) => {
    try {
        const { email } = req.params
        const pool = await mssql.connect(sqlConfig)
        let user: User[] = (await (await pool.request())
            .input('email', email)
            .execute('getUserByEmail')).recordset[0]
        if (user) {
            return res.status(200).json(user)
        }
        return res.status(404).json({ message: "User not found" })
    } catch (error: any) {
        return res.status(500).json(error.message)
    }
}

export const getUserById: RequestHandler<{ userId: string }> = async (req, res) => {
    try {
        const { userId } = req.params
        const pool = await mssql.connect(sqlConfig)
        let user: User[] = (await (await pool.request())
            .input('userId', userId)
            .execute('getUserById')).recordset[0]

        if (user) {
            return res.status(200).json(user)
        }
        return res.status(404).json({ message: "User not found" })
    } catch (error: any) {
        return res.status(500).json(error.message)
    }
}

export const updateUser = async (req: UserRequest, res: Response) => {
    try {
        const { username, email } = req.body
        const { userId } = req.params
        const pool = await mssql.connect(sqlConfig)
        let user: User[] = (await (await pool.request())
            .input('userId', userId)
            .execute('getUserById')).recordset[0]

        if (user) {
            await pool.request()
                .input('userId', userId)
                .input('username', username)
                .input('email', email)
                .execute('updateUser')
            return res.status(200).json({ message: "User updated successfully" })
        } else {
            return res.status(404).json({ message: "User not found" })
        }
    } catch (error: any) {
        return res.status(500).json(error.message)
    }
}

export const deleteUser = async (req: UserRequest, res: Response) => {
    try {
        const { userId } = req.params
        const pool = await mssql.connect(sqlConfig)
        let user: User[] = (await (await pool.request())
            .input('userId', userId)
            .execute('getUserById')).recordset[0]
        if (user) {
            await pool.request()
                .input('userId', userId)
                .execute('deleteUser')
            return res.status(200).json({ message: "User deleted successfully!" })
        } else {
            return res.status(404).json({ message: "User not found!" })
        }
    } catch (error: any) {
        return res.status(500).json(error.message)
    }
}

export const userLogin = async (req: UserRequest, res: Response) => {
    try {
        const { email, password } = req.body
        const pool = await mssql.connect(sqlConfig)
        let user: User[] = (await (await pool.request())
            .input('email', email)
            .execute('getUserByEmail')).recordset

        if (!user[0]) {
            return res.status(404).json({ message: "User does not exist!" })
        }
        let correctPassword = await bcrypt.compare(password, user[0].password)
        if (!correctPassword) {
            return res.status(404).json({ message: "User does not exist!" })
        }
        const payload = user.map(usr => {
            const { password, role, ...rest } = usr
            return rest
        })
        const token = jwt.sign(payload[0], process.env.SECRET_KEY as string, { expiresIn: "3600s" })
        return res.json({ mesage: "Login Successfull!", token })
    } catch (error: any) {
        return res.status(500).json(error.message)
    }
}