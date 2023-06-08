import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubscribePage from './Pages/SubscribePage';
import EmployersPage from './Pages/EmployersPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage.jsx';
import JobListPage from './Pages/JobListPage';
import ApplicationPage from './Pages/ApplicationPage';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/jobsearch" element={<JobListPage />} />
        <Route path="/employers" element={<EmployersPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/apply" element={<ApplicationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
