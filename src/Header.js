import "./header.css";
import logo from "./images/trebleclef.webp"
import hamburgerMenu from "./images/hamburgerMenu.png"
import {navLinks} from "./Nav";

export default function Header(props) {

    const page = window.location.pathname.split("/")[1];
    const title = navLinks.filter(obj => obj.to === "/" + page)[0].label

    return (
        <div className="header">
            {props.navDropdown ? <button onClick={props.onClickDropdown}>
                <img alt="Page navigation dropdown menu" src={hamburgerMenu}/>
            </button> : null}
            <img alt={"Treble clef logo"} src={logo}/>
            <h2>{title}</h2>
        </div>
    );
}