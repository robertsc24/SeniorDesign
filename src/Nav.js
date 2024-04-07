import "./nav.css";
import closeIcon from "./images/navIcons/closeIcon.png"
import profileIcon from "./images/navIcons/profileIcon.png"
import homeIcon from "./images/navIcons/homeIcon.png"
import calendarIcon from "./images/navIcons/calendarIcon.png"
import coursesIcon from "./images/navIcons/coursesIcon.png"
import messagesIcon from "./images/navIcons/messagesIcon.png"
import recordingsIcon from "./images/navIcons/recordingsIcon.png"
import NavButton from "./NavButton";

export const navLinks= [
    {
        label: "Profile",
        to: "/profile",
        icon: profileIcon
    },
    {
        label: "Home",
        to: "/",
        icon: homeIcon
    },
    {
        label: "Calendar",
        to: "/calendar",
        icon: calendarIcon
    },
    {
        label: "Courses",
        to: "/courses",
        icon: coursesIcon
    },
    {
        label: "Messages",
        to: "/messages",
        icon: messagesIcon
    },
    {
        label: "Recordings",
        to: "/recordings",
        icon: recordingsIcon
    },
];

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
            {
                navLinks.map((buttonObj, i) =>
                    <NavButton
                        href={buttonObj.to}
                        icon={buttonObj.icon}
                        text={buttonObj.label}
                        selected={"/" + window.location.pathname.split("/")[1] === buttonObj.to}
                    />
                )
            }
        </div>
    );
}
