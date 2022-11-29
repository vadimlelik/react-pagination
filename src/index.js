import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AddForm from "./component/AddForm";
import Reducer from "./component/Reducer/Reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/pagination' element={<h1>Pagination</h1>} />
            <Route path='/add_form' element={<AddForm />} />
            <Route path='/reducer' element={<Reducer />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    </BrowserRouter>
</>);
