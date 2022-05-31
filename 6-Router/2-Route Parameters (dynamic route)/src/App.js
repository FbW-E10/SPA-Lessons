import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Home from "./components/Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Blogs from "./components/Pages/Blogs/Blogs";
import Blog from "./components/Pages/Blogs/Blog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:id" element={<Blog />} />

          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
