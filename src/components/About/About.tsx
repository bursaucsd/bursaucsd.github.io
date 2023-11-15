import React from "react";
import { Typography, Container, Grid, Box } from "@mui/material";
import { aboutStyles } from "./styles";
import vision from './Images/vision.png'
import cartoonholdhands from "./Images/cartoonholdhands.png";
import whatcartoon from "./Images/what.png";
// import sheema from "./Images/sheema.png";
// import nay from "./Images/nay.png";
// import hikari from "./Images/hikari.png";
// import nyan from "./Images/nyan.png";
// import sithu from "./Images/sithu.jpg";
// import william from "./Images/william.jpg";
// import albert from "./Images/albert.png";
// import kaung from "./Images/kaung.png";
// import michelle from "./Images/michelle.png";

const About = () => {
  const styles = aboutStyles();
  return (
    <Box sx={styles.root}>
      <Container maxWidth="lg" style={{ marginTop: "5%" }}>
        <Grid container spacing={3} sx={styles.itemContainer}>
          <Grid item xs={12} sm={4}>
            <img
              src={whatcartoon}
              alt="Burmese Event 1"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" gutterBottom>
              What is BURSA?
            </Typography>
            <Typography variant="body1" paragraph>
              BURSA (Burmese Students Association) is a vibrant community that
              aims to promote awareness and celebrate the rich cultural heritage
              of Burma at the UC San Diego. We strive to
              create a welcoming environment where students can come together,
              learn about Burmese culture, and build lasting connections. We
              welcome everyone at our events!
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={styles.itemContainer}>
          <Grid item xs={12} sm={8} order={{ xs: 2, sm: 1 }}>
            <Typography variant="h4" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" paragraph>
              Our vision is to foster a dynamic and inclusive community that
              passionately embraces and showcases the profound cultural tapestry
              of Burma. We envision a space where diversity is celebrated, and
              students from all backgrounds come together to deepen their
              understanding of Burmese heritage. Through our events, we aspire
              to promote education and appreciation of the rich traditions, art,
              cuisine, history, and values that define Burma.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} order={{ xs: 1, sm: 2 }}>
            <img
              src={vision}
              alt="Burmese Event 1"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={styles.itemContainer}>
          <Grid item xs={12} sm={4}>
            <img
              src={cartoonholdhands}
              alt="Burmese Event 1"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" gutterBottom>
              Get Involved
            </Typography>
            <Typography variant="body1" paragraph>
              To get involved, you simply need to come to our events! Make sure
              to follow us on our instagram &#40;@bursaucsd&#41; to follow our
              event updates.
            </Typography>
          </Grid>
        </Grid>
        {/* <h1 style={{ textAlign: "center", marginBottom: '2%', fontSize: 'rem' }}>Meet the Team</h1>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={nay}
              alt="Nay"
              style={{ width: "100%", height: "auto" }}
            />
            <div style={{ textAlign: "center" }}>Su Aye (Nay)</div>
            <div style={{ textAlign: "center" }}>President</div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={sheema}
              alt="Sheema"
              style={{ width: "100%", height: "auto" }}
            />
            <div style={{ textAlign: "center" }}>Sheema Muller</div>
            <div style={{ textAlign: "center" }}>Vice President</div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={nyan}
              alt="Burmese Event 1"
              style={{ width: "100%", height: "auto" }}
            />
            <div style={{ textAlign: "center" }}>Nyan Aung</div>
            <div style={{ textAlign: "center" }}>VP of Internal Affairs</div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={sithu}
              alt="Burmese Event 1"
              style={{ width: "100%", height: "auto" }}
            />
            <div style={{ textAlign: "center" }}>Sithu Soe</div>
            <div style={{ textAlign: "center" }}>VP of External Affairs</div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={albert}
              alt="Burmese Event 1"
              style={{ width: "100%", height: "auto" }}
            />
            <div style={{ textAlign: "center" }}>Albert Aung</div>
            <div style={{ textAlign: "center" }}>VP of Finance</div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={william}
              alt="Burmese Event 1"
              style={{ width: "100%", height: "auto" }}
            />
            <div style={{ textAlign: "center" }}>William Hein</div>
            <div style={{ textAlign: "center" }}>VP of Operations</div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={hikari}
              alt="Burmese Event 1"
              style={{ width: "100%", height: "auto" }}
            />
            <div style={{ textAlign: "center" }}>Hikari Kyi</div>
            <div style={{ textAlign: "center" }}>VP of Membership</div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={michelle}
              alt="Burmese Event 1"
              style={{ width: "100%", height: "auto" }}
            />
            <div style={{ textAlign: "center" }}>Michelle Myint</div>
            <div style={{ textAlign: "center" }}>VP of Events</div>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={kaung}
              alt="Burmese Event 1"
              style={{ width: "100%", height: "auto" }}
            />
            <div style={{ textAlign: "center" }}>Kaung Min Khant</div>
            <div style={{ textAlign: "center" }}>
              VP of Software Development
            </div>
            </Grid>
        </Grid> */}
      </Container>
    </Box>
  );
};

export default About;
