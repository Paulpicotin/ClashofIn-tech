const COI = require('../utils/COI.js')


class Attack {
    /**@type {Number} */
    id
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
    speed_move
    /**@type {Number} */
    range
  
    
    static toSqlTable (){
        return`
        CREATE TABLE ${Attack.tableName}(
            id SERIAL PRIMARY KEY,                       
            name TEXT,
            life INT,
            defensive_point INT,
            offensive_point INT, 
            attack_speed INT,
            speed_move INT,
            range INT
        )`
    }
}
/** @type {String} */
Attack.tableName = 'attack'

module.exports = Attack
