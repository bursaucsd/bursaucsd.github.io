import React from "react";
import { Typography, Container, Grid, Box, Button } from "@mui/material";
import { cultureStyles } from "./styles";
import TextField from "@mui/material/TextField";
import sheema from "./Images/sheema.png";
import nay from "./Images/nay.png";
import hikari from "./Images/hikari.png";
import nyan from "./Images/nyan.png";
import sithu from "./Images/sithu.jpg";
import william from "./Images/william.jpg";
import albert from "./Images/albert.png";
import kaung from "./Images/kaung.png";
import michelle from "./Images/michelle.png";
import angelina from "./Images/angelina.png"
import kacey from "./Images/kacey.png"
import sumay from "./Images/sumay.jpeg"

const Team = () => {
  const styles = cultureStyles();
  return (
    <Box sx={styles.root}>
      <Container maxWidth="lg" style={{ marginTop: "5%" }}>
        <h1
          style={{ textAlign: "center", marginBottom: "2%", fontSize: "rem" }}
        >
          Meet the Team
        </h1>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={nay}
              alt="Nay"
              style={styles.imgStyle}
            />
            <div style={{ textAlign: "center" }}>Su Aye (Nay)</div>
            <div style={{ textAlign: "center" }}>President</div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={sheema}
              alt="Sheema"
              style={styles.imgStyle}
            />
            <div style={{ textAlign: "center" }}>Sheema Muller</div>
            <div style={{ textAlign: "center" }}>Vice President</div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={angelina}
              alt="angelina"
              style={styles.imgStyle}
            />
            <div style={{ textAlign: "center" }}>Angelina Yun Yee</div>
            <div style={{ textAlign: "center" }}>
              VP Internal
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={hikari}
              alt="Burmese Event 1"
              style={styles.imgStyle}
            />
            <div style={{ textAlign: "center" }}>Hikari Kyi</div>
            <div style={{ textAlign: "center" }}>VP External</div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={albert}
              alt="Burmese Event 1"
              style={styles.imgStyle}
            />
            <div style={{ textAlign: "center" }}>Albert Aung</div>
            <div style={{ textAlign: "center" }}>VP Finance</div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={nyan}
              alt="Burmese Event 1"
              style={styles.imgStyle}
            />
            <div style={{ textAlign: "center" }}>Nyan Aung</div>
            <div style={{ textAlign: "center" }}>VP Finance</div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={kacey}
              alt="kacey"
              style={styles.imgStyle}
            />
            <div style={{ textAlign: "center" }}>Kacey Zay-Ya</div>
            <div style={{ textAlign: "center" }}>VP Accounting</div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={william}
              alt="Burmese Event 1"
              style={styles.imgStyle}
            />
            <div style={{ textAlign: "center" }}>William Hein</div>
            <div style={{ textAlign: "center" }}>VP Operations</div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={sithu}
              alt="Burmese Event 1"
              style={styles.imgStyle}
            />
            <div style={{ textAlign: "center" }}>Sithu Soe</div>
            <div style={{ textAlign: "center" }}>VP Marketing</div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={michelle}
              alt="Burmese Event 1"
              style={styles.imgStyle}
            />
            <div style={{ textAlign: "center" }}>Michelle Myint</div>
            <div style={{ textAlign: "center" }}>VP Events</div>
          </Grid>
        </Grid>
        <h1
          style={{ textAlign: "center", marginBottom: "2%", fontSize: "rem" }}
        >
          Previous Board Members
        </h1>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={kaung}
              alt="kaung"
              style={styles.imgStyle}
            />
            <div style={{ textAlign: "center" }}>Kaung Min Khant</div>
            <div style={{ textAlign: "center" }}>
              Former VP Software Development
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={sumay}
              alt="sumay"
              style={styles.imgStyle}
            />
            <div style={{ textAlign: "center" }}>Su May</div>
            <div style={{ textAlign: "center" }}>Former VP Finance</div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
