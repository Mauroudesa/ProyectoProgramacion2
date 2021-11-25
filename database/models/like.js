module.exports= (sequelize,dataTypes) => {

    const alias = 'like';

    const cols = {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }
    }

    const config = {

            tableName: 'like', //Poner como este en la base de datos
            timestamps: false, //siempre poner false excepto q este muy seguro
            underscored: true 

    }


    const like = sequelize.define(alias,cols,config)

    like.associate = function (models) {
        like.belongsTo(models.usuarios, {
            as:'usuario',
            foreignKey: 'ID_USUARIO' 
        });
        like.belongsTo(models.usuarios, {
            as:'post',
            foreignKey: 'ID_POST' 
        });
        
    };

    return like;
}
