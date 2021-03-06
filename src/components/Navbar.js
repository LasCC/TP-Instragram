import React from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Button } from "@material-ui/core";
import UseAnimations from "react-useanimations";

export default props => {
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
        <UseAnimations
          animationKey="instagram"
          size={35}
          style={{ marginTop: 2 }}
        />
        <span
          style={{
            backgroundColor: "#262626",
            height: "25px",
            margin: "0 16px",
            width: "1.2px"
          }}
        />
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png%202x"
            alt="instagramLogo"
            style={{ width: 90, marginTop: 8 }}
          />
        </Link>
      </Box>
      <Box flexGrow={1}>
        <TextField
          label="Search"
          defaultValue="estiameducation"
          InputProps={{
            readOnly: true
          }}
        />
      </Box>
      <Box>
        <Link to="/login" style={{ textDecoration: "none ", color: "white" }}>
          <Button
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
