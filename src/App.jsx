import React from "react";
import { PhotoList } from "./component/photoList";
import Header from "./component/header";
import Footer from "./component/footer";
import Proof from "./component/proof";
import SearchOrder from "./component/searchFilter";
import FavoriteList from "./component/favoriteList";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Proof />
      <SearchOrder />
      <Routes>
        <Route path="/" element={<PhotoList />} />
        <Route path="/my-likes" element={<FavoriteList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
