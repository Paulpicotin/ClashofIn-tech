const PostgresStore = require('../utils/PostgresStore.js')


class Ressources {
    /**@type {Number} */
    id
    /**@type {Number} */
    id_town
    /**@type {Number} */
    quantity
    /**@type {String} */
    name

    static toSqlTable (){
        return`
        CREATE TABLE ${Ressources.tableName}(
            id SERIAL PRIMARY KEY,
            id_town SERIAL FOREIGN KEY,
            quantity INT,
            name TEXT
        )`
    }
}














/** @type {String} */
Ressources.tableName = 'ressources'

module.exports = Ressources
