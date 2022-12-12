import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ComicsDelete from "../components/ComicsDelete";
import ComicsEdit from "../components/ComicsEdit";
import ComicsForm from "../components/ComicsForm";
import ComicsList from '../components/ComicsList';

const ApplicationViews = () => {

    return (
        <Routes>
            <Route path="/" element={<ComicsList />} />
            <Route path="/createComic" element={<ComicsForm />} />
            <Route path="/deleteComic/:id" element={<ComicsDelete />} />
            <Route path="/editComic/:id" element={<ComicsEdit />} />
        </Routes>
    )
};

export default ApplicationViews;