  
let users = require('./usuarios');

let comments = {
    lista: [
        { post_id: 1, user: users.findByUsername('DoGeMoon'), contenido: 'Muy buenooo', fecha: '15 de febrero', likes: 0 },
        { post_id: 1, user: users.findByUsername('ToTheMoon'), contenido: 'jajajajaja', fecha: '15 de febrero', likes: 2 },
        { post_id: 1, user: users.findByUsername('DoGeMoon'), contenido: 'Lo quierooo', fecha: '15 de febrero', likes: 2 },
        { post_id: 2, user: users.findByUsername('ToTheMoon'), contenido: 'Muy caro che', fecha: '15 de febrero', likes: 2 },
        { post_id: 3, user: users.findByUsername('ToTheMoon'), contenido: 'ZARPADOOOO', fecha: '15 de febrero', likes: 2 },
        { post_id: 3, user: users.findByUsername('BullMarket'), contenido: 'El mejor que vi x ahora', fecha: '15 de febrero', likes: 2 },
        { post_id: 3, user: users.findByUsername('BullMarket'), contenido: 'wooooooooow', fecha: '15 de febrero', likes: 2 },
        { post_id: 4, user: users.findByUsername('DoGeMoon'), contenido: 'Damelo YA', fecha: '15 de febrero', likes: 2 },
        { post_id: 4, user: users.findByUsername('DoGeMoon'), contenido: 'Te hablo al md', fecha: '15 de febrero', likes: 2 },
        { post_id: 4, user: users.findByUsername('ToTheMoon'), contenido: 'MIOOOOOOO', fecha: '15 de febrero', likes: 2 },
        { post_id: 5, user: users.findByUsername('DoGeMoon'), contenido: 'Muy buenooo', fecha: '15 de febrero', likes: 2 },
        { post_id: 5, user: users.findByUsername('DoGeMoon'), contenido: 'ZARPADOOOO', fecha: '15 de febrero', likes: 2 },
        { post_id: 6, user: users.findByUsername('DoGeMoon'), contenido: 'MIOOOOOOO', fecha: '15 de febrero', likes: 2 },
        { post_id: 6, user: users.findByUsername('ToTheMoon'), contenido: 'LO NECESITO', fecha: '15 de febrero', likes: 2 },
        { post_id: 6, user: users.findByUsername('DoGeMoon'), contenido: 'Aceptas otra moneda', fecha: '15 de febrero', likes: 2 },
        { post_id: 7, user: users.findByUsername('Magrturo'), contenido: 'Quien va a querer eso', fecha: '15 de febrero', likes: 2 },
        { post_id: 7, user: users.findByUsername('DoGeMoon'), contenido: 'WOOOOOOW', fecha: '15 de febrero', likes: 2 },
        { post_id: 7, user: users.findByUsername('DoGeMoon'), contenido: 'JAJAJAJA muy malo', fecha: '15 de febrero', likes: 2 },
        { post_id: 8, user: users.findByUsername('Magrturo'), contenido: 'Bajalo un poco y lo compro hoy', fecha: '15 de febrero', likes: 2 },
        { post_id: 8, user: users.findByUsername('Magrturo'), contenido: 'Te hablo al priv', fecha: '15 de febrero', likes: 2 },
        { post_id: 9, user: users.findByUsername('DoGeMoon'), contenido: 'como mejoraste', fecha: '15 de febrero', likes: 2 },
        { post_id: 9, user: users.findByUsername('BullMarket'), contenido: 'Me encanta', fecha: '15 de febrero', likes: 2 },
        { post_id: 9, user: users.findByUsername('BullMarket'), contenido: 'WOOOW', fecha: '15 de febrero', likes: 2 },
        { post_id: 10, user: users.findByUsername('DoGeMoon'), contenido: 'MIOOOOOOO', fecha: '15 de febrero', likes: 2 },
        { post_id: 10, user: users.findByUsername('ToTheMoon'), contenido: 'LO NECESITO', fecha: '15 de febrero', likes: 2 },
        { post_id: 11, user: users.findByUsername('DoGeMoon'), contenido: 'Aceptas otra moneda', fecha: '15 de febrero', likes: 2 },
        { post_id: 11, user: users.findByUsername('DoGeMoon'), contenido: 'MIOOOOOOO', fecha: '15 de febrero', likes: 2 },
        { post_id: 12, user: users.findByUsername('ToTheMoon'), contenido: 'LO NECESITO', fecha: '15 de febrero', likes: 2 },
        { post_id: 12, user: users.findByUsername('DoGeMoon'), contenido: 'Aceptas otra moneda', fecha: '15 de febrero', likes: 2 },
        { post_id: 13, user: users.findByUsername('DoGeMoon'), contenido: 'MIOOOOOOO', fecha: '15 de febrero', likes: 2 },
        { post_id: 13, user: users.findByUsername('ToTheMoon'), contenido: 'LO NECESITO', fecha: '15 de febrero', likes: 2 },
        { post_id: 14, user: users.findByUsername('DoGeMoon'), contenido: 'Aceptas otra moneda', fecha: '15 de febrero', likes: 2 },
        { post_id: 14, user: users.findByUsername('DoGeMoon'), contenido: 'MIOOOOOOO', fecha: '15 de febrero', likes: 2 },
        { post_id: 14, user: users.findByUsername('ToTheMoon'), contenido: 'LO NECESITO', fecha: '15 de febrero', likes: 2 },
        { post_id: 14, user: users.findByUsername('DoGeMoon'), contenido: 'Aceptas otra moneda', fecha: '15 de febrero', likes: 2 },
        { post_id: 15, user: users.findByUsername('ToTheMoon'), contenido: 'ZARPADOOOO', fecha: '15 de febrero', likes: 2 },
        { post_id: 15, user: users.findByUsername('BullMarket'), contenido: 'El mejor que vi x ahora', fecha: '15 de febrero', likes: 2 },
        { post_id: 16, user: users.findByUsername('BullMarket'), contenido: 'wooooooooow', fecha: '15 de febrero', likes: 2 },
        { post_id: 16, user: users.findByUsername('DoGeMoon'), contenido: 'Damelo YA', fecha: '15 de febrero', likes: 2 },


    ],
    findByPost: function (postId) {
        let result = [];
        for (let i = 0; i < comments.lista.length; i++) {
            if (comments.lista[i].post_id == postId) {
                result.push(comments.lista[i]);
            }
        }
        return result;
    },
    
}

module.exports = comments;