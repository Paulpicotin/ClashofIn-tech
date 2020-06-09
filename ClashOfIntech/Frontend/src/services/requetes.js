const SERVER_URL = 'http://localhost:3002';

/**
 * Get data from all users.
 * @returns {Promise<Array.<{ id: String, name: String, age: Number }>>} Users's data
 */
export function getAllUsers () {
  // requête GET
  return fetch(`${SERVER_URL}/users`)
    .then(resp => resp.json());
}

/**
 * Create and add user from the server data.
 * @param {String} name User's name
 * @param {Number} age User's age
 * @param {String} password User's password
 * @returns {Promise<{ id: String, name: String, age: Number }>} User's data
 */
export function createUser (name, age, password) {
  // requête POST
  return fetch(`${SERVER_URL}/createUser`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, age, password })
  })
    .then(resp => resp.json());
}

/**
 * Create and add user from the server data.
 * @param {String} name User's name
 * @param {Number} age User's age
 * @param {String} password User's password
 * @returns {Promise<{ id: String, firstname: String, lastname: String, speudo: String, email: String, password: String}>} User's data
 */
export function createAdmin (firsname, lastname, pseudo, email, password) {
  // requête POST
  return fetch(`${SERVER_URL}/api/createAdmin`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ firsname, lastname, pseudo, email, password })
  })
    .then(resp => resp.json());
}

/**
 * Send new user age and get user data.
 * @param {String} id User's id
 * @param {Number} age User's age
 * @returns {Promise<{ id: String, name: String, age: Number }>} User data
 */
export function modifyUserAge (id, age) {
    // requêtre PUT
    fetch(`${SERVER_URL}/modifyUserAge/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ age })
    })
    .then(resp => resp.json());
}

/**
 * Delete user from the server data.
 * @param {String} id User's id
 */
export function deleteUser (id) {
    // requête DELETE
    fetch(`${SERVER_URL}/deleteUser/${id}`, {
      method: 'delete'
    });
}
