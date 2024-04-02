import "./header.css";
import logo from "./images/trebleclef.webp"

export default function Header() {
    return (
        <div className="header">
            <img alt={"Treble clef logo"} src={logo}/>
            <h2>Home</h2>
        </div>
    );
}