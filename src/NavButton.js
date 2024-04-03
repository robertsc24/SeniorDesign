import "./navButton.css";

export default function NavButton(props) {
    return (
        <div className={"nav-button" + (props.selected ? " selected" : "")}>
            <a href={props.href} onClick={props.onClick}>
                <img alt="" src={props.icon}/>
                {props.text}
            </a>
        </div>
    );
}
