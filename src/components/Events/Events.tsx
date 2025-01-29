import React from "react";
import { Typography, Container, Grid, Box } from "@mui/material";
import { eventsStyles } from "./styles";
import EventCard from "./EventCard";
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
          WINTER 2025 EVENTS
        </Typography>
        <Grid container spacing={3} sx={styles.itemContainer} mb={4}>
          {eventsData}
        </Grid>
        <h3 style={{textAlign: 'center'}}>More events will be posted soon! Please check the site regularly for updates!</h3>
      </Container>
    </Box>
  );
};

export default Events;
