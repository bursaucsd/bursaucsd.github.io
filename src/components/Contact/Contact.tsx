import React from "react";
import { Typography, Container, Grid, Box, Button } from "@mui/material";
import { contactStyles } from "./styles";
import TextField from "@mui/material/TextField";
import mmcartoon from "./Images/mmcartoon.png";
import email from "./Images/email.svg";
import linkedin from "./Images/linkedin.svg";
import instagram from "./Images/instagram.svg";
import discord from "./Images/discord.svg";
import sp23bf1 from "./Images/sp23bf1.png"
import contactpic from "./Images/contactuspic.png"

const Contact = () => {
  const styles = contactStyles();
  const handleSubscribe = (e: any) => {
    e.preventDefault();
    // Handle the newsletter subscription form submission here
  };
  return (
    <Box sx={styles.root}>
      <Container maxWidth="xl" style={{ marginTop: "5%" }}>
        <form>
          <Grid container spacing={3} sx={styles.itemContainer}>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={sp23bf1} alt="mmcartoon" width='100%' height='auto'></img>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
            <Box style={{ textAlign: "center", marginBottom: '2%', fontSize:'1.5rem' }}>
          <h1>GET IN TOUCH</h1>
        </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: {md: 10, sm: 12, xs: 5}, marginBottom: '3%'}}>
            <Box><a href="mailto:bursa@ucsd.edu"><img src={email} alt='email' height='50px'/></a></Box>
            <Box><a href="https://www.instagram.com/bursaucsd/" target='_blank'><img src={instagram} alt='instagram' height='50px'/></a></Box>
            <Box><a href="https://www.linkedin.com/company/bursa-ucsd" target='_blank'><img src={linkedin} alt='email' height='50px'/></a></Box>
            <Box><a href="https://discord.gg/S9A4DQCw" target='blank'><img src={discord} alt='discord' height='50px'/></a></Box>
            </Box>
            <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "13px",
                  color: "white",
                }}
                
              >
                {/* <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  variant="filled"
                  color="success"
                  placeholder="YOUR NAME *"
                  style={{ backgroundColor: "white", borderRadius: '15px'}}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  variant="filled"
                  color="success"
                  placeholder="YOUR EMAIL *"
                  style={{ backgroundColor: "white", borderRadius: '15px' }}
                />
                <TextField
                required
                id="outlined-multiline-flexible"
                label="Message"
                variant="filled"
                multiline
                color="success"
                placeholder="Hello World"
                rows={4}
                style={{ backgroundColor: "white", width: "100%", borderRadius: '15px'}}
              />
              <Button variant="contained" sx={{borderRadius: '15px'}}>Submit Message</Button> */}
              </Box>
            </Grid>
          </Grid>
        </form>
        <Box sx={{ backgroundColor: "black", padding: '2rem', textAlign: 'center' }} mt={5} mb={5}>
          <Typography variant="h4" gutterBottom>Subscribe to Our Newsletter</Typography>
          <Typography variant="body1">
            Subscribe to our newsletter to stay updated with the latest news and updates.
          </Typography>
          <form onSubmit={handleSubscribe}>
            <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row', md: 'row'}, justifyContent: 'center', alignItems: 'center', gap: 2}}>
            {/* <TextField
              required
              id="outlined-required"
              label="Email"
              variant="filled"
              color="success"
              placeholder="Your Email Address"
              style={{ backgroundColor: "white", borderRadius: "15px", marginTop: '1rem', minWidth: '150px', maxWidth: '550px', width: '100%'}}
            /> */}
            <Button
              type="submit"
              variant="contained"
              sx={{ borderRadius: "15px", marginTop: '1rem' }}
            >
              Subscribe
            </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
