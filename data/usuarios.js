const usuariosData = {
    lista: [
            {
                id: 1,
                nombreUsario:'Afdslan',
                imgPerfil: "/images/perfil1.jpg",
                
            },
            {
                id: 2,
                nombreUsario:'Facundyhtyhto',
                imgPerfil: "/images/perfil2.jpg",
                
            },
            {
                id: 3,
                nombreUsario:'Magrturo',
                imgPerfil: "/images/perfil3.jpg",
                
            },
            {
                id: 4,
                nombreUsario:'Aldean',
                imgPerfil: "/images/perfil4.jpg",
                
            },
            {
                id: 5,
                nombreUsario:'Alayyyn',
                imgPerfil:"/images/perfil5.jpg" ,
                
            },
            {
                id: 6,
                nombreUsario:'Alanjjj',
                imgPerfil: "/images/perfil6.jpg",
                
            },
            {
                id: 7,
                nombreUsario:'Alahhhn',
                imgPerfil: "/images/perfil7.jpg",
                
            },
            {
                id: 8,
                nombreUsario:'Alaggn',
                imgPerfil: "/images/perfil8.jpg",
                
            },
            {
                id: 9,
                nombreUsario:'Alanrffe',
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
            };
            module.exports = usuariosData;


