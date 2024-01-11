import React from "react";
import { Typography, Container, Grid, Box } from "@mui/material";
import { eventsStyles } from "./styles";
import EventCard from "./EventCard";
import gbm from "./Images/gbm.png";
import bonfire from "./Images/bonfire.png";
import yogurtworld from "./Images/yogurtworld.png";
import friendsgiving from "./Images/friendsgiving.png"
import {EventsData} from "./EventsData";

const Events = () => {
  const styles = eventsStyles();
  const eventsData = EventsData.map((data) => {
    return (<Grid item xs={12} sm={6} md={4}>
      <EventCard
        image={data.image}
        title={data.title}
        date={data.date}
        description={data.description}
      ></EventCard>
    </Grid>);
  });
  return (
    <Box sx={styles.root}>
      <Container maxWidth="lg" style={{ marginTop: "5%" }}>
        <Typography variant="h2" sx={{ textAlign: "center", color: "white" }}>
          WINTER 2024 EVENTS
        </Typography>
        <Grid container spacing={3} sx={styles.itemContainer} mb={4}>
          {/* <Grid item xs={12} sm={6} md={4}>
            <EventCard
              image={gbm}
              title="General Body Meeting 1"
              date="October 11, 2023 (7:30pm-8:30pm)"
              description="Our first GBM of Fall ‘23 will be this Wednesday, October 11 at the Bear Room (Price Center) from 7:30-8:30pm. Join the team to learn about Burmese culture, see what events we have planned, and enjoy some Laphet Thoke! Can’t wait to see everyone there! 🍂🫶🏼"
            ></EventCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <EventCard
              image={yogurtworld}
              title="Yogurt World"
              date="October 24, 2023 (Entire Day)"
              description="Join us on October 24th this Tuesday at YogurtWorld for a sweet collaboration! 🍨🍯
              This event will go on for the entire day + BURSA members will be there through 2-3pm if you want to stop by for a quick chat!"
            ></EventCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <EventCard
              image={bonfire}
              title="Bonfire"
              date="October 28, 2023 (7:00pm-9:00pm)"
              description="Join us this Friday at La Jolla Shores for a bonfire night! Free food and drinks provided so come hang with BURSA from 7-9pm. If you want to take the bus with members there, then meet in front of Main Gym at 6:30pm!"
            ></EventCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <EventCard
              image={friendsgiving}
              title="Friendsgiving"
              date="November 19, 2023 (8:00pm-11:00pm)"
              description="We’re excited to announce our Friendsgiving event on Sunday, 11/19 at 8:00pm! Bring a dish and join us for a fun night with BURSA members and friends! The RSVP link is in our bio (click the linktree), make sure to sign up by Friday, 11/17! More info will be provided to those who sign up. We hope to see you there! 🍂🍁"
            ></EventCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          </Grid> */}
          {eventsData}
        </Grid>
        <h3 style={{textAlign: 'center'}}>More events will be posted soon! Please check the site regularly for updates!</h3>
      </Container>
    </Box>
  );
};

export default Events;
