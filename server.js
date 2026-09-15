const express = require('express');
const cors = require('cors');

// import express from "express";
// impor cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// {
// "nome" : "Pedro",
// "idade" : 20,
//}

let users = ALUNOS = [
    {id: 1, nome: "Alice", curso: "Desenvolvimento de Sistemas"},
    {id: 2, nome: "Brenda", curso: "Redes de Computadores"},
    {id: 3, nome: "Brenno", curso: "Administração"},
    {id: 4, nome: "Carlos", curso: "Desenvolvimento"},
];

app.get("/", (req, res) => {
    res.json({
        Mensagem: "API alunos funcionando"
    });
});

app.get("/alunos",(req,res)=> {
    res.json(ALUNOS);
})

const PORTA = 3000;

app.listen(PORTA, () => {
    console.log(`Servidor iniciado com sucesso!`);
    console.log(`http://localhost:${PORTA}`);
});

