module.exports= (sequelize,dataTypes) => { 
    
    const alias = 'Follow'; 
    const cols = { 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }
    }

    const config = {

            tableName: 'Follow', 
            timestamps: false, 
            underscored: true 

    }
    
    const Follow = sequelize.define(alias,cols,config)
    
    Follow.associate = function (models) {
        Follow.belongsTo(models.usuarios, {
            as:'Follower',
            foreignKey: 'Follower_id' 
        });
        Follow.belongsTo(models.usuarios, {
            as:'Following',
            foreignKey: 'Following_id' 
        });
        
    };

    return Follow; 
} 
