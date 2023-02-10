import React from "react";
import { PhotoList } from "./component/photoList";
import Header from "./component/header";
import Footer from "./component/footer";
import Proof from "./component/proof";
import SearchFilter from "./component/searchFilter";

function App() {
  
  return (
    <>
    <Header/>
    <Proof/>
    <SearchFilter/>
    <PhotoList/>
    <Footer/>
    </>
  );
}

export default App;
