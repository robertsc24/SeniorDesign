import "./content.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";

export default function Content() {
    return (
        <div className="content">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="test" element={<div>test</div>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
