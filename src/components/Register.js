import React from "react";
import {
  Box,
  Typography,
  TextField,
  Container,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";
document.body.style.backgroundColor = "#fafafa";

export default props => {
  return (
    <Container style={{ width: 950 }}>
      <Box style={{ height: "90vh" }} display="flex" alignItems="center">
        <Box
          style={{
            height: "100%",
            width: "50%",
            marginTop: 40
          }}
          display="flex"
          alignItems="center"
          align="center"
        >
          <img
            src="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png"
            alt="phoneRegister"
            style={{ height: 500, width: "auto" }}
          />
        </Box>
        <Box
          style={{
            height: "auto",
            width: "50%",
            backgroundColor: "white",
            border: "1px solid #e6e6e6",
            marginTop: 40
          }}
        >
          <Box style={{ padding: 35 }}>
            <Box align="center">
              <img
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png%202x"
                alt="instagramLogo"
                style={{ width: 170, marginTop: 8 }}
              />
              <Typography
                style={{ fontWeight: "bold", marginTop: 10 }}
                variant="body2"
                color="textSecondary"
              >
                Connectez-vous pour voir les photos et les partagés avec vos
                amis.
              </Typography>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  fullWidth
                  style={{
                    backgroundColor: "#3897f0",
                    color: " white",
                    marginTop: 15,
                    marginBottom: 15,
                    textTransform: "none",
                    fontWeight: "bold"
                  }}
                >
                  <i
                    className="uil uil-user"
                    style={{ fontWeight: "bold", marginRight: 8 }}
                  />
                  Connectez-vous
                </Button>
              </Link>
            </Box>
            <Box align="grid">
              <TextField
                fullWidth
                label="Nom"
                variant="outlined"
                style={{ marginBottom: 15 }}
              />
              <TextField
                fullWidth
                label="Prenom"
                variant="outlined"
                style={{ marginBottom: 15 }}
              />
              <TextField
                fullWidth
                label="Adresse mail"
                variant="outlined"
                style={{ marginBottom: 15 }}
              />
              <TextField
                fullWidth
                label="Mot de passe"
                variant="outlined"
                style={{ marginBottom: 15 }}
              />
              <Button
                fullWidth
                style={{
                  color: "white",
                  backgroundColor: "#3897f0",
                  fontWeight: "bold",
                  textTransform: "none"
                }}
              >
                S'inscrire
              </Button>
              <Typography
                color="textSecondary"
                style={{
                  fontSize: 15,
                  marginTop: 15,
                  textAlign: "center"
                }}
              >
                En vous inscrivant, vous acceptez nos conditions. Apprenez
                comment nous recueillons, utilisons et partageons vos données
                dans notre <b>Politique de données</b> et comment nous utilisons
                les cookies et la technologie similaire dans notre Politique sur
                les <b>cookies.</b>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
