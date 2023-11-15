import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface EventCardProps {
    image: string;
    title: string;
    date: string;
    description: string;
}
  
const EventCard: React.FC<EventCardProps> = ({ image, title, date, description }) => {
  return (
    <Card sx={{minHeight: '575px'}}>
      <CardMedia component="img" alt="Event Image" height="350" image={image} sx={{objectFit: 'fill'}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1">
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
