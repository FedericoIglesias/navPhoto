import React from "react";
import { PhotoList } from "./component/photoList";
import Header from "./component/header";
import Footer from "./component/footer";
import Proof from "./component/proof";
import SearchOrder from "./component/searchOrder";
import FavoriteList from "./component/favoriteList";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/navPhoto" element={<PhotoList />} />
        <Route path="/my-likes" element={<FavoriteList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
