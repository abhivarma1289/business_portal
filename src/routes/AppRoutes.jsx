import { Routes, Route, useLocation } from 'react-router-dom';

import Login from '../components/LoginPage/login';
import Signup from '../components/SignupPage/signup';
import { Home } from '../components/HomePage/home';
import { Footer } from '../components/Footer/footer';
import { Header } from '../components/Header/header';

const AppRoutes = () => {
    const location = useLocation();
    
    const showHeader = location.pathname !== '/' && location.pathname !== '/signup';
    const showFooter = location.pathname !== '/' && location.pathname !== '/signup';

    return (
        <>
            {showHeader && <Header/>}
            <Routes>                
                <Route path="/" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path='/home' element={<Home/>}></Route>
            </Routes>
            {showFooter && <Footer/>}
        </>
    );
};

export default AppRoutes;
