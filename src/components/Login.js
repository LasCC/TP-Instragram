import React from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@material-ui/core";
document.body.style.backgroundColor = "#fafafa";

export default props => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ height: "90vh" }}
    >
      <Box
        style={{
          width: 450,
          backgroundColor: "white",
          border: "1px solid #e6e6e6",
          padding: 40
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box align="center">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png%202x"
              alt="instagramLogo"
              style={{ width: 170, marginTop: 8 }}
            />
          </Box>
        </Link>
        <TextField
          fullWidth
          label="Adresse-mail"
          variant="outlined"
          type="text"
          style={{ marginTop: 15, marginBottom: 15 }}
        />
        <TextField
          fullWidth
          label="Mot de passe"
          variant="outlined"
          type="password"
        />
        <Button
          style={{
            color: "white",
            backgroundColor: "#3897f0",
            textTransform: "none",
            fontWeight: "bold",
            marginTop: 15
          }}
          fullWidth
        >
          Se connecter
        </Button>
        <Box align="center" style={{ marginTop: 15 }}>
          <Typography style={{ fontSize: 13 }}>
            Vous n'avez pas de compte ?{" "}
            <Link
              to="/register"
              style={{
                color: "#3897f0",
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              Créer un compte
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
