import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Modal } from "@mui/material";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
  pic1: string;
  pic2: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  date,
  description,
  pic1,
  pic2,
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card sx={{ minHeight: "580px" }}>
      <CardMedia
        component="img"
        alt="Event Image"
        height="350"
        image={image}
        sx={{ objectFit: "fill" }}
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">{title}</Typography>
          <Button size="small" variant="contained" onClick={handleOpen}>See Photos</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {/* <img src={pic1} alt="pic1" height='200px'/>
              <img src={pic2} alt="pic2" height='200px'/> */}
            </Box>
          </Modal>
        </Box>
        <Typography variant="body1" sx={{ marginTop: "4%" }}>
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;
