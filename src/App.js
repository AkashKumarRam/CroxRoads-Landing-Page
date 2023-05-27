import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import TheFunCorner from "./pages/TheFunCorner";
import Contact from "./pages/Contact";
import TermsandCondition from "./pages/TermsandCondition";
import Career from "./pages/Career";


function App() {
  return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/faq" element={<Faq/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/thefuncorner" element={<TheFunCorner/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/career" element={<Career/>} />
      <Route path="/termsandcondition" element={<TermsandCondition/>} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
