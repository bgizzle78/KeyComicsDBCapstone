// import React from "react";
// import { getUserById } from "../modules/UserProfileManager";
// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";

// const UserDetails = () => {
//     const [user, setUser] = useState({})
//     const { id } = useParams();

//     useEffect(
//         () => {
//             getUserById(id).then((u) => { setUser(u) })
//         }, []);

//     if (!user) {
//         return null;
//     }
//     console.log(user)

//     return (
//             <><div style={{ width: '1000px', display: 'flex', justifyContent: 'left', marginLeft: '50px', marginTop: '50px', alignContent: 'center' }}>
//             <h4>Email: {user.email}</h4>
//         </div><div style={{ marginLeft: '50px' }}>
//                 <Link to="/comics">Go Back</Link>
//             </div></>
//     )
// }

// export default UserDetails;