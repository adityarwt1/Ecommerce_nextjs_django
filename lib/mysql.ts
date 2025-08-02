import { createPool} from "mysql2";


const setup  = createPool({
    host: "localhost",
    user:"root",
    password: "14920251",
    database:"ecommerce"
})

const pool = setup.promise()

export default pool
