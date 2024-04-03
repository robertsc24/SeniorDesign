import "./newsItem.css";
import placeholderImage from "./images/placeholder.webp"
import {useQueryState} from "./App";

export default function NewsItem(props) {

    const showImage = useQueryState("(min-width: 22em)");

    return (
        <a className={"news-item" + (props.reverseContents ? " flip" : "")} href={"/"}>
            <h1 className="news-item-headline">Lorem Ipsum</h1>
            <p className="news-item-date">Posted {new Date().toLocaleString()}</p>
            <div className="news-item-preview">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin arcu
                velit, dictum ac vulputate id, posuere vitae lacus. In egestas ullamcorper nisl, sed posuere justo
                vehicula ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Maecenas consequat, ante at ornare aliquet, lacus libero hendrerit velit, eget tincidunt
                ipsum nulla eu augue. Nam dolor justo, facilisis vitae sagittis eu, accumsan sit amet orci. Nullam
                venenatis enim sit amet dui semper iaculis. Mauris eu augue porta, dignissim justo eget, lacinia
                arcu. Morbi sed nibh laoreet nunc tincidunt sollicitudin. Mauris id vestibulum diam, a sagittis
                metus. Phasellus a erat sit amet ex tempor scelerisque quis ac mauris.
            </div>
            {showImage ? <img className="thumb" alt="Placeholder thumbnail" src={placeholderImage}/> : null}
        </a>
    );
}
