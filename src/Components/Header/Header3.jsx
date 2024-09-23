import { Container, Typography, Box, useTheme, IconButton, Link,Stack } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import WindowIcon from '@mui/icons-material/Window';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import LaptopIcon from '@mui/icons-material/Laptop';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Drawer from '@mui/material/Drawer';
import { Close } from '@mui/icons-material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import Links from './Links.jsx';
const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ width: 222, bgcolor: theme.palette.myColor.main, color: theme.palette.text.primary }}
        >
          <WindowIcon />
          <Typography sx={{ p: "0", textTransform: "capitalize", mx: 1 }}> Categories </Typography>
          <Box flexGrow={1}></Box>
          <KeyboardArrowRightIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{ ".MuiPaper-root": { width: 222, borderRadius: "12px", bgcolor: theme.palette.myColor.main, color: theme.palette.text.primary } }}
        >


          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <MoreHorizOutlinedIcon />

            </Typography>
          </MenuItem>



          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <MoreHorizOutlinedIcon />

            </Typography>
          </MenuItem>



          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <MoreHorizOutlinedIcon />
            </Typography>
          </MenuItem>




          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <MoreHorizOutlinedIcon />

            </Typography>
          </MenuItem>
        </Menu>
      </Box>
      {useMediaQuery("(min-width:1200px)") && (
        <Stack gap={4} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}
      {useMediaQuery('(max-width:1200px)') && (<IconButton onClick={toggleDrawer("top", true)}>
        <MenuIcon />
      </IconButton>)}


      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-12cfoy0-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}      >



        <Box sx={{ width: "444px", mx: "auto", mt: 6, position: "relative", pt: 10, my: "auto" }}>
          <IconButton onClick={toggleDrawer("top", false)} sx={{
            ":hover": { color: "red", rotate: "180deg", transition: "0.6s" },
            position: "absolute",
            top: 0,
            right: 10,
          }}>
            <Close />

          </IconButton>
          {[
            { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
            { mainLink: "Mega menu", subLinks: ["Link 1", "Link 2", "Link 3"] },
            {
              mainLink: "full screen menu",
              subLinks: ["Link 1", "Link 2", "Link 3"],
            },
            { mainLink: "pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
            {
              mainLink: "user account",
              subLinks: ["Link 1", "Link 2", "Link 3"],
            },
            {
              mainLink: "vendor account",
              subLinks: ["Link 1", "Link 2", "Link 3"],
            },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ bgcolor: "initial", }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>

                <List sx={{ py: 0, my: 0 }}>
                  {item.subLinks.map((link) => {
                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}





        </Box>

      </Drawer>
    </Container>
  )
}

export default Header3
