import React from "react";
import { PhotoList } from "./component/photoList";
import Header from "./component/header";
import Footer from "./component/footer";
import Proof from "./component/proof";
import SearchOrder from "./component/searchFilter";
import FavoriteList from "./component/favoriteList";

function App() {
  
  return (
    <>
    <Header/>
    <Proof/>
    <FavoriteList/>
    <SearchOrder/>
    <PhotoList/>
    <Footer/>
    </>
  );
}

export default App;
