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

app.post("/registerAluno", (req, res)=>{
    const { nome } = req.body;
    const { email } = req.body;
    const { senha } = req.body;
    const { cpf } = req.body;
    const { instituicao } = req.body;
    const { curso } = req.body;
    const { matricula } = req.body;
    const { rg } = req.body;
    const { endereco } = req.body;

    let SQL = "INSERT INTO aluno (nome, email, senha, cpf, instituicao, curso, matricula, moedas, rg, endereco) VALUES ( ?,?,?,?,?,?,?,?,?,? )";
    db.query(SQL, [nome, email, senha, cpf, instituicao, curso, matricula, 0, rg, endereco], (err, result) =>{
        if(err) console.log(err);
    });
});

app.post("/registerEmpresa", (req, res)=>{
    const { nome } = req.body;
    const { email } = req.body;
    const { senha } = req.body;
    const { cnpj } = req.body;

    let SQL = "INSERT INTO empresa (nome, email, senha, cnpj ) VALUES ( ?,?,?,? )";
    db.query(SQL, [nome, email, senha, cnpj], (err, result) =>{
        if(err) console.log(err);
    });
});

app.post("/loginEmpresa", (req, res)=>{
    const { email } = req.body;
    const { senha } = req.body;

    let SQL = "SELECT * FROM empresa WHERE email = ? and senha = ?";
    db.query(SQL, [email, senha], (err, result) =>{
        if(err) console.log(err);
        else res.send(result);
    
    });
});

// app.get('/', (req, res) => {
//     let SQL = "INSERT INTO aluno ( cpf, matricula ) VALUES ( '1233444', '121' )";
//     db.query(SQL, (err, result)=>{
//         console.log(err);
//     })
// });

app.listen(3001, ()=>{
    console.log("rodando servidor");
})