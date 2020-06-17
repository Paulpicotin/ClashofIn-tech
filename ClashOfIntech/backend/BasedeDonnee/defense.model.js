const COI = require('../utils/COI.js')


class Defense {
    /**@type {Number} */
    id
    /**@type {Number} */
    id_building
    /**@type {String} */
    name
    /**@type {Number} */
    life
    /**@type {Number} */
    defensive_point
    /**@type {Number} */
    offensive_point
    /**@type {Number} */
    attack_speed
    /**@type {Number} */
    range
  
    
    static toSqlTable (){
        return`
        CREATE TABLE ${Defense.tableName}(
            id SERIAL PRIMARY KEY,
            id_building SERIAL,            
            name TEXT,
            life INT,
            defensive_point INT,
            offensive_point INT, 
            attack_speed INT,
            range INT
        )`
    }
}
/** @type {String} */
Defense.tableName = 'defense'

module.exports = Defense
