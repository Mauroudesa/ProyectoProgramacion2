let posts = {
    lista: [
        {
        id:1,
        imagen:"/images/z3nft.webp",
        createdAt:"15 de Febrero",
        likes:8,
        CryptoAcepted:"SOL",
        price:3,
        user_id: 1,
        user: {id: 1, username: 'name', },
        comentarios:[
            {contenido: "tremendoo", fecha:'15 de febrero', likes: 0},
            {contenido: "Lo quiero", fecha:'16 de febrero', likes: 3},
        ]
    },
    {
        id:2,
        imagen:"/images/zmasdng.jpg",
        createdAt:"19 de noviembre",
        likes:13,
        CryptoAcepted:"BTC",
        price:0.5,
        user_id: 2,
        user: {id: 2, username: 'name', },
        comentarios:[
            {contenido: "Woow", fecha:'23 de noviembre', likes: 5},
            {contenido: "Muy caro", fecha:'16 de Diciembre', likes: 2},
        ]
    },
    {
        id:3,
        imagen:"/images/znfiqwe.png",
        createdAt:"15 de marzo",
        likes:200,
        CryptoAcepted:"BNB",
        price:10,
        user_id: 3,
        user: {id: 3, username: 'name', },
        comentarios:[
            {contenido: "Tengo ETH, te sirve?", fecha:'28 de marzo', likes: 30},
            {contenido: "Hiciste mejores", fecha:'16 de marzo', likes: 50},
        ]
    },
    {
        id:4,
        imagen:"/images/znft.jpg",
        createdAt:"28 de diciembre" ,
        likes:80,
        CryptoAcepted:"ETH",
        price:5,
        user_id: 4,
        user: {id: 4, username: 'name', },
        comentarios:[
            {contenido: "tremendoo", fecha:'30 de diciembre', likes: 3},
            {contenido: "Lo quiero", fecha:'31 de diciembre', likes: 18},
        ],
    },
    
    {
        id:5,
        imagen:"/images/znftdas.jpg",
        createdAt:"18 de Mayo",
        likes:800,
        CryptoAcepted:"BTC",
        price:2,
        user_id: 5,
        user: {id: 5, username: 'name', },
        comentarios:[
            {contenido: "tremendoo", fecha:'20 de mayo', likes: 203},
            {contenido: "Lo quiero", fecha:'23 de mayo', likes: 308},
        ]
    },
    {
        id:6,
        imagen:"/images/znftete.jpg",
        createdAt:"28 de junio",
        likes:857,
        CryptoAcepted:"ETH",
        price:3,
        user_id: 6,
        user: {id: 6, username: 'name', },
        comentarios:[
            {contenido: "WOOOOOW", fecha:'15 de julio', likes: 15},
            {contenido: "Le falta color", fecha:'1 de julio', likes: 700},
        ]
    },
    {
        id:7,
        imagen:"/images/imagen-nft2.jpg",
        createdAt:"15 de enero",
        likes:48,
        CryptoAcepted:"BNB",
        price:8,
        user_id: 7,
        user: {id: 7, username: 'name', },
        comentarios:[
            {contenido: "Carito carito", fecha:'15 de febrero', likes: 8},
            {contenido: "Asi nunca vas a vender", fecha:'16 de febrero', likes: 40},
        ]
    },
    {
        id:8,
        imagen:"/images/imagen-nft1.jpg",
        createdAt:"18 de Febrero",
        likes:5,
        CryptoAcepted:"ETH",
        price:1,
        user_id: 8,
        user: {id: 8, username: 'name', },
        comentarios:[
            {contenido: "Me encanto!", fecha:'23 de febrero', likes: 0},
            {contenido: "Me interesa!", fecha:'26 de febrero', likes: 1},
        ]
    },
    {
        id:9,
        imagen:"/images/nftEST.png",
        createdAt:"15 de agosto",
        likes:87,
        CryptoAcepted:"BTC",
        price:2,
        user_id: 9,
        user: {id: 9, username: 'name', },
        comentarios:[
            {contenido: "WOOOOW", fecha:'15 de septiembre', likes:12},
            {contenido: "Uffff", fecha:'19 de diciembre', likes: 40},
        ]
    },
    ],
    find: function (id) { //! va a recorrer todo el posteo y me va a devolver el parametro que yo halla seleccionado como ID
        for (let i = 0; i < posts.lista.length; i++) {
            if (posts.lista[i].id == id) {
                return posts.lista[i]
            }
        }
        
    },
    findByUser: function (userId) { //! va a recorrer todo el posteo y me va a devolver el parametro que yo halla seleccionado como ID
        let result = [];
        for (let i = 0; i < posts.lista.length; i++) {
            if (posts.lista[i].user_id == userId) {
                result.push(posts.lista[i]);
            }
        }
        return result;
    },
}
module.exports = posts;