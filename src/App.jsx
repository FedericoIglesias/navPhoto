import React from "react";
import { PhotoList } from "./component/photoList";
import Header from "./component/header";
import Footer from "./component/footer";
import Proof from "./component/proof";
import SearchOrder from "./component/searchFilter";
import FavoriteList from "./component/favoriteList";
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <HashRouter>
      <Header />
      <Proof />
      <SearchOrder />
      <Routes>
        <Route path="/" element={<PhotoList />} />
        <Route path="/my-likes" element={<FavoriteList />} />
      </Routes>
      <Footer />
    </HashRouter>
    </>
  );
}

export default App;
