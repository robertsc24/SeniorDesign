import "./app.css";
import Header from "./Header";
import Nav from "./Nav";
import Content from "./Content";
import Footer from "./Footer";


export default function App() {
  return (
    <div className="grid-layout">
      <Header/>
      <Nav/>
      <Content/>
      <Footer/>
    </div>
  );
}
