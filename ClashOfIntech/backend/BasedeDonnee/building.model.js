const COI = require('../utils/COI.js')


class Defense {
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
        CREATE TABLE ${Defense.tableName}(
            id SERIAL PRIMARY KEY,
            id_town SERIAL FOREIGN KEY,
            id_case SERIAL FOREIGN KEY,                       
            name TEXT,           
            length INT, 
            width INT
        )`
    }
}
/** @type {String} */
Defense.tableName = 'defense'

module.exports = Defense
