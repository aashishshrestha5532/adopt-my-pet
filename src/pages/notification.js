import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
const notifications = [
  {
    name: "Pug",
    url: "https://images.unsplash.com/photo-1587245976235-8967aa9277a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVnJTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "New Pug is in your area. Please click more description.",
    time: "3 hour ago",
  },

  {
    name: "German Shepard",
    description:
      "New Black shepard is in your area. Please click more description.",
    time: "2 hour ago",
    url: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1367&q=80",
  },

  {
    name: "Labrador",
    description: "New Labrdaor is in your area. Please click more description.",
    time: "3 hour ago",
    url: "https://images.unsplash.com/photo-1554456854-55a089fd4cb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFicmFkb3IlMjByZXRyaWV2ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  },
];
export default function Notifications() {
  return (
    <div>
    <Header />
    <h3>Notifications</h3>
    <List sx={{ width: "100%", maxWidth: 560, bgcolor: "background.paper" }}>
      {notifications.map((notification, index) => (
        <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={notification.url} />
            </ListItemAvatar>
            <ListItemText
              primary={notification.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {notification.description}
                  </Typography>

                  {"\t"}
                  {notification.time}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
        </div>

  );
}
