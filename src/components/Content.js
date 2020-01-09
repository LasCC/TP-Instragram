import React from "react";
import {
  Typography,
  Box,
  Button,
  GridList,
  GridListTile,
  Dialog
} from "@material-ui/core";

document.body.style.backgroundColor = "#fafafa";

const tileData = require("../data/tile.json");

export default props => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box style={{ height: "90vh" }}>
      <Box style={{ height: "35%" }} display="flex" alignItems="center">
        <Box className="circle">
          <img
            src="https://picsum.photos/200"
            alt="instaAvatar"
            style={{ borderRadius: 150, height: 150, width: 150 }}
          />
        </Box>
        <Box style={{ marginLeft: 65 }}>
          <Typography variant="h5" style={{}}>
            estiameducation
            <span className="sb_verified" style={{ height: 10 }}>
              <svg
                style={{ height: 20 }}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="badge-check"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-badge-check fa-w-16"
              >
                <path
                  fill="currentColor"
                  d="M512 256c0-37.7-23.7-69.9-57.1-82.4 14.7-32.4 8.8-71.9-17.9-98.6-26.7-26.7-66.2-32.6-98.6-17.9C325.9 23.7 293.7 0 256 0s-69.9 23.7-82.4 57.1c-32.4-14.7-72-8.8-98.6 17.9-26.7 26.7-32.6 66.2-17.9 98.6C23.7 186.1 0 218.3 0 256s23.7 69.9 57.1 82.4c-14.7 32.4-8.8 72 17.9 98.6 26.6 26.6 66.1 32.7 98.6 17.9 12.5 33.3 44.7 57.1 82.4 57.1s69.9-23.7 82.4-57.1c32.6 14.8 72 8.7 98.6-17.9 26.7-26.7 32.6-66.2 17.9-98.6 33.4-12.5 57.1-44.7 57.1-82.4zm-144.8-44.25L236.16 341.74c-4.31 4.28-11.28 4.25-15.55-.06l-75.72-76.33c-4.28-4.31-4.25-11.28.06-15.56l26.03-25.82c4.31-4.28 11.28-4.25 15.56.06l42.15 42.49 97.2-96.42c4.31-4.28 11.28-4.25 15.55.06l25.82 26.03c4.28 4.32 4.26 11.29-.06 15.56z"
                />
              </svg>
            </span>
            <Button
              onClick={handleClickOpen}
              style={{
                backgroundColor: "#3897f0",
                color: "white",
                fontWeight: "600",
                textTransform: "capitalize"
              }}
            >
              S'abonner
            </Button>
          </Typography>
          <Box display="flex" style={{ marginTop: 15 }}>
            <Typography style={{ marginRight: 15 }}>
              <b>105</b> publications
            </Typography>
            <Typography style={{ marginRight: 15 }}>
              <b>194</b> abonnés
            </Typography>
            <Typography>
              <b>38</b> abonnements
            </Typography>
          </Box>
          <Typography style={{ marginTop: 25 }}>
            <b>Éstiam</b> <br />
            La Grande École de l'informatique & du numérique : développement web
            & mobile, <br />
            Big Data & Business Intelligence,Architecture Cloud systèmes &
            réseaux. <br />
            <a
              href="www.estiam.education"
              style={{
                textDecoration: "none",
                color: "#003569",
                fontWeight: "bold"
              }}
            >
              www.estiam.education
            </a>
          </Typography>
        </Box>
      </Box>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          overflow: "hidden"
        }}
      >
        <GridList
          cellHeight={160}
          style={{ width: "auto", height: "auto" }}
          cols={3}
        >
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <i
          className="uil uil-user-plus"
          style={{ textAlign: "center", fontSize: 55, marginBottom: 10 }}
        />
        <Typography color="textSecondary" align="center">
          Connectez-vous pour vous abonner.
        </Typography>
        <Box display="block" style={{ padding: 25 }}>
          <Button
            onClick={handleClose}
            style={{
              backgroundColor: "#3897f0",
              color: "white",
              fontWeight: "600",
              textTransform: "none"
            }}
          >
            Continuer en tant que facebookaccount
          </Button>
          <br />
          <Button
            onClick={handleClose}
            fullWidth
            style={{
              marginTop: 15,
              color: "#3897f0",
              fontWeight: "bold",
              textTransform: "none"
            }}
          >
            S'inscrire
          </Button>
          <br />
          <Button
            onClick={handleClose}
            fullWidth
            style={{ marginTop: 15, textTransform: "none" }}
          >
            Plus tard
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};
