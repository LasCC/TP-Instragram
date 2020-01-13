import React from "react";
import { Box, TextField, Button } from "@material-ui/core";
import UseAnimations from "react-useanimations";
import { Alert } from "@material-ui/lab";
import { Link } from "react-router-dom";

export default props => {
  const alertHandler = () => {
    return (
      <div
        style={{
          width: "100%",
          "& > * + *": {
            marginTop: 15
          }
        }}
      >
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </div>
    );
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid #e8e8e8",
        padding: 15
      }}
    >
      <Box display="flex" alignItems="center" flexGrow={1}>
        <UseAnimations animationKey="instagram" size={35} />
        <span
          style={{
            backgroundColor: "#262626",
            height: "25px",
            margin: "0 16px",
            width: "1.2px"
          }}
        />
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png%202x"
          alt="instagramLogo"
          style={{ width: 120, marginTop: 8 }}
        />
      </Box>
      <Box flexGrow={1}>
        <TextField
          variant="outlined"
          label="Rechercher"
          defaultValue="estiameducation"
          InputProps={{
            readOnly: true
          }}
        />
      </Box>
      <Box>
        <Link to="/login" style={{ textDecoration: "none ", color: "white" }}>
          <Button
            onClick={alertHandler}
            style={{
              backgroundColor: "#3897f0",
              color: "white",
              fontWeight: "600",
              textTransform: "capitalize",
              marginRight: 10
            }}
          >
            S'identifier
          </Button>
        </Link>
        <Link
          to="/register"
          style={{ textDecoration: "none", color: "#3897f0" }}
        >
          <Button
            onClick={alertHandler}
            style={{
              color: "#3897f0",
              fontWeight: "600",
              textTransform: "capitalize"
            }}
          >
            S'inscrire
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
