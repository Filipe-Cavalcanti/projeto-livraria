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
];

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
};

app.get("/", (req, res) => {
    res.status(200).send("Curso de node.js"); //.send envia mensagens simples apenas
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros); // para envio de dados mais elaborados, utilizar .json
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
});

export default app;