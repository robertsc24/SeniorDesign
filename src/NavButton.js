import "./navButton.css";

export default function NavButton(props) {
    return (
        <div className={"nav-button" + (props.selected ? " selected" : "")}>
            <button onClick={props.onClick}>
                <img alt="" src={props.icon}/>
                {props.text}
            </button>
        </div>
    );
}
