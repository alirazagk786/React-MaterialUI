import { Instagram, Mail, Notifications } from "@mui/icons-material";
import { useState } from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography
} from "@mui/material";
import React from "react";


const StyledToolbar=styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"

})
const Icons=styled('div')({
    display:"flex",
    alignItems:"center",
    gap:"25px"
})


const Navbar = () => {
    const [open,setOpen]=useState(false)
    // const handleClose = () => {
    //     setOpen(!open);
    //     console.log('hi');
    //   };
  return (
    <AppBar position="sticky">
    <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
          Social Link 
        </Typography>
        <Instagram sx={{display:{xs:"block" , sm:"none"}}}/>
        <InputBase placeholder="Search..." sx={{backgroundColor:"white" , width:"40%" ,borderRadius:"5px"}}/>
        <Icons>
        <Badge badgeContent={4} color="error" sx={{display:{xs:"none", sm:"block"}}}>
        <Mail color="white" />
        </Badge>
        <Badge badgeContent={9} color="error" sx={{display:{xs:"none", sm:"block"}}}>
        <Notifications/>
        </Badge>
        <Avatar src="" sx={{height:30 ,width:30}} onClick={ (e)=> setOpen(!open) }>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        // onClick={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={()=>console.log('pro')}>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </Avatar>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
