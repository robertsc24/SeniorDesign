import "./nav.css";
import profileIcon from "./images/navIcons/profileIcon.png"
import homeIcon from "./images/navIcons/homeIcon.png"
import calendarIcon from "./images/navIcons/calendarIcon.png"
import coursesIcon from "./images/navIcons/coursesIcon.png"
import messagesIcon from "./images/navIcons/messagesIcon.png"
import recordingsIcon from "./images/navIcons/recordingsIcon.png"
import NavButton from "./NavButton";

export default function Nav() {
    return (
        <div className="nav">
            <NavButton
                href="http://localhost:3000"
                icon={profileIcon}
                text="Profile"
            />
            <NavButton
                href="http://localhost:3000"
                icon={homeIcon}
                text="Home"
                selected={true}
            />
            <NavButton
                href="http://localhost:3000"
                icon={calendarIcon}
                text="Calendar"
            />
            <NavButton
                href="http://localhost:3000"
                icon={coursesIcon}
                text="Courses"
            />
            <NavButton
                href="http://localhost:3000"
                icon={messagesIcon}
                text="Messages"
            />
            <NavButton
                href="http://localhost:3000"
                icon={recordingsIcon}
                text="Recordings"
            />
        </div>
    );
}
