import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {

    const [routes, setRoutes] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/locations')
            .then((res) => res.json())
            .then((data) => setRoutes(data.map((br) => <Route path={"/" + br.id} element={<div>{br.name}</div>}/>)));
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/" element={<h1>hello</h1>}/>
                {routes}
            </Routes>
        </div>
    );
}

export default App;
