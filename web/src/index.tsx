import React from 'react';
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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<GroceryList />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  </>
);
