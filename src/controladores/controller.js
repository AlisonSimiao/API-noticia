const { noticias, categorias } = require("../dados");

const noticias_ = (req,res)=>{
    const {search } = req.query;
    if(!search)
        return res.send(noticias);

    const result = noticias.filter((not)=>{
        return not.intro.toUpperCase().includes(search.toUpperCase()) || not.title.includes(search) || not.type.includes(search);
    }) 

    res.send(result);
}

const categorias_ = (req,res)=>{
    res.send(categorias);
}
const noticiaDel = (req,res)=>{
    const { idNoticia } = req.params;

    const indexNot = noticias.findIndex((n)=>{
        return n.id === Number(idNoticia);
    })

    if(indexNot < 0){
        return res.status(404).send({mensagem: "index not found"})
    }
    
    noticias.splice(indexNot, 1);
    
    res.send({mensagem: "sucesso"})
}


const categoriaPost = (req,res)=>{
    const { categoria } = req.body;
   
    if(categoria.trim().length == 0)
        return res.status(400).send({mensagem: "categoria vazia"});

    if( categorias.indexOf( categoria ) > 0)
        return res.status(400).send( {mensagem: "categoria ja existe"});

    categorias.push( categoria );
    
    res.send( {mensagem: "Adicionado com sucesso"});
}

let id = 4;
const noticiaPost = (req,res)=>{
    const { titulo, categoria, intro } = req.body;

    if( !categoria.trim().length || !titulo.trim().length || !intro.trim().length)
        return res.status(400).send({mensagem: "um dos parametros vazio"});
    
    const noticia = {
        id: id++,
        titulo, 
        categoria, 
        intro
    }

    noticias.push( noticia );

    res.status(201).send({mensagem: "Adicionado com sucesso"});
}

module.exports = {
    noticias: noticias_,
    categorias: categorias_,
    categoriaPost,
    noticiaPost,
    noticiaDel
}