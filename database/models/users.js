module.exports= (sequelize,dataTypes) => {

    const alias = 'usuarios';

    const cols = {

        id_usuario:{ //declaro las columnas de la base de datos, mismo nombre que la db.
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre_usuario:{
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        contrasena: {
            type: dataTypes.STRING
        },
        foto_perfil: {
            type: dataTypes.STRING
        },
        fecha:{
            type: dataTypes.DATE
        },
        descripcion:{
            type: dataTypes.STRING
        },
        seguidos: {
            type: dataTypes.STRING
        },
        seguidores: {
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
    tableName: 'usuarios',
    timestamps: false, 
    underscored: true 
    }

    
    
    
    const usuarios = sequelize.define(alias,cols,config)

        usuarios.associate = function(models) {

        usuarios.hasMany(models.posteos,{
            as:'posts', 
            foreignKey:'id_usuario_creo' //ver si esta ok
        });
        usuarios.hasMany(models.follow,{
            as:'Follower', 
            foreignKey:'Following_id'
        });
        usuarios.hasMany(models.follow,{
            as:'Following', 
            foreignKey:'Follower_id'
        });

    };
    return usuarios;

}
