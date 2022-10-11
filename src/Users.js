import { Link } from "react-router-dom";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import Avatar from '@mui/material/Avatar';
import { Divider } from "@mui/material";
import ActionAreaCard from "./Card";

export default function UserList(props) {
  return (
    <List sx={{ width: '100%', maxWidth:500, bgcolor: 'background.paper' }}>
      {props.users.map((user) => (
          <ListItem alignItems="flex-start" 
          >
          <ListItemAvatar>
            <Avatar src={user.image || 'https://i.pinimg.com/564x/46/1c/42/461c42df2b34fd8cbf7600bf5cf7e243.jpg'}>
            </Avatar>
          </ListItemAvatar>
        <Link to={`/user/${user.id}`}>
        <ListItemText primary={`${user.firstName}  ${user.lastName}`} secondary={user.age} />
        </Link>
          <Divider variant="inset" component="li" />
        </ListItem>
        ))}
    </List>
  );
}


