import React from "react";
import { Container, Grid, Box } from "@mui/material";
import { teamStyles } from "./styles";
import { currentBoard, previousBoard } from "./TeamData";

const Team = () => {
  const styles = teamStyles();

  const currentBoardData = currentBoard.map((data) => {
    return (
      <Grid item xs={12} sm={4} md={3}>
        <img src={data.img} alt={data.name} style={styles.imgStyle} />
        <div style={{ textAlign: "center" }}>{data.name}</div>
        <div style={{ textAlign: "center" }}>{data.title}</div>
      </Grid>
    );
  });
  
  const previousBoardData = previousBoard.map((data) => {
    return (
      <Grid item xs={12} sm={4} md={3}>
        <img src={data.img} alt={data.name} style={styles.imgStyle} />
        <div style={{ textAlign: "center" }}>{data.name}</div>
        <div style={{ textAlign: "center" }}>{data.title}</div>
      </Grid>
    );
  });

  return (
    <Box sx={styles.root}>
      <Container maxWidth="lg" style={{ marginTop: "5%" }}>
        <h1
          style={{ textAlign: "center", marginBottom: "2%", fontSize: "rem" }}
        >
          Meet the Team
        </h1>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {currentBoardData}
        </Grid>
        <h1
          style={{ textAlign: "center", marginBottom: "2%", fontSize: "rem" }}
        >
          Previous Board Members
        </h1>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {previousBoardData}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
