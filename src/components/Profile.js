import React from "react";
import {
  Typography,
  Box,
  Button,
  GridList,
  GridListTile,
  Dialog,
  Divider,
  Container
} from "@material-ui/core";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
document.body.style.backgroundColor = "#fafafa";

const tileData = require("../data/tile.json");
const comments = require("../data/comments.json");
const randomImage = (min, max) => {
  return `https://picsum.photos/1920/1080?random=${Math.floor(
    Math.random() * (max - min + 1)
  ) + min}/650/750.jpg`;
};

export default props => {
  const [open, setOpen] = React.useState(false);
  const [openPost, setOpenPost] = React.useState(false);

  const handleClickPosts = () => {
    setOpenPost(true);
  };

  const handleClickPostsClose = () => {
    setOpenPost(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar />
      <Container style={{ width: 950 }}>
        <Box style={{ height: "90vh" }}>
          <Box style={{ height: "35%" }} display="flex" alignItems="center">
            <Box className="circle">
              <img
                src="https://instagram.fcdg2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/44352037_315306639066160_7951192171044929536_n.jpg?_nc_ht=instagram.fcdg2-1.fna.fbcdn.net&_nc_ohc=P-GRijRoiy0AX_t5xCf&oh=360f6c20b5957f2ab2fa90144dfdf795&oe=5E9BBFDF"
                alt="instaAvatar"
                style={{ borderRadius: 150, height: 150, width: 150 }}
              />
            </Box>
            <Box style={{ marginLeft: 65 }}>
              <Typography style={{ fontWeight: "bold", fontSize: 18 }}>
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
                    textTransform: "capitalize",
                    marginbRight: 10
                  }}
                >
                  S'abonner
                </Button>
              </Typography>
              <Box display="flex" style={{ marginTop: 15 }}>
                <Typography style={{ marginRight: 15, fontSize: 13 }}>
                  <b>105</b> publications
                </Typography>
                <Typography style={{ marginRight: 15, fontSize: 13 }}>
                  <b>194</b> abonnés
                </Typography>
                <Typography style={{ fontSize: 13 }}>
                  <b>38</b> abonnements
                </Typography>
              </Box>
              <Typography style={{ marginTop: 25, fontSize: 13 }}>
                <b>Éstiam</b> <br />
                La Grande École de l'informatique & du numérique : développement
                web & mobile, <br />
                Big Data & Business Intelligence,Architecture Cloud systèmes &
                réseaux. <br />
                <a
                  href="http://estiam.education"
                  target="_blank"
                  rel="noopener noreferrer"
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
              overflow: "hidden",
              marginBottom: 25
            }}
          >
            <GridList
              cellHeight={160}
              style={{ width: "auto", height: "auto" }}
              cols={3}
            >
              {tileData.map(tile => (
                <GridListTile
                  key={tile.like}
                  cols={tile.cols || 1}
                  style={{ cursor: "pointer", padding: 5 }}
                >
                  <div className="container" onClick={handleClickPosts}>
                    <img
                      src={randomImage(1, 50)}
                      alt={tile.title}
                      className="image"
                    />
                    <div className="overlay">
                      <Box className="text" display="flex" alignItems="center">
                        <i class="uil uil-heart-alt" />
                        <Typography style={{ fontSize: 15, marginLeft: 10 }}>
                          {tile.likes}
                        </Typography>
                        <i
                          class="uil uil-comment-medical"
                          style={{ marginLeft: 10 }}
                        />
                        <Typography style={{ fontSize: 15, marginLeft: 10 }}>
                          {tile.comment}
                        </Typography>
                      </Box>
                    </div>
                  </div>
                </GridListTile>
              ))}
            </GridList>
          </div>
          <Box align="right" style={{ marginBottom: 15 }}>
            <Typography variant="body2" color="textSecondary">
              © 2020 INSTAGRAM REPRODUCTION{" "}
              <a
                href="https://github.com/LasCC"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black", textDecoration: "none" }}
              >
                LasCC
              </a>
            </Typography>
          </Box>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <i
              className="uil uil-user-plus"
              style={{ textAlign: "center", fontSize: 65, padding: 20 }}
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

          {/* Post Dialog */}
          <Dialog
            open={openPost}
            onClose={handleClickPostsClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Box display="flex" style={{ height: "auto", width: "auto" }}>
              <Box style={{ width: 850 }}>
                <img
                  src={randomImage(1, 50)}
                  alt={tileData.post}
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundSize: "cover"
                  }}
                />
              </Box>
              <Box style={{ height: "auto", width: 450 }}>
                <Box style={{ padding: 15 }} display="flex" alignItems="center">
                  <img
                    src="https://instagram.fcdg2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/44352037_315306639066160_7951192171044929536_n.jpg?_nc_ht=instagram.fcdg2-1.fna.fbcdn.net&_nc_ohc=P-GRijRoiy0AX_t5xCf&oh=360f6c20b5957f2ab2fa90144dfdf795&oe=5E9BBFDF"
                    alt="instaAvatar"
                    style={{ borderRadius: 150, height: 25, width: 25 }}
                  />
                  <Box style={{ marginLeft: 10 }}>
                    <Typography variant="body2">
                      <b>estiameducation</b>
                      <span className="sb_verified" style={{ height: 10 }}>
                        <svg
                          style={{ height: 15 }}
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
                          color: "#3897f0",
                          fontWeight: "600",
                          textTransform: "capitalize",
                          marginbRight: 10
                        }}
                      >
                        S'abonner
                      </Button>
                    </Typography>
                  </Box>
                </Box>
                <Divider />
                {comments.map(co => (
                  <Box display="flex" style={{ padding: 15 }}>
                    <img
                      src={co.avatar}
                      alt="avatar"
                      style={{ height: 25, width: 25, borderRadius: "100%" }}
                    />
                    <Typography style={{ marginLeft: 15 }}>
                      <b>{co.name}</b> {co.comment}
                    </Typography>
                  </Box>
                ))}
                <Divider />
                <Box display="flex" style={{ padding: 15 }} alignItems="center">
                  <Box flexGrow={1} alignItems="center">
                    <i
                      className="uil uil-heart"
                      style={{ fontSize: 28, fontWeight: "bold" }}
                    />
                    <i
                      className="uil uil-comment"
                      style={{
                        marginLeft: 10,
                        fontSize: 28,
                        fontWeight: "bold"
                      }}
                    />
                    <i
                      className="uil uil-message"
                      style={{
                        marginLeft: 10,
                        fontSize: 28,
                        fontWeight: "bold"
                      }}
                    />
                  </Box>
                  <Box alignItems="center">
                    <i
                      className="uil uil-bookmark"
                      style={{ fontSize: 28, fontWeight: "bold" }}
                    />
                  </Box>
                </Box>
                <Typography style={{ marginLeft: 24, fontSize: 15 }}>
                  <b>{tileData[0].likes}</b> J'aime
                </Typography>
                <Divider style={{ marginTop: 15, marginBottom: 15 }} />
                <Box style={{ padding: 3, marginBottom: 10 }}>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "#003569" }}
                  >
                    <Button style={{ color: "#003569" }}>Connectez-vous</Button>
                  </Link>
                  pour aimer ou commenter.
                </Box>
              </Box>
            </Box>
          </Dialog>
        </Box>
      </Container>
    </>
  );
};
