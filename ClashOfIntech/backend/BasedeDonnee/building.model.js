const COI = require('../utils/COI.js')


class Building {
    /**@type {Number} */
    id
    /**@type {Number} */
    id_town
    /**@type {Number} */
    id_case
    /**@type {String} */
    name
    /**@type {Number} */
    length
    /**@type {Number} */
    width
    
    static toSqlTable (){
        return`
        CREATE TABLE ${Building.tableName}(
            id SERIAL PRIMARY KEY,
            id_town SERIAL,
            id_case SERIAL,                       
            name TEXT,           
            length INT, 
            width INT
        )`
    }
}
/** @type {String} */
Building.tableName = 'building'

module.exports = Building
