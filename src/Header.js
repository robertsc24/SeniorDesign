import "./header.css";
import logo from "./images/trebleclef.webp"
import hamburgerMenu from "./images/hamburgerMenu.png"
import Nav, {navLinks} from "./Nav";
import {useState} from "react";
import {useQueryState} from "./App";

export default function Header(props) {

    const page = window.location.pathname.split("/")[1];
    const title = navLinks.filter(obj => obj.to === "/" + page)[0].label

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
        <div className="header">
            {!showNav ? <button onClick={() => setShowNavOverride(true)}>
                <img alt="Page navigation dropdown menu" src={hamburgerMenu}/>
            </button> : null}
            <img alt={"Treble clef logo"} src={logo}/>
            <h2>{title}</h2>
            {showNav || showNavOverride ? <Nav showCloseButton={showNavOverride} clickCloseButton={() => setShowNavOverride(false)}/> : null}
        </div>
    );
}