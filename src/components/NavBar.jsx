import React from 'react'
// import Box, { BoxProps } from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";


function NavItem(props) {
    const { children, ...other } = props;
    return (
      <Box sx={{ p: 1, m: 1 }}>
        <IconButton {...other}>{children}</IconButton>
      </Box>
    );
  }
  
  export default function NavBar() {
    return (
      
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
          bgcolor: "primary.main"
        }}
      >
        <NavItem>
          <MenuIcon sx={{ color: "common.white" }} />
        </NavItem>
        <NavItem>
          <SearchIcon sx={{ color: "common.white" }} />
        </NavItem>
      </Box>
    );
  }
  