import * as C from "./Appstyle";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <C.Container>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </C.Container>
  );
}

export default App;
