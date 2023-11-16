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
      </Container>
    </Box>
  );
};

export default About;
