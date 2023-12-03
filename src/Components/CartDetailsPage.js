import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";
import { removeFromCart, updateQuantity } from "../Redux/action";
import { Card, Grid, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CartDetailsPage = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateQuantity(productId, quantity));
  };

  return (
    <Grid container>
      <Grid
        sx={{ marginTop: 12, marginLeft: 2, marginBottom: 1 }}
        item
        xs={12}
        sm={12}
        md={12}
      >
        <Typography variant="h5" component="div">
          Cart Details Page
        </Typography>
      </Grid>
      {cartItems.length > 0 ? (
        <Cart
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        />
      ) : (
        <>
          <Container maxWidth="md">
            <Grid item xs={12}>
              <Card sx={{ maxWidth: 600, margin: 8, padding: 4 }}>
                <Typography variant="h5" component="div">
                  No Result Found
                </Typography>
                <Typography
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                  variant="body2"
                  component="div"
                >
                  click on for redirect product list page
                </Typography>
              </Card>
            </Grid>
          </Container>
        </>
      )}
    </Grid>
  );
};

export default CartDetailsPage;
