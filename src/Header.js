import "./header.css";
import logo from "./images/trebleclef.webp"

export default function Header(props) {
    return (
        <div className="header">
            {props.navDropdown ? <button onClick={props.onClickDropdown}>Nav button</button> : null}
            <img alt={"Treble clef logo"} src={logo}/>
            <h2>Home</h2>
        </div>
    );
}