import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Hooks from './pages/Hooks';

function NavigationRoute() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>} />
            <Route path='/hooks' element={<Hooks/>} />
        </Routes>
    )
}

export default NavigationRoute;