import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ShoppingCartOutlined } from "@mui/icons-material";

export const Header = (props) => {
  const navigate = useNavigate();
  const cartQuantity = useSelector((state) => state.cart.cart);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 1,
      top: 1,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 2px",
    },
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            style={{ cursor: "pointer" }}
            variant="h6"
            component="div"
            color="white"
            onClick={() => navigate("/")}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Ecom Store
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              onClick={() => navigate("/")}
              key="1"
              sx={{ color: "#fff" }}
            >
              Product List
            </Button>
          </Box>
          <IconButton onClick={() => navigate("/cart")} aria-label="cart">
            <StyledBadge badgeContent={cartQuantity.length} color="secondary">
              <ShoppingCartOutlined style={{ color: "white" }} />
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
