import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PostAddIcon from '@mui/icons-material/PostAdd';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import React from "react";

const Sidebar = () => {
  return (
    <Box flex={1.5} p={1} sx={{ display: { xs: "none", sm: "block" } }}>
       <List sx={{ borderRight:"1px solid lightgray" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DynamicFeedIcon />
              </ListItemIcon>
              <ListItemText primary="All Posts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Post" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Post" />
            </ListItemButton>
          </ListItem>
          </List>
    </Box>
  );
};

export default Sidebar;
