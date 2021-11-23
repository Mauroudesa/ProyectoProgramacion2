module.exports= (sequelize,dataTypes) => {
    const alias = 'comentarios';
    const cols = {
        id_comentario:{ //declaro las columnas de la base de datos
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_post: {
            type: dataTypes.INTEGER
        },
        id_usuario: {
            type: dataTypes.INTEGER
        },
        contenido:{
            type: dataTypes.STRING
        },
        created_at:{
            type: dataTypes.DATE
        },
        updated_at:{
            type: dataTypes.DATE
        }
    }
    const config = {
    tableName: 'comentarios',//Poner como este en la base de datos
    timestamps: true, //siempre poner false excepto q este muy seguro
    underscored: true 
    }
    const comentarios = sequelize.define(alias,cols,config)

    comentarios.associate = function (models) {
        comentarios.belongsTo(models.posteos, {
            as:'post',
            foreignKey: 'id_post'
        });
        comentarios.belongsTo(models.usuarios, {
            as:'author',
            foreignKey: 'id_usuario'
        });
        
    };

    return comentarios;
}
