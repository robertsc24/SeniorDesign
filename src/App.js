import "./app.css";
import Header from "./Header";
import Nav from "./Nav";
import Content from "./Content";
import Footer from "./Footer";
import {useEffect, useState} from "react";

export function useQueryState(query, onChange = null) {
    const [queryMatch, setQueryMatch] = useState(matchMedia(query).matches);

    useEffect(() => {
        const widthCheck = matchMedia(query);
        const change = () => {
            setQueryMatch(widthCheck.matches)
            if (onChange) {
                onChange(widthCheck.matches);
            }
        };
        widthCheck.addEventListener("change", change);

        return () => {
            widthCheck.removeEventListener("change", change);
        }
    }, [query, queryMatch, onChange]);

    return queryMatch;
}

export default function App() {

    return (
        <div className="grid-layout">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}
