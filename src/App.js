import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import BathroomPage from './components/BathroomPage.js';
import style from './style/App.module.css';

function App() {

    // to be removed later
    const exampleBathroom = {
        name: "PPP Floor 5",
        building: "PPP",
        admin_rating: "10",
        gender: "M"
    };
    const [routes, setRoutes] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/locations')
            .then((res) => res.json())
            .then((data) => setRoutes(data.map((br) => <Route path={"/" + br.id} element={<BathroomPage bathroom={br}/>}/>)));
    }, []);

    return (
        <div className={style.container}>
            <Routes>
                <Route path="/" element={<h1>Go to /example to see what a bathroom page will look like</h1>}/>
                <Route path="/example" element={<BathroomPage bathroom={exampleBathroom}/>}/>
                {routes}
            </Routes>
        </div>
    );
}

export default App;
