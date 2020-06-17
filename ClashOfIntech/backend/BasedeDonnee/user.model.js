const COI = require('../utils/COI.js')
const bcrypt = require('bcrypt');

class User {
    /** @type {Number} */
    id
    /** @type {String} */
    COIPrenom
    /** @type {String} */
    COINom
    /**@type {String} */
    COIPseudo    
    /**@type {String} */
    COIEmail
    /**@type {String} */
    COIPassword


    static toSqlTable () {
        return `
        CREATE TABLE ${User.tableName} (
          id SERIAL PRIMARY KEY,
          COIPrenom TEXT NOT NULL,
          COINom TEXT NOT NULL,
          COIPseudo TEXT,
          COIEmail TEXT UNIQUE NOT NULL,
          COIPassword VARCHAR(60)         
        )`
      }

       /**
   * @param {String} COIEmail
   * @param {String} COIPassword
   * @returns {Promise<User>}
   */
  static async verifyUser (COIEmail, COIPassword) {
    const result = await COI.pool.query({
      text: `SELECT * FROM ${User.tableName} WHERE COIEmail=$1`,
      values: [COIEmail]
    });
    // on récupère le premier résultat du SELECT, et on prend le password
    const currentPassword = result.rows[0].COIPassword;
    // comme ce password est hashé, on le compare via bcrypt avec le mot de passe
    // que l'utilisateur de la route de login a utilisé pour se connecter
    const isSame = await bcrypt.compare(COIPassword, currentPassword);
    // si c'est le même mot de passe, alors on retourne l'utilisateur
    if (isSame) {
      const user = result.rows[0];
      delete user.coipassword; // on ne doit jamais renvoyer le mot de passe de l'utilisateur
      return user;
    } else {
      // sinon, on retourne null
      return null;
    }
  }

  /**
   * @param {String} COIEmail
   * @param {String[]} scope
   * @returns {Promise<User>}
   */
  static async getByEmail (COIEmail, scope) {
    // scope contient une liste comme 'id, email, firstname'
    // on utilise donc .join(', ') pour retourner une chaîne de caractères séparée par des virgules
    const fields = scope.join(', ');
    const result = await COI.pool.query({
      text: `SELECT ${fields} FROM ${User.tableName} WHERE COIEmail=$1`,
      values: [COIEmail]
    });
    return result.rows[0];
  }

  /**
   * @param {{COIEmail: String, COIPrenom: String, COINom: String, COIPseudo: String, COIPassword: String}} user
   * @return {Promise<User>}
   */
  static async CreateUser (user) {
    // lorsqu'on crée l'utilisateur, on ne stocke pas directement son mot de passe
    // en bases de données, mais on va le hasher
    const hashedPassword = await bcrypt.hash(user.COIPassword, 10);
    // lorsque le mot de passe a été transformé en une suite de symboles illisibles,
    // on le stocke avec le reste en base de données

    const result = await COI.pool.query({
      text: `INSERT INTO ${User.tableName} (COIPrenom, COINom, COIPseudo, COIEmail, COIPassword)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      values: [user.COIPrenom, user.COINom, user.COIPseudo, user.COIEmail, hashedPassword]
    });

    const userResult = result.rows[0];
    delete userResult.coipassword; // on ne renvoie jamais le mot de passe de l'utilisateur
    return userResult;
  }
      
}

/** @type {String} */
User.tableName = 'users'

module.exports = User



    
