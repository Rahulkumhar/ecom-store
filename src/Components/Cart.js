import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Container,
} from "@mui/material";
import PropTypes from "prop-types";
import { Add, Delete, Remove } from "@mui/icons-material";

const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity }) => {
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Container maxWidth="md">
      <Grid item xs={12}>
        <Card sx={{ maxWidth: 600, margin: 8, padding: 4 }}>
          <Typography variant="h5" component="div">
            Cart Summary
          </Typography>
          {cartItems.map((item) => (
            <CardContent key={item.id}>
              <Typography variant="body1" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.primary">
                Total: ${item?.price * item.quantity}
              </Typography>
              <Grid container>
                <Grid item xs={8} sm={8} md={8}>
                  <Typography variant="body2" color="text.secondary">
                    Quantity: {item.quantity}
                  </Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                  <Grid container>
                    <Grid item xs={4} sm={4} md={4}>
                      <Button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Add />
                      </Button>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <Button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        <Remove />
                      </Button>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <Button onClick={() => onRemoveFromCart(item.id)}>
                        <Delete />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          ))}

          <Grid container>
            <Grid item xs={8} sm={8} md={8}>
              <Typography
                style={{ marginLeft: 10 }}
                variant="h6"
                component="div"
              >
                Total Amount:
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Typography variant="body1" color="text.primary">
                ${calculateTotal()}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Container>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
};

export default Cart;
