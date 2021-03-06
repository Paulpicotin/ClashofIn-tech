const COI = require('../utils/COI.js')


class BuildingAttack {
    /**@type {Number} */
    id
    /**@type {Number} */
    id_building
    /**@type {Number} */
    id_attack   
    /**@type {String} */
    name
    
    static toSqlTable (){
        return`
        CREATE TABLE ${BuildingAttack.tableName}(
            id SERIAL PRIMARY KEY,            
            id_building SERIAL,
            id_attack SERIAL,            
            name TEXT
        )`
    }
}
/** @type {String} */
BuildingAttack.tableName = 'buildingattack'

module.exports = BuildingAttack
