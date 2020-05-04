const PostgresStore = require('../utils/PostgresStore.js')


class BuildingRessources {
    /**@type {Number} */
    id
    /**@type {Number} */
    id_building
    /**@type {Number} */
    id_ressources   
    /**@type {String} */
    name
    
    static toSqlTable (){
        return`
        CREATE TABLE ${BuildingRessources.tableName}(
            id SERIAL PRIMARY KEY,            
            id_building SERIAL FOREIGN KEY,
            id_ressources SERIAL FOREIGN KEY,            
            name TEXT
        )`
    }
}
/** @type {String} */
BuildingRessources.tableName = 'buildingressources'

module.exports = BuildingRessources
