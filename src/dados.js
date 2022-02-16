const   bancoDeDados = {
                        noticias    :  [
                                            {
                                                id:1,
                                                "title":"CORS",
                                                "intro":"Certain CORS requests are considered 'complex' and require an initial OPTIONS request (called the 'pre-flight request'). An example of a 'complex' CORS request is one that uses an HTTP verb other than GET/HEAD/POST",
                                                "type":"programação"
                                            },
                                            {
                                                id:2,
                                                title:"includes()",
                                                intro:"O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false.",
                                                type:"programação"
                                            },
                                            {
                                                id:3,
                                                "title":"lastIndexOf()",
                                                "intro":"O método lastIndexOf() retorna o índice da última ocorrência do valor especificado encontrado na String. Quando fromIndex é especificado, a pesquisa é realizada de trás para frente. Retorna -1 se o valor não for encontrado.",
                                                "type":"programação"
                                            }
                                        ],
                        categorias  : ["esportes","vida","comida","fama","programação"]
                    }                   

module.exports = bancoDeDados;