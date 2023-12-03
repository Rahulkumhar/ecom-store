import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, Typography } from "@mui/material";
import ProductList from "./ProductList";
import axios from "axios";
import { addToCart } from "../Redux/action";

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Fetch products from the FakeStore API
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?limit=4&page=${page}`
        );
        const newProducts = response.data;
        dispatch({ type: "FETCH_PRODUCTS", payload: newProducts });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch, page]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{ marginTop: 12, marginLeft: 2, marginBottom: 1 }}
      >
        <Typography variant="h5" component="div">
          Product Listing Page
        </Typography>
      </Grid>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}>
        {products.map((product) => (
          <Grid item key={product.id} xs={4} sm={4} md={4} lg={4}>
            <ProductList product={product} onAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
      <Grid sx={{ marginTop: 5, marginLeft: 2, marginBottom: 1 }}>
        <Button
          variant="contained"
          color="info"
          onClick={handleLoadMore}
          disabled={page >= 5}
        >
          Load More
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductListingPage;
