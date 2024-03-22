const livros = [
    {"id": 1, "titulo": "hola", "num_paginas": 5, "isbn": "5", "editora": "bryant" },
    {"id": 1, "titulo": "hola", "num_paginas": 5, "isbn": "5", "editora": "bryant" },
    {"id": 1, "titulo": "hola", "num_paginas": 5, "isbn": "5", "editora": "bryant" },
]


getLivros = (req, res) =>{
    res.status(200).send(livros);
}

getOneLivro = (req, res) =>{
    let id = req.params.id;
    const livro = livros.find((item) => item.id === Number(id));
    if(livro){
        res.status(200).send(livro);
    }else{
        res.status(404).send('Não foi encontrado o livro com esse id')
    }
}

createLivro = (req, res) => {
    const livro = req.body;
    if(Object.keys(livro).length > 0){
        livros.push(livro);
        res.status(201).send({mensagem:'Livro cadastrado com sucesso'});
    }else{
        res.status(406).send('Não foi possivel adicionar o livro')
    }

    
}

updateLivro = (req, res) => {
    let id = req.params.id;
    let indice = findLivrosIndex(id);
    livros[indice] = req.body;
    console.log(id);
    res.status(201).send({mensagem:'Livro atualizado com sucesso'});
}

findLivrosIndex = (id) => {
    const indice = livros.findIndex((item) => item.id === Number(id));
    return indice
    
}

removeLivro = (req, res) => {
    let id = req.params.id;
    let indice = findLivrosIndex(id);
    livros.splice(indice, 1);
    res.status(200).send({mensagem:`O livro de id: ${id} foi removido com sucesso!`});
}

module.exports = {getLivros, getOneLivro, createLivro, updateLivro, removeLivro};