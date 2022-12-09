import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Comics from './Comics';
import { getAllComics } from "../modules/ComicsManager";

const ComicList = () => {
    const [comics, setComics] = useState([]);

    const navigate = useNavigate();

    const getComics = () => {
        getAllComics().then(allComics => setComics(allComics));
    };

    useEffect(() => {
        getComics();
    }, []);

   return (
        <div className="container">
            <div className="row justify-content-center" style={{ display: 'flex', flexDirection: 'column' }}>
                <h1 style={{ marginTop: '20px' }}>Key Comics DB </h1>
                <button onClick={(e) => {
                    navigate('/createComic')
                }} style={{ marginTop: '15px', width: '120px' }}
                >Add New Comic</button>             
                <div className="cards-column">
                    {comics?.map((comic) => (
                        <div style={{ display: 'flex' }}>
                            <Comics key={comics.id} comic={comic} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ComicList;




// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Comics from './Comics';
// import { getAllComics, getById } from "../modules/ComicsManager";

// const ComicsList = () => {
//     const [comics, setComics] = useState([]);

//     const navigate = useNavigate();

//     const getComics = () => {
//         getAllComics().then(allComics => setComics(allComics));
//     };

//     useEffect(() => {
//         getComics();
//     }, []);

//     // const handleDeleteClick = (id) => {
//     //     getById(id).then((c) => { navigate(`/deleteCategory/${id}`) })
//     // }

//     // const handleEditClick = (id) => {
//     //     getById(id).then((e) => { navigate(`/editCategory/${id}`) })
//     // }

//     return (
//         <div className="container">
//             <div className="row justify-content-center" style={{ display: 'flex', flexDirection: 'column' }}>
//                 <h4 style={{ marginTop: '20px' }}>Comics</h4>
//                 <h5 style={{ marginRight: '15px' }}>{comics.title}</h5>
//                 {/* <button onClick={(e) => {
//                     navigate('/createCategory')
//                 }} style={{ marginTop: '15px', width: '120px' }}
//                 >New Category</button> */}
//                 <div className="cards-column">
//                     {comics?.map((comic) => (
//                         <div style={{ display: 'flex' }}>
//                             <Comics key={comic.id} comic={comic} />
//                             {/* <button onClick={(e) => {
//                                 handleDeleteClick(category.id)
//                             }} style={{ width: '60px', height: '30px', margin: '5px' }}>Delete</button>
//                             <button onClick={(e) => {
//                                 handleEditClick(category.id)
//                             }} style={{ width: '43px', height: '30px', margin: '5px' }}> Edit </button> */}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ComicsList;