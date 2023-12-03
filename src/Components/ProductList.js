import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import PropTypes from "prop-types";

const ProductList = ({ product, onAddToCart }) => {
  return (
    <Card sx={{ maxWidth: 345, height: 380 }}>
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt={"item.title"}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" noWrap color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body1" color="text.primary">
          ${product.price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

ProductList.propTypes = {
  product: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductList;
