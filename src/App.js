import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SignUp from './pages/SignUp';
import Login from './components/Login';
import PredictionForm from './components/PredictionForm';

function App() {
    return (
        <Router>
            <Routes>
                {/* Routes with Header */}
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Outlet />
                        </>
                    }
                >
                    <Route index element={<Home />} />
                    <Route path="about" element={<AboutUs />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="login" element={<Login />} />
                    <Route path="predict" element={<PredictionForm />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
