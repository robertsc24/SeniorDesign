import "./content.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import CalendarPage from "./CalendarPage";

export default function Content() {
    return (
        <div className="content">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/profile" element={<LoginPage/>}/>
                    <Route path="/calendar" element={<CalendarPage/>}/>
                    <Route path="test" element={<div>test</div>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
