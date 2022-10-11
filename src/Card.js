import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { users } from './App';

export default function ActionAreaCard() {
  console.log(window.location.href);
  let str = window.location.href.split('/user/')
  let user = users[str[1]-1]
  return (
    <Card sx={{ maxWidth: 1024, maxHeight: 1000 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="440"
          image={user.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.firstName}
          </Typography>
          <Typography variant="body2" color="text.secondary"> {user.about}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
