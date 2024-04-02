import "./content.css";
import NewsItem from "./NewsItem";

export default function Content() {

    let newsItems = [];
    for (let i = 0; i < 10; i++) {
        newsItems[i] = <NewsItem reverseContents={i % 2 === 1}/>
    }

    return (
        <div className="content">
            <div className="news-container">
                {newsItems}
            </div>
        </div>
    );
}
