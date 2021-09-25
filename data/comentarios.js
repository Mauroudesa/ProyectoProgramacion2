  
let users = require('./usuarios');

let comments = {
    lista: [
        { post_id: 1, user: users.findByUsername('Kunststort'), contenido: 'Muy buenooo', fecha: '15 de marzo', likes: 0, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 1, user: users.findByUsername('Soma'), contenido: 'jajajajaja', fecha: '15 de enero', likes: 2, imgPerfil: "/images/perfil7.jpg", },
        { post_id: 1, user: users.findByUsername('Kunststort'), contenido: 'Lo quierooo', fecha: '16 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 2, user: users.findByUsername('numo'), contenido: 'Muy caro che', fecha: '18 de febrero', likes: 2, imgPerfil: "/images/perfil7.jpg", },
        { post_id: 2, user: users.findByUsername('numo'), contenido: 'Muy carosss che', fecha: '25 de febrero', likes: 2, imgPerfil: "/images/perfil7.jpg", },
        { post_id: 2, user: users.findByUsername('numo'), contenido: 'NOOO', fecha: '18 de Diciembre', likes: 2, imgPerfil: "/images/perfil7.jpg", },
        { post_id: 2, user: users.findByUsername('Kunststort'), contenido: 'DAMELO', fecha: '28 de Agosto', likes: 2, imgPerfil: "/images/perfil9.jpg", },
        { post_id: 2, user: users.findByUsername('SalvoIn3D'), contenido: 'Lo quier', fecha: '30 de Mayo', likes: 2, imgPerfil: "/images/perfil12.png", },
        { post_id: 2, user: users.findByUsername('SalvoIn3D'), contenido: 'ME ENCANTAA', fecha: '15 de Julio', likes: 2, imgPerfil: "/images/perfil12.png", },
        { post_id: 2, user: users.findByUsername('numo'), contenido: 'Meh', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil7.jpg", },
        { post_id: 2, user: users.findByUsername('Daniel Green'), contenido: 'Muy caro che', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil18.jpg", },
        { post_id: 2, user: users.findByUsername('numo'), contenido: 'Muy caro che', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil7.jpg", },
        { post_id: 3, user: users.findByUsername('Soma'), contenido: 'ZARPADOOOO', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil7.jpg", },
        { post_id: 3, user: users.findByUsername('Daniel Green'), contenido: 'El mejor que vi x ahora', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil8.jpg", },
        { post_id: 3, user: users.findByUsername('Daniel Green'), contenido: 'wooooooooow', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil8.jpg", },
        { post_id: 4, user: users.findByUsername('Kunststort'), contenido: 'Damelo YA', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 4, user: users.findByUsername('Kunststort'), contenido: 'Te hablo al md', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 4, user: users.findByUsername('Soma'), contenido: 'MIOOOOOOO', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil7.jpg", },
        { post_id: 5, user: users.findByUsername('Kunststort'), contenido: 'Muy buenooo', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 5, user: users.findByUsername('Kunststort'), contenido: 'ZARPADOOOO', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 6, user: users.findByUsername('Kunststort'), contenido: 'MIOOOOOOO', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 6, user: users.findByUsername('Soma'), contenido: 'LO NECESITO', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil7.jpg", },
        { post_id: 6, user: users.findByUsername('Kunststort'), contenido: 'Aceptas otra moneda', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 7, user: users.findByUsername('SalvoIn3D'), contenido: 'Quien va a querer eso', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil12.png",},
        { post_id: 7, user: users.findByUsername('Kunststort'), contenido: 'WOOOOOOW', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg"},
        { post_id: 7, user: users.findByUsername('Kunststort'), contenido: 'JAJAJAJA muy malo', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 8, user: users.findByUsername('SalvoIn3D'), contenido: 'Bajalo un poco y lo compro hoy', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil12.png", },
        { post_id: 8, user: users.findByUsername('SalvoIn3D'), contenido: 'Te hablo al priv', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil12.png",},
        { post_id: 9, user: users.findByUsername('Kunststort'), contenido: 'como mejoraste', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 9, user: users.findByUsername('Daniel Green'), contenido: 'Me encanta', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil8.jpg", },
        { post_id: 9, user: users.findByUsername('Daniel Green'), contenido: 'WOOOW', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil8.jpg", },
        { post_id: 10, user: users.findByUsername('Kunststort'), contenido: 'MIOOOOOOO', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 10, user: users.findByUsername('Soma'), contenido: 'LO NECESITO', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil7.jpg", },
        { post_id: 11, user: users.findByUsername('Kunststort'), contenido: 'Aceptas otra moneda', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 11, user: users.findByUsername('Kunststort'), contenido: 'MIOOOOOOO', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 12, user: users.findByUsername('Soma'), contenido: 'LO NECESITO', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil7.jpg", },
        { post_id: 12, user: users.findByUsername('Kunststort'), contenido: 'Aceptas otra moneda', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 13, user: users.findByUsername('Kunststort'), contenido: 'MIOOOOOOO', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 13, user: users.findByUsername('Soma'), contenido: 'LO NECESITO', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil7.jpg", },
        { post_id: 14, user: users.findByUsername('Kunststort'), contenido: 'Aceptas otra moneda', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 14, user: users.findByUsername('Kunststort'), contenido: 'MIOOOOOOO', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 14, user: users.findByUsername('ToTheMoon'), contenido: 'LO NECESITO', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil7.jpg", },
        { post_id: 14, user: users.findByUsername('Kunststort'), contenido: 'Aceptas otra moneda', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 15, user: users.findByUsername('Soma'), contenido: 'ZARPADOOOO', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil7.jpg", },
        { post_id: 15, user: users.findByUsername('Daniel Green'), contenido: 'El mejor que vi x ahora', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil8.jpg", },
        { post_id: 16, user: users.findByUsername('Daniel Green'), contenido: 'wooooooooow', fecha: '15 de febrero', likes: 2 , imgPerfil: "/images/perfil8.jpg",},
        { post_id: 16, user: users.findByUsername('Kunststort'), contenido: 'Damelo YA', fecha: '15 de febrero', likes: 2, imgPerfil: "/images/perfil9.jpg" },
        { post_id: 36, user: users.findByUsername('SalvoIn3D'), contenido: 'Muy bueno numo', fecha: '15 de febrero', likes: 32, imgPerfil: "/images/perfil12.png", },

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