const SERVER_URL = "http://localhost:3002";

function getinscription() {
  return fetch(`${SERVER_URL}/List`)
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      return data;
    });
}
function addinscription(COIinscription) {
  return fetch(`${SERVER_URL}/List`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(COIinscription)
  }); 
}
function deleteinscription (COIinscriptionId) {
  return fetch(`${SERVER_URL}/List/${COIinscriptionId}`, {
    method: "DELETE"
  });
}

export { getinscription ,addinscription ,deleteinscription  };
