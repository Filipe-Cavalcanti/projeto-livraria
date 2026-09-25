import express from "express";

const app = express();
app.use(express.json()); // Middleware

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id:2,
        titulo: "O Hobbit"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Curso de node.js"); //.send envia mensagens simples apenas
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros); // para envio de dados mais elaborados, utilizar .json
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
})

export default app;