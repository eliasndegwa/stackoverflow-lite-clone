import mssql from 'mssql';
import { sqlConfig } from '../config';

export class DatabaseHelper {
    private static pool: Promise<mssql.ConnectionPool> = mssql.connect(sqlConfig)
    
    private static addInputsToRequest(request: mssql.Request, data: { [x: string]: string | number } = {}) {

        const keys = Object.keys(data)
        keys.map(keyName => {
            return request.input(keyName, data[keyName])

        })
        return request
    }
    static async exec(storedProcedure: string, data: { [x: string]: string | number } = {}) {

        let request: mssql.Request = (await DatabaseHelper.pool).request()
        request = DatabaseHelper.addInputsToRequest(request, data)
        return await request.execute(storedProcedure)

    }

    static async query(queryString: string) {
        return (await DatabaseHelper.pool).request().query(queryString)

    }
}