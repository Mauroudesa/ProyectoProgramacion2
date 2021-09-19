const usuariosData = {
    lista: [
            {
                id: 1,
                nombreUsuario:'Mauro',
                imgPerfil: "/images/perfil1.jpg",
                
            },
            {
                id: 2,
                nombreUsuario:'Facundyhtyhto',
                imgPerfil: "/images/perfil2.jpg",
                
            },
            {
                id: 3,
                nombreUsuario:'Magrturo',
                imgPerfil: "/images/perfil3.jpg",
                
            },
            {
                id: 4,
                nombreUsuario:'Aldean',
                imgPerfil: "/images/perfil4.jpg",
                
            },
            {
                id: 5,
                nombreUsuario:'Alayyyn',
                imgPerfil:"/images/perfil5.jpg" ,
                
            },
            {
                id: 6,
                nombreUsuario:'TheCryptoMan',
                imgPerfil: "/images/perfil6.jpg",
                
            },
            {
                id: 7,
                nombreUsuario:'ToTheMoon',
                imgPerfil: "/images/perfil7.jpg",
                
            },
            {
                id: 8,
                nombreUsuario:'BullMarket',
                imgPerfil: "/images/perfil8.jpg",
                
            },
            {
                id: 9,
                nombreUsuario:'DoGeMoon',
                imgPerfil: "/images/perfil9.jpg",
                
            }, 
            

    ],
    findUsername: function (id) { //! va a recorrer todo el posteo y me va a devolver el parametro que yo halla seleccionado como ID
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].id == id) {
                return this.lista[i]
            }
        }
        
    },
    findByUsername: function (username) {
        for (let index = 0; index < usuariosData.lista.length; index++) {
            if (usuariosData.lista[index].nombreUsuario == username) {
                return usuariosData.lista[index];
            }
        }
    }
            };
            module.exports = usuariosData;


