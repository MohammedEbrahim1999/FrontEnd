import { Box, Container, Stack, Typography, useTheme, Rating, IconButton, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import { Close } from '@mui/icons-material';
import PrdouctDetails from './PrdouctDetails';
import { useGetproductByNameQuery } from "../../Redux/product";
import ErrorIcon from '@mui/icons-material/Error';
import { AnimatePresence, motion } from "framer-motion";


const Main = () => {

    const handleAlignment = (event, newValue) => {
        if (newValue !== null) {
            setMyData(newValue);
        }
    };
    const theme = useTheme();



    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };












    const allProductsApi = "Products?populate=*";
    const mencategoryApi = "products?populate=*&filters[productCategory][$eq]=men";
    const womancategoryApi = "products?populate=*&filters[productCategory][$eq]=woman";
    const [myData, setMyData] = useState(allProductsApi);
    const { data, error, isLoading } = useGetproductByNameQuery(myData);
    const [clickedProduct, setClickedProduct] = useState([]);

    if (isLoading) {
        return (
            <Container sx={{
                py: 11,

            }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2
                }}>
                    <CircularProgress /> Loading...........
                </Box>
            </Container>
        )
    }
    if (error) {
        return (
            <Container sx={{
                py: 11,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1
            }}>
                <Typography variant='h6' >
                    <ErrorIcon />
                </Typography>
                <Typography variant='h6' >
                    Please Try Again later........
                </Typography>
            </Container>
        )
    }


    if (data) {
        return (
            <Container sx={{ mt: 9, pb: 6 }}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"} gap={3} >
                    <Box>
                        <Typography variant='h6'> Selected Products</Typography>
                        <Typography variant='body1' fontWeight={300}> All our new arrivals in a exclusive brand selection</Typography>
                    </Box>
                    <ToggleButtonGroup
                        value={myData}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        color='error'
                        sx={{
                            ".Mui-selected": {
                                border: " 1px solid rgba(233,69,96,0.5) !important",
                                color: "#e94560 !important",
                                backgroundColor: "inherit",
                            }
                        }}
                    >
                        <ToggleButton className='myButton' value={allProductsApi} aria-label="left aligned" sx={{ color: theme.palette.text.primary }}>
                            All Products
                        </ToggleButton>
                        <ToggleButton className='myButton' value={mencategoryApi} aria-label="centered" sx={{ mx: "16px !important", color: theme.palette.text.primary }}>
                            Men Category
                        </ToggleButton>
                        <ToggleButton className='myButton' value={womancategoryApi} aria-label="right aligned" sx={{ color: theme.palette.text.primary }}>
                            Woman Category
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"}>
                    <AnimatePresence>

                        {data.data.map((item) => {
                            return (
                                // 370
                                <Card
                                    component={motion.section}
                                    layout
                                    initial={{ transform: "scale(0)" }}
                                    animate={{ transform: "scale(1)" }}
                                    transition={{ duration: 1.6, type: "spring", stiffness: 50 }}

                                    key={item.id}
                                    sx={{
                                        maxWidth: 370, mt: 6,
                                        ":hover .MuiCardMedia-root": {
                                            rotate: "1deg",
                                            scale: "1.1",
                                            transition: "0.35s",

                                        }
                                    }}>
                                    <CardMedia
                                        sx={{ height: 277 }}
                                        image={`${item.attributes.productImg.data[0].attributes.url}`}
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                            <Typography variant='h6' gutterBottom component={"div"}>{item.attributes.productTitle}</Typography>
                                            <Typography variant='subTitle1'>${item.attributes.productPrice}</Typography>
                                        </Stack>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.attributes.productDes}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ justifyContent: "space-between" }}>
                                        <Button size="large" sx={{ textTransform: "capitalize" }} onClick={() => {
                                            handleClickOpen();
                                            setClickedProduct(item);
                                        }
                                        }>
                                            <AddShoppingCartOutlinedIcon fontSize='small' sx={{ mr: 1 }} />
                                            Add To Cart
                                        </Button>
                                        <Rating name="read-only" value={item.attributes.productRating} precision={0.5} readOnly />

                                    </CardActions>
                                </Card>
                            )
                        })}
                    </AnimatePresence>

                </Stack>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    sx={{
                        ".MuiPaper-root": {
                            minWidth: { xs: "100%", md: 900 },
                        }
                    }}
                >
                    <IconButton onClick={handleClose} sx={{
                        ":hover": { color: "red", rotate: "180deg", transition: "0.6s" },
                        position: "absolute",
                        top: 0,
                        right: 10,
                    }}>
                        <Close />
                    </IconButton>

                    <PrdouctDetails clickedProduct={clickedProduct} />
                </Dialog>
            </Container>
        )
    }
}

export default Main
