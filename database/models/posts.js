module.exports= (sequelize,dataTypes) => {
    const alias = 'posteos';
    const cols = {
        id_post:{ //declaro las columnas de la base de datos
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_usuario_creo: {
            type: dataTypes.INTEGER
        },
        imagen: {
            type: dataTypes.STRING
        },
        fecha_registro: {
            type: dataTypes.DATE
        },
        precio_sol: {
            type: dataTypes.INTEGER
        },
        likes: {
            type: dataTypes.INTEGER
        },
        created_at:{
            type: dataTypes.DATE
        },
        updated_at:{
            type: dataTypes.DATE
        },
        fotoPerfil: {
            type: dataTypes.STRING
        },
    }
    const config = {
    tableName: 'posteos',//Poner como este en la base de datos
    timestamps: false, //siempre poner false excepto q este muy seguro
    underscored: false
    }
    const posteos = sequelize.define(alias,cols,config)
    
    posteos.associate = function(models) {
        posteos.hasMany(models.comentarios,{
            as:'comments', 
            foreignKey:'id_post'
        });
        posteos.belongsTo(models.usuarios,{
            as:'autor', 
            foreignKey:'id_usuario_creo'
        });
    };
    return posteos;
}
