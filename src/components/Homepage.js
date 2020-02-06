import React from "react";
import Navbar from "./Navbar";
import { Box, Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

const feed = require("../data/feed.json");
const randomImage = (min, max) => {
  return `https://picsum.photos/1920/1080?random=${Math.floor(
    Math.random() * (max - min + 1)
  ) + min}/650/750.jpg`;
};

document.body.style.backgroundColor = "#fafafa";

export default props => {
  return (
    <>
      <Navbar />
      <Container style={{ width: 950 }}>
        <Box style={{ height: "90vh" }} display="flex">
          <Box style={{ width: "70%" }}>
            {feed.map(feeds => (
              <Box>
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    style={{
                      padding: 15,
                      backgroundColor: "white",
                      border: "1px solid #e6e6e6",
                      marginTop: 20
                    }}
                  >
                    <img
                      src="https://instagram.fcdg2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/44352037_315306639066160_7951192171044929536_n.jpg?_nc_ht=instagram.fcdg2-1.fna.fbcdn.net&_nc_ohc=P-GRijRoiy0AX_t5xCf&oh=360f6c20b5957f2ab2fa90144dfdf795&oe=5E9BBFDF"
                      style={{ borderRadius: 35, height: 35 }}
                      alt="logoEstiam"
                    />
                    <Typography
                      style={{
                        fontWeight: "bold",
                        marginLeft: 10,
                        fontSize: 14
                      }}
                    >
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
                    </Typography>
                  </Box>
                </Link>
                <Box style={{ height: 600 }}>
                  <img
                    src={randomImage(1, 50)}
                    alt="feed_image"
                    style={{ width: "100%", height: 600 }}
                  />
                </Box>
                <Box
                  style={{
                    padding: 15,
                    backgroundColor: "white",
                    border: "1px solid #e6e6e6"
                  }}
                >
                  <FavoriteBorderIcon />
                  <ChatBubbleOutlineIcon style={{ marginLeft: 10 }} />
                  <br />
                  <Typography style={{ fontWeight: "bold", fontSize: 13 }}>
                    {feeds.views} views
                  </Typography>
                  <br />
                  <Typography style={{ fontSize: 13 }}>
                    <strong>{feeds.name} </strong>
                    {feeds.comment}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            style={{
              width: "20%",
              height: "auto",
              position: "fixed",
              right: 290
            }}
          >
            <Box display="flex" alignItems="center" style={{ marginTop: 20 }}>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <img
                  src="https://instagram.fcdg2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/44352037_315306639066160_7951192171044929536_n.jpg?_nc_ht=instagram.fcdg2-1.fna.fbcdn.net&_nc_ohc=P-GRijRoiy0AX_t5xCf&oh=360f6c20b5957f2ab2fa90144dfdf795&oe=5E9BBFDF"
                  style={{ borderRadius: 55, height: 55 }}
                  alt="logoEstiam"
                />
              </Link>
              <Box style={{ marginLeft: 10 }}>
                <Typography style={{ fontWeight: "bold" }} variant="p">
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
                </Typography>
                <Typography color="textSecondary" style={{ fontSize: 13 }}>
                  ESTIAM Education
                </Typography>
              </Box>
            </Box>
            <Box
              style={{
                backgroundColor: "white",
                border: "1px solid #e6e6e6",
                marginTop: 25,
                padding: 25,
                borderRadius: 5
              }}
            >
              <Typography
                color="textSecondary"
                style={{ marginBottom: 10, fontWeight: "bold", fontSize: 13 }}
              >
                Stories
              </Typography>
              <Typography color="textSecondary" style={{ fontSize: 13 }}>
                Stories from people you follow will show up here.
              </Typography>
            </Box>
            <Box
              style={{
                backgroundColor: "white",
                border: "1px solid #e6e6e6",
                marginTop: 25,
                padding: 25,
                borderRadius: 5
              }}
            >
              <Box display="flex" alignContent="center">
                <Box flexGrow={1}>
                  <Typography
                    color="textSecondary"
                    style={{
                      marginBottom: 10,
                      fontWeight: "bold",
                      fontSize: 13
                    }}
                  >
                    Suggestions For You
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    style={{
                      marginBottom: 10,
                      fontWeight: "bold",
                      fontSize: 13
                    }}
                  >
                    See all
                  </Typography>
                </Box>
              </Box>
              <Typography color="textSecondary" style={{ fontSize: 13 }}>
                Stories from people you follow will show up here.
              </Typography>
            </Box>
            <Box>
              <Typography
                color="textSecondary"
                style={{ fontSize: 10, marginTop: 10 }}
              >
                About us - Help - Press - API - Jobs - Privacy Terms - Directory
                <br />
                Profiles - Hashtags - Language <br />© 2020 INSTAGRAM
                REPRODUCTION - LasCC
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};
