import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";


function App() {
  return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/faq" element={<Faq/>} />
      <Route path="/blog" element={<Blog/>} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
