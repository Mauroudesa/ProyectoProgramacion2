module.exports = (sequelize, dataTypes) => {
    const Posteos = sequelize.define('posteos', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre_producto: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.TEXT
        },
        descripcion: {
            type:dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            field: "ID_USUARIO"
        },
        uploaded: {
            type:dataTypes.STRING
        }
    },  //configuracion
    {
        tableName: 'posteos',
    });

    Producto.associate = (db) => { //db lo pasa el sequelize cli, en el index.js (el require esta ahi y me llega como parametro)
        Producto.belongsTo(db.Usuarios, { //relacion uno a muchos 1 usuario, muchos productos, nombre del modelo con el que se relaciona
            as: "usuario", //nombre de la relacion --> se utiliza cuando la tengo que usar en el controlador
            foreignKey: "ID_USUARIO" //nombre del campo con la clave foranea
        }); 
        //El producto tiene muchos comentarios
        Producto.hasMany(db.Comentarios, {
            as: "comentarios",
            foreignKey: "ID_POST",
        });
    };

    return Producto;
}