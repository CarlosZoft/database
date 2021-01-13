const database = require('./database');

var dados = [
    {nome: "League of legends",
    },
    {nome: "Apex legends",
    preco: 60.6},
    {nome: "Euro truck simulator",
    preco: 150.6}
]

database.insert(dados).into("games").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err)
})
