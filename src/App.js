import "./app.css";
import Header from "./Header";
import Nav from "./Nav";
import Content from "./Content";
import Footer from "./Footer";
import {useEffect, useState} from "react";

export function useQueryState(query) {
    const [queryMatch, setQueryMatch] = useState(matchMedia(query).matches);

    useEffect(() => {
        const widthCheck = matchMedia(query);
        const onChange = () => setQueryMatch(widthCheck.matches);
        widthCheck.addEventListener("change", onChange);

        return () => {
            widthCheck.removeEventListener("change", onChange);
        }
    }, [query, queryMatch]);

    return queryMatch;
}

export default function App() {

    const showNav = useQueryState("(min-width: 36em)");

    return (
        <div className="grid-layout">
            <Header/>
            {showNav ? <Nav/> : null}
            <Content/>
            <Footer/>
        </div>
    );
}
