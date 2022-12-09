
const baseUrl = 'https://localhost:5001/api';

export const getAllComics = () => {
  return fetch(`${baseUrl}/Comics`) //http GET request
    .then((res) => res.json())
};

export const getById = (id) => {
  return fetch(`${baseUrl}/Comics/${id}`)
      .then((res) => res.json())
};

export const addComics = (newComic) => {
  return fetch(`${baseUrl}/Comics`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComic),
    })
};

export const deleteComics = (id) => {
    return fetch(`${baseUrl}/deleteComic/${id}`, {
      method: "DELETE"
    })
  };