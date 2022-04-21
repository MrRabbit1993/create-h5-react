import React from 'react';
import { Button } from 'antd-mobile'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import './index.less'
function App() {
    return (
        <div className="App">
            <Button color="primary">切换按钮</Button>
            <BrowserRouter>
                <Routes>
                    <Route element={<App />} path="/">
                        <Route element={<Home />} index />
                        <Route element={<Teams />} path="teams">
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>,
        </div>
    );
}

export default App;
