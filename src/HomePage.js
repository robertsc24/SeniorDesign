import "./homePage.css";
import NewsItem from "./NewsItem";
import placeholderImage from "./images/placeholder.webp";

export default function HomePage() {

    let newsItems = [];
    for (let i = 0; i < 10; i++) {
        newsItems[i] = <NewsItem
            index={i} key={i}
            reverseContents={i % 2 === 1}

            studio="Studio Name"
            headline="Lorem Ipsum"
            datePosted={ new Date().toLocaleString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"})}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin arcu
                    velit, dictum ac vulputate id, posuere vitae lacus. In egestas ullamcorper nisl, sed posuere justo
                    vehicula ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Maecenas consequat, ante at ornare aliquet, lacus libero hendrerit velit, eget tincidunt
                    ipsum nulla eu augue. Nam dolor justo, facilisis vitae sagittis eu, accumsan sit amet orci. Nullam
                    venenatis enim sit amet dui semper iaculis. Mauris eu augue porta, dignissim justo eget, lacinia
                    arcu. Morbi sed nibh laoreet nunc tincidunt sollicitudin. Mauris id vestibulum diam, a sagittis
                    metus. Phasellus a erat sit amet ex tempor scelerisque quis ac mauris."
            thumbnail={placeholderImage}
        />
    }

    return (
        <div className="news-container">
            {newsItems}
        </div>
    );
}
