import {
    Badge,
    Container,
    IconButton,
    Stack,
    Typography,
    useTheme,
    ListItem
} from "@mui/material"; import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

const options = [
    'All Categories',
    'Car',
    'Clothes',
    'Electronics',
];




const Search = styled("div")(({ theme }) => ({
    flexGrow: 0.4,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #777",
    "&:hover": {
        border: "1px solid #333",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "266px",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "330px",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}));

const Header2 = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
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
    const theme = useTheme();
    return (
        <Container sx={{ my: 3, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Stack alignItems={"center"}>
                <ShoppingCartOutlinedIcon />
                <Typography variant='body2'>E-Commerce</Typography>
            </Stack>



            <Search sx={{ borderRadius: "22px", display: "flex", justifyContent: "space-between",[theme.breakpoints.down("sm")]: {
                                width: "180px",
                                ml:3
                            }, }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <div>
                    <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{
                            bgcolor: theme.palette.myColor.main, borderTopRightRadius: "22px", borderBottomRightRadius: "22px", p: "0", [theme.breakpoints.down("sm")]: {
                                display: "none"
                            },
                        }}
                    >
                        <ListItem
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-label="when device is locked"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}
                        >
                            <ListItemText
                                sx={{ width: "93px", textAlign: "center", "&:hover": { cursor: "pointer" } }}
                                secondary={options[selectedIndex]}
                            />
                            <ExpandMoreIcon sx={{ fontSize: "15px", color: "#FFF" }} />
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
                                sx={{ fontSize: "16px" }}

                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </Search>



            <Stack direction={"row"} alignItems={"center"}>
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={5} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>

                <IconButton>
                    <Person2OutlinedIcon />
                </IconButton>
            </Stack>


        </Container>


    )
}

export default Header2
