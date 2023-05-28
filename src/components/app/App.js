/**
 * External dependencies
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Internal dependencies
 */
import Layout from "../layout/Layout.js";
import HomePage from "../../pages/HomePage.js";
import HotPage from "../../pages/HotPage.js";
import NoPage from "../../pages/NoPage.js";
import RegularPage from "../../pages/RegularPage.js";
import "./style.css";

/**
 * App component
 */
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="hot" element={<HotPage />} />
          <Route path="regular" element={<RegularPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
