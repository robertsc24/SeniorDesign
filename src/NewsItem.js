import "./newsItem.css";
import {useQueryState} from "./App";

export default function NewsItem(props) {

    const showImage = useQueryState("(min-width: 22em)");

    return (
        <a className={"news-item"} href={"/"}>
            <span style={{backgroundColor: `hsl(${36 * props.index}, 100%, 50%)`}} className="news-item-studio">{props.studio}</span>
            <div className={"news-item-content" + (props.reverseContents ? " flip" : "")}>
                <h1 className="news-item-headline">{props.headline}</h1>
                <p className="news-item-date">Posted {props.datePosted}</p>
                <div className="news-item-preview">{props.content}</div>
                {showImage ? <img className="thumb" alt="Placeholder thumbnail" src={props.thumbnail}/> : null}
            </div>
        </a>
    );
}
