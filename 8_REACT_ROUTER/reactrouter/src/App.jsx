import "./App.css";

// 1 - Config React Router

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Componente
import  SearchForm  from "./components/SearchForm";
import NavBar from "./components/NavBar";

// Pages

import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
          <NavBar />
          {/* 9 - search */}
        <SearchForm />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* 4 - rota dinamica */}
            <Route path="/products/:id" element={<Product />} />
            {/* 6 - Nested Router */}
            <Route path="/products/:id/info" element={<Info />} />
            {/* 9 search params */}
            <Route path="/search" element={<Search />} />
            {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
            {/* 7  - no match route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
