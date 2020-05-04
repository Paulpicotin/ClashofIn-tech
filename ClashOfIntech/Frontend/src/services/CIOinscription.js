const SERVER_URL = "http://localhost:3001";

function getList() {
  return fetch(`${SERVER_URL}/List`)
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      return data;
    });
}

function addList(COIList) {
  return fetch(`${SERVER_URL}/List`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(COIList)
  });
}

function editList (COIListId, COIList) {
  return fetch(`${SERVER_URL}/List/${COIListId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...COIList })
  });
}

function deleteList (COIListId) {
  return fetch(`${SERVER_URL}/List/${COIListId}`, {
    method: "DELETE"
  });
}

export { getList, addList, deleteList , editList };
