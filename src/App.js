import "./app.css";
import Header from "./Header";
import Nav from "./Nav";
import Content from "./Content";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import {click} from "@testing-library/user-event/dist/click";

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
    }, [query, queryMatch]);

    return queryMatch;
}

export default function App() {

    const [showNavOverride, setShowNavOverride] = useState(false);

    const showNav = useQueryState(
        "(min-width: 36em)",
        (newVal) => {
            if (newVal) {
                setShowNavOverride(false);
            }
        }
    );

    return (
        <div className="grid-layout">
            <Header navDropdown={!showNav} onClickDropdown={() => setShowNavOverride(true)}/>
            {showNav || showNavOverride ? <Nav showCloseButton={showNavOverride} clickCloseButton={() => setShowNavOverride(false)}/> : null}
            <Content/>
            <Footer/>
        </div>
    );
}
