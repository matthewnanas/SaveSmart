/**
 * index.tsx
 * -
 * This is the entry file to the whole webapp. This file uses a BrowserRouter component from the
 * router library to handle navigation between various pages.
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import GroceryList from './Pages/GroceryList';
import Landing from './Pages/Landing';
import Results from './Pages/Results';
import Loading from './Pages/Loading';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    {/* Set up browser router */}
    <BrowserRouter>
      {/* Establish routes (these will be the directories accessible in the browser) */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<GroceryList />} />
        <Route path="/results" element={<Results />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  </>
);
