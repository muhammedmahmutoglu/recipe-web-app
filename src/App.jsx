import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home"
import Detail from "./pages/detail/Detail";
import "./style/index.scss";
import ScrollUp from "./components/scrollup/ScrollUp";

const App = () => {
  return (
    <div>
       {
        <BrowserRouter>
        <ScrollUp />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail-page/:slug" element={<Detail />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  )
}

export default App
