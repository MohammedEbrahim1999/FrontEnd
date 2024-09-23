import React, { useContext, useState } from 'react'
import { ColorModeContext } from '../../theme.jsx';
import { IconButton, Typography, useTheme, Box, Stack, ListItem, Container } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined, Rowing } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const options = [
    'EN',
    'AR',
];
const Header1 = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{
            bgcolor: "#2B3445",
            py: "4px",
            borderBottomRightRadius: 4,
            borderBottomLeftRadius: 4,
        }}>

            <Container>
                <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
                    <Typography sx={{
                        mr: 2,
                        p: "3px 10px",
                        bgcolor: "#D23F57",
                        borderRadius: "12px",
                        fontSize: "10px",
                        fontWeight: "bold",
                        color: "#FFF",
                    }} variant='body2'>
                        Hot
                    </Typography>
                    <Typography sx={{
                        fontSize: "12px",
                        fontWeight: 300,
                        color: "#FFF",
                    }} variant='body2'>
                        Free Express Shipping
                    </Typography>



                    <Box flexGrow={"1"}></Box>

                    <div>
                        {theme.palette.mode === "light" ? (
                            <IconButton
                                onClick={() => {
                                    localStorage.setItem(
                                        "mode",
                                        theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                                color="inherit"
                            >
                                <LightModeOutlined sx={{ fontSize: '18px', color: "#FFF" }} />
                            </IconButton>
                        ) : (
                            <IconButton
                                onClick={() => {
                                    localStorage.setItem(
                                        "mode",
                                        theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                                color="inherit"
                            >
                                <DarkModeOutlined sx={{ fontSize: '18px', color: "#FFF" }} />
                            </IconButton>
                        )}
                    </div>
                    <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{ p: 0, m: 0 }}
                    >
                        <ListItem
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-label="EN"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}
                            sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
                        >
                            <ListItemText
                                sx={{ ".MuiTypography-root": { fontSize: "12px", color: "#FFF" } }}
                                secondary={options[selectedIndex]}
                            />
                            <ExpandMoreIcon sx={{ fontSize: "16px", color: "#FFF" }} />
                        </ListItem>
                    </List>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'lock-button',
                            role: 'listbox',
                        }}
                    >
                        {options.map((option, index) => (
                            <MenuItem
                                key={option}
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                                sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                    <XIcon sx={{
                        fontSize: "16px",
                        color: "#FFF",
                    }} />
                    <FacebookIcon sx={{
                        fontSize: "16px",
                        mx: "1px",
                        color: "#FFF",
                    }} />
                    <InstagramIcon sx={{
                        fontSize: "16px",
                        color: "#FFF",
                        mr: "15px"
                    }} />
                </Stack>
            </Container>
        </Box>
    )
}

export default Header1
