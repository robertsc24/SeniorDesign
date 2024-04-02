import "./nav.css";
import closeIcon from "./images/navIcons/closeIcon.png"
import profileIcon from "./images/navIcons/profileIcon.png"
import homeIcon from "./images/navIcons/homeIcon.png"
import calendarIcon from "./images/navIcons/calendarIcon.png"
import coursesIcon from "./images/navIcons/coursesIcon.png"
import messagesIcon from "./images/navIcons/messagesIcon.png"
import recordingsIcon from "./images/navIcons/recordingsIcon.png"
import NavButton from "./NavButton";

export default function Nav(props) {
    return (
        <div className="nav">
            {props.showCloseButton ?
                <NavButton
                    onClick={props.clickCloseButton}
                    icon={closeIcon}
                    text="Close"
                /> : null
            }
            <NavButton
                icon={profileIcon}
                text="Profile"
            />
            <NavButton
                icon={homeIcon}
                text="Home"
                selected={true}
            />
            <NavButton
                icon={calendarIcon}
                text="Calendar"
            />
            <NavButton
                icon={coursesIcon}
                text="Courses"
            />
            <NavButton
                icon={messagesIcon}
                text="Messages"
            />
            <NavButton
                icon={recordingsIcon}
                text="Recordings"
            />
        </div>
    );
}
