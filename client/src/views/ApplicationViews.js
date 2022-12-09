import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ComicsForm from "../components/ComicsForm";
import ComicsList from '../components/ComicsList';

const ApplicationViews = () => {

    return (
        <Routes>
            <Route path="/" element={<ComicsList />} />
            <Route path="/createComic" element={<ComicsForm />} />
        </Routes>
    )
};

export default ApplicationViews;