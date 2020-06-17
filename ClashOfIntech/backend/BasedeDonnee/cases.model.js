const COI = require('../utils/COI.js')


class Cases {
    /**@type {Number} */
    id
    /**@type {Number} */
    id_town
    /**@type {Number} */
    length   
    /**@type {String} */
    width
    
    static toSqlTable (){
        return`
        CREATE TABLE ${Cases.tableName}(
            id SERIAL PRIMARY KEY,            
            id_town SERIAL,
            length INT,            
            width INT
        )`
    }
}
/** @type {String} */
Cases.tableName = 'cases'

module.exports = Cases
