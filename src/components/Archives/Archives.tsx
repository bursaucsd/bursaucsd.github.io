import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { archiveStyles } from "./styles";
import EventCard from "./EventCard";
import spbonfire from "./Images/sp23bonfire.png";
import sp23gbm1 from "./Images/sp23gbm1.png";
import sp23zoomsocial from "./Images/sp23zoomsocial.png";
import sp23studyocial from "./Images/sp23studysocial.png";
import sp23somisocial from "./Images/sp23somisocial.png";
import sp23bf1 from "./Images/sp23bf1.png";
import sp23bf2 from "./Images/sp23bf2.png";
import { sp23ArchivesData, fa23ArchivesData } from "./ArchivesData";

const Archives = () => {
  const styles = archiveStyles();
  const sp23ArchiveEvents = sp23ArchivesData.map((data) => {
    return (<Grid item xs={12} sm={6} md={4}>
      <EventCard
        image={data.image}
        title={data.title}
        date={data.date}
        description={data.description}
        pic1={data.pic1}
        pic2={data.pic2}
      ></EventCard>
    </Grid>);
  });
  const fa23ArchiveEvents = fa23ArchivesData.map((data) => {
    return (<Grid item xs={12} sm={6} md={4}>
      <EventCard
        image={data.image}
        title={data.title}
        date={data.date}
        description={data.description}
        pic1={data.pic1}
        pic2={data.pic2}
      ></EventCard>
    </Grid>);
  });
  return (
    <Box sx={styles.root}>
      <Container maxWidth="lg" style={{ marginTop: "5%" }}>
      <Typography variant="h2" sx={{ textAlign: "center", color: "white" }}>
          FALL 2023 EVENTS
        </Typography>
        <Grid container spacing={3} sx={styles.itemContainer} mb={4}>    
          {fa23ArchiveEvents}
        </Grid>
        <Typography variant="h2" sx={{ textAlign: "center", color: "white" }}>
          SPRING 2023 EVENTS
        </Typography>
        <Grid container spacing={3} sx={styles.itemContainer} mb={4}>    
          {sp23ArchiveEvents}
        </Grid>
      </Container>
    </Box>
  );
};

export default Archives;
