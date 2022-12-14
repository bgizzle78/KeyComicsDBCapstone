export const getCurrentUser = () => {
    const currentUser = localStorage.getItem("UserProfile");

    return currentUser;
  };


  const baseUrl = 'https://localhost:5001/api';

  export const login = (userObject) => {
    return fetch(`${baseUrl}/UserProfile/getbyemail?email=${userObject.email}`)
    .then((r) => r.json())
      .then((userProfile) => {
        if(userProfile.id){
          localStorage.setItem("UserProfile", JSON.stringify(userProfile));
          return userProfile
        }
        else{
          return undefined
        }
      });
  };

  export const logout = () => {
        localStorage.clear()
  };

  export const register = (userObject, password) => {
    return  fetch(`${baseUrl}/UserProfile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    })
    .then((response) => response.json())
      .then((savedUserProfile) => {
        localStorage.setItem("UserProfile", JSON.stringify(savedUserProfile))
      });
  };

export const getAllUsers = () => {
  return fetch (`${baseUrl}/UserProfile`)
    .then((res) => res.json())
};

export const getUserById = (id) => {
  return fetch(`${baseUrl}/UserProfile/${id}`)
    .then((res) => res.json());
};