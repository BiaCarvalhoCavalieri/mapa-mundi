import { Home } from '../pages/Home';
import { Routes, Route } from 'react-router-dom';


export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/example" element={<Component/>}/> */}
        </Routes>
    )
}

export { Routes };
