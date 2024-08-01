import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import BlogLayouts from "./Pages/BlogLayouts"
import Contact from "./Pages/Contacts"
import Destinations from "./Pages/Destinations"
import Galleries from "./Pages/Galleries"
import Hotels from "./Pages/Hotels"
import LifeStyle from "./Pages/LifeStyle"
import Travel from "./Pages/Travel"
import Header from "./components/common/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Cookie from "./utils/Cookie";
import PostDetails from "./PostDetails";

function App() {
  return (
    <>
     <Router>
        <Header />
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/blog" element = {<Blog/>} />
          <Route path="/blog-layout" element = {<BlogLayouts/>} />
          <Route path="contact" element = {<Contact/>} />
          <Route path="destinations" element = {<Destinations/>} />
          <Route path="galleries" element = {<Galleries/>} />
          <Route path="hotels" element = {<Hotels/>} />
          <Route path="lifestyle" element = {<LifeStyle/>} />
          <Route path="travel" element = {<Travel/>} />
          <Route path="/:header" element={<PostDetails/>} />

        </Routes>
        <Cookie/>
        <Footer/>
        </Router>
      
    </>
  );
}

export default App;
