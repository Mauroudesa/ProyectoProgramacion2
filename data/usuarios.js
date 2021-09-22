const usuariosData = {
    lista: [
            {
                id: 1,
                nombreUsuario:'ylzclk',
                imgPerfil: "/images/perfil11.jpg",
                descripcion: 'Creadora de diseñador gráfico de 32 años: TheBirthOfArt / TheLifeOfArt en Opensea Turquía',
                twitter: 'https://twitter.com/ylzkrtt',
            },
            {
                id: 2,
                nombreUsuario:'numo',
                imgPerfil: "/images/perfil15.jpg",
                descripcion: 'Hola, aquí está Numo, un artista de píxeles entusiasta. Que hacen todo tipo de pixel art. También me encanta el desarrollo de juegos e indie. ¡No dude en ponerse en contacto conmigo!',
                twitter: 'https://twitter.com/numo_0',
                
            },
            {
                id: 3,
                nombreUsuario:'SalvoIn3D',
                imgPerfil: "/images/perfil12.png",
                descripcion: 'Soy un artista 3D de 21 años. Cada pieza para mí es una experiencia que quiero que todos disfruten.', 
                twitter: 'https://twitter.com/salvo3_d',
                
            },
            {
                id: 4,
                nombreUsuario:'Fantarchi',
                imgPerfil: "/images/perfil13.jpg",
                descripcion: ' Mi nombre es Siebold Nijenhuis. Soy un arquitecto holandés. Soy arquitecto independiente desde hace más de 20 años y siempre me ha fascinado el arte digital y el modelado 3D. Ahora uso este alias para crear nuevas obras de arte arquitectónicas y NFT.',
                twitter:'https://twitter.com/fantarchi',
                
            },
            {
                id: 5,
                nombreUsuario:'pnkfdarts',
                imgPerfil:"/images/perfil14.jpg" ,
                descripcion: 'Papá primero. Artista digital en segundo lugar. Human - Nature - Renders de ciencia ficción. para E. y N. ❤️',
                twitter: 'https://twitter.com/pnkfd',
                
            },
            {
                id: 6,
                nombreUsuario:'HarshiniJK',
                imgPerfil: "/images/perfil16.jpg",
                descripcion: 'Artista digital, fotógrafa, proyectista y creador de collages de Sri Lanka-Perú. Hagamos magia x',
                twitter: 'https://twitter.com/HarshiniJK',

                
            },
            {
                id: 7,
                nombreUsuario:'Soma',
                imgPerfil: "/images/perfil17.jpg",
                descripcion: 'Mi nombre es Joel y soy un diseñador y artista visual (en su mayoría) autodidacta con sede en San Francisco.',
                twitter: 'https://twitter.com/soma_rgb',
                
            },
            {
                id: 8,
                nombreUsuario:'Daniel Green',
                imgPerfil: "/images/perfil18.jpg",
                descripcion: 'Constructor de sueños, manipulador de mundos ...', 
                twitter: 'https://twitter.com/digitalgyoza',
            },
            {
                id: 9,
                nombreUsuario:'Kunststort',
                imgPerfil: "/images/perfil19.jpg",
                descripcion: 'Artista digital holandés',
                twitter: 'https://twitter.com/Kunststort', 
                
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


