// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import UserDetails from "./UserDetails";
// import { getAllUsers, getUserById } from "../modules/UserProfileManager";

// const UserProfileList = () => {
//     const [users, setUsers] = useState([]);

//     const getUser = () => {
//         getUserById().then(all => setUsers(all))
//     };

//     useEffect(
//         () => {
//             getUserById();
//         }, []);

//     // console.log(users)

//     return (
//         <div>
//             <h2 style={{ margin: '15px' }}>User Profile</h2>
//             <div style={{ display: 'flex', flexDirection: 'column', margin: '15px' }}>
//                 <div style={{ margin: '20px' }}>
//                     <UserDetails key={users.id} user={users} get={getUser} />
//                 </div>
//             </div>
//         </div>)
// }

// export default UserProfileList;