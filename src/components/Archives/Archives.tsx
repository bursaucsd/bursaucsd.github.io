import React from "react";
import {Box, Container, Grid, Typography} from "@mui/material";
import {archiveStyles} from './styles'
import EventCard from "./EventCard";
import spbonfire from "./Images/sp23bonfire.png"
import sp23gbm1 from "./Images/sp23gbm1.png"
import sp23zoomsocial from "./Images/sp23zoomsocial.png"
import sp23studyocial from "./Images/sp23studysocial.png"
import sp23somisocial from "./Images/sp23somisocial.png"
import sp23bf1 from "./Images/sp23bf1.png"
import sp23bf2 from "./Images/sp23bf2.png"

const Archives = () => {
  const styles = archiveStyles();
  return (
    <Box sx={styles.root}>
      <Container maxWidth="lg" style={{ marginTop: "5%" }}>
        <Typography variant="h2" sx={{ textAlign: "center", color: "white" }}>
          SPRING 2023 EVENTS
        </Typography>
        <Grid container spacing={3} sx={styles.itemContainer} mb={4}>
          <Grid item xs={12} sm={6} md={4}>
            <EventCard
              image={sp23studyocial}
              title="Study Social"
              date="May 31, 2023 (6:00pm-10:00pm)"
              description="With finals approaching really soon, it is a great time to come and study with BURSA on May 31st from 6-10pm at John Muir Meeting Room (PC East)! Drop in anytime to get some work done and form study groups with other members! We look forward to seeing your studious selves there! 📚✍🏼"
              pic1={sp23bf1}
              pic2={sp23bf2}
            ></EventCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <EventCard
              image={sp23somisocial}
              title="Somi Somi Social"
              date="May 24, 2023 (7:00pm-9:00pm)"
              description="This Wednesday, May 24th, BURSA will be heading to UTC to get some yummy Somi Somi ice cream from 7:00pm to 9:00pm!!🍦😋 We will be heading to UTC together via the UCSD Central Campus Trolley Station, so meet us there at 6:30pm if you’d like to come with us! Otherwise we’ll see you there!"
              pic1={sp23bf1}
              pic2={sp23bf2}
            ></EventCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <EventCard
              image={sp23zoomsocial}
              title="Zoom Social"
              date="May 17, 2023 (7:00pm-8:00pm)"
              description="BURSA UCSD and BURSA UCD are collaborating for a zoom social! Join us on Wednesday 5/17 from 7-8 pm to make new friends and unforgettable memories. We hope to see everyone's beautiful faces there! 🙌💛"
              pic1={sp23bf1}
              pic2={sp23bf2}
            ></EventCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <EventCard
              image={spbonfire}
              title="Bonfire"
              date="April 28, 2023 (7:00pm-9:00pm)"
              description="Join BURSA on Friday, April 28th at La Jolla Shores for a bonfire night from 7:00-9:00pm! We’ll have fun activities and snacks, so bring yourself and friends! Also, we will be going as a group with a bus, so if you would like to come with us that way then meet us at 6:30pm in front of Main Gym."
              pic1={sp23bf1}
              pic2={sp23bf2}
            ></EventCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <EventCard
              image={sp23gbm1}
              title="GBM 1"
              date="April 19, 2023 (7:00pm-8:00pm)"
              description="BURSA is having our first GBM on Wednesday, April 19th at John Muir College Room (price center east level 2) from 7-8pm💛 Join us to get to know the team, learn about Burmese culture, hear spring quarter announcements, and play games! Hope to see you there!"
              pic1={sp23bf1}
              pic2={sp23bf2}
            ></EventCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Archives;
