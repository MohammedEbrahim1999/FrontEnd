import { Box, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React from 'react'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Button from '@mui/material/Button';
import { useState } from 'react';
const PrdouctDetails = ({ clickedProduct }) => {
    const [selectedImg, setselectedImg] = useState(0);
    
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2.5,
            flexDirection: { xs: "column", md: "row" },
        }}>

            <Box sx={{ display: "flex", mr: { xs: 2, sm: 0 } }}>
                <img style={{
                    borderRadius: "2px"
                }} width={360}

                    src={clickedProduct.attributes.productImg.data[selectedImg].attributes.url} alt="" />
            </Box>
            <Box sx={{
                py: 2,
                textAlign: { xs: "center", sm: "left", }
            }}>
                <Typography variant='h5'>{clickedProduct.attributes.productTitle}</Typography>
                <Typography my={0.4} fontSize={"22px"} color='crimson' variant='h6'> $ {clickedProduct.attributes.productPrice}</Typography>
                <Typography variant="body1">{clickedProduct.attributes.productDes}</Typography>
                <Stack direction={"row"} gap={1} my={2} sx={{
                    justifyContent: { xs: "center", md: "flex-start" }
                }}>
                    <ToggleButtonGroup
                        value={selectedImg}
                        exclusive
                        sx={{
                            ".Mui-selected": {
                                border: "1px solid royalblue !important",
                                borderRadius: "5px !important",
                                opacity: "1",
                                backgroundColor: "initial",
                            },
                        }}
                    >
                        {clickedProduct.attributes.productImg.data.map((item, index) => {
                            return (
                                <ToggleButton
                                    value={index}
                                    key={item.id}
                                    sx={{
                                        width: "110px",
                                        height: "110px",
                                        mx: 1,
                                        p: "0",
                                        opacity: "0.5",
                                    }}
                                >
                                    <img width={"100%"} height={"100%"} style={{ borderRadius: 3 }} src={item.attributes.url} alt="" onClick={() => {
                                        setselectedImg(index);
                                    }} />
                                </ToggleButton>
                            )
                        }
                        )}
                    </ToggleButtonGroup>
                </Stack>
                <Button
                    sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
                    variant="contained"
                >
                    <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
                    Buy now
                </Button>
            </Box>
        </Box>
    )
}

export default PrdouctDetails
