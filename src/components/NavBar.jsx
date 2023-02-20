import React from 'react';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function NavItem(props) {
    const { children } = props;
    return (
        <div style={{ padding: "8px" }}>
            <IconButton>{children}</IconButton>
        </div>
    );
}

export default function NavBar() {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "primary.main" }}>
            <NavItem>
                <MenuIcon style={{ color: "white" }} />
            </NavItem>
            <NavItem>
                <SearchIcon style={{ color: "white" }} />
            </NavItem>
        </div>
    );
}
