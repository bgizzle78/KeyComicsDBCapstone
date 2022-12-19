import React from "react";
import { Routes, Route } from "react-router-dom";
import ComicsDelete from "../components/ComicsDelete";
import ComicsEdit from "../components/ComicsEdit";
import ComicsForm from "../components/ComicsForm";
import ComicsList from '../components/ComicsList';
import SearchList from "../search/SearchList";

const ApplicationViews = () => {

    return (
        <Routes>
            <Route path="/comics" element={<ComicsList />} />
            <Route path="/searchList" element={<SearchList />} />
            <Route path="/createComic" element={<ComicsForm />} />
            <Route path="/deleteComic/:id" element={<ComicsDelete />} />
            <Route path="/editComic/:id" element={<ComicsEdit />} />
        </Routes>
    )
};

export default ApplicationViews;