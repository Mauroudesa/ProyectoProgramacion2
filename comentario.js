module.exports = (sequelize, dataTypes) => {
    const Comentarios = sequelize.define('COMENTARIO', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.TEXT
        },
    }, //configuracion
    {
        tableName: 'COMENTARIOS',
    }
    );
    //Asocio al comentario con un producto y con un usuario
    Comentarios.associate = (db) => {
        Comentarios.belongsTo(db.Usuarios, {
            as: "usuario",
            foreignKey: "ID_USUARIO",
        });
    }

    return Comentarios;  
}