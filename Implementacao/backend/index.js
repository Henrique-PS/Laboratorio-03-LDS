const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "sistemamoedas",
})

app.use(cors());
app.use(express.json());
// app.get('/', (req, res) => {
//     let SQL = "INSERT INTO aluno ( cpf, matricula ) VALUES ( '1233444', '121' )";
//     db.query(SQL, (err, result)=>{
//         console.log(err);
//     })
// });

app.listen(3001, ()=>{
    console.log("rodando servidor");
})