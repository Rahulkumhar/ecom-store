// App.js
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductListingPage from "./Components/ProductListingPage";
import CartDetailsPage from "./Components/CartDetailsPage";
import { Header } from "./Components/Header";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListingPage />} />
          <Route path="/cart" element={<CartDetailsPage />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
