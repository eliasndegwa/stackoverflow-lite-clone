import express, { Request, Response } from 'express'
import { Todo } from '../interfaces/interfaces'



let todos:Todo[]=[]

export const getAll=(req:Request,res:Response)=>{
    res.status(200).json(todos)
}

//add a todo
export const addTodo=(req:Request,res:Response)=>{
    const{title,description}=req.body as Todo
    todos.push({id:Math.floor(Math.random()*10000),title,description})
    return res.status(201).json({message:'added successfully'})
}

//get one todo
export const getById=(req:Request<{id:string}>,res:Response)=>{
    const{id}=req.params
    const todo=todos.find(t=>{
        return t.id===parseInt(id)
    })
    if(todo){
        return res.status(200).json(todo)
    }else{
       res.status(404).json({message:'not found!'})
    }
}

//update todo
export const updateTodo=(req:Request<{id:string}>,res:Response)=>{
    const{id}=req.params
    const{title,description}=req.body
    const index=todos.findIndex(t=>{
        return t.id===parseInt(id)
    })
    if(index>=0){
        todos[index]={id:parseInt(id),title,description}
        return res.status(204).json({message:"Updated successfully"})
    }
    return res.status(404).json({message:"Not found"})
}

//delete todo
export const deleteTodo=(req:Request<{id:string}>,res:Response)=>{
    const{id}=req.params
    const index=todos.findIndex(t=>{
        return t.id===parseInt(id)
    })

    if(index>=0){
        todos.splice(index,1)
        return res.status(204).json({message:"deleted successfully"})
    }
    return res.status(404).json({message:"Not found"})
}