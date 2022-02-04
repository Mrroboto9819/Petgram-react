import React from "react";
import { ListOfCoategorys } from "./components/ListOfCategory";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListofPhotos } from "./components/ListofPHotos/indes";
import { Logo } from "./components/Logo";

export const App = () => {
 return ( <>
 <GlobalStyle />
 <Logo />
 <ListOfCoategorys /> 
 <ListofPhotos />
 </>)
}