import React from "react";
import Nav from "./components/Nav";
import FooterComponent from "./components/Footer";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Details = React.lazy(() => import("./components/details"));
import Home from "./components/Home";
import Cart from "./components/Cart";
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
          <Nav />
          <div className="flex-1 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/:productId"
                element={
                  <React.Suspense fallback="Data is loading .....">
                    <Details />
                  </React.Suspense>
                }
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <FooterComponent />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
