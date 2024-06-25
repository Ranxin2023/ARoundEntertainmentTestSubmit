// src/components/ProductCard.js
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';
const ProductCard = ({ product, handleDeleteFunc }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            {/* Specify the image attributes, the width and the height: 61.8% of width */}
            <CardMedia
                component="div"
                sx={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '61.8%',
                    backgroundImage: `url(${product.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* This part specify the attributes of the red trash icon */}
                <IconButton
                    aria-label="delete"
                    sx={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        backgroundColor: 'transparent',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                    }}
                    onClick={() => handleDeleteFunc(product.id)}
                >
                    <DeleteIcon sx={{ color: 'red' }} />
                </IconButton>
            </CardMedia>
            {/* List the Content of the product */}
            <CardContent>
                {/* List the product name */}
                <Typography gutterBottom variant="h5" component="div">
                    <b>{product.name}</b>
                </Typography>
                {/* List the product price */}
                <Typography variant="body2" color="text.secondary">
                    <b>${product.price}</b>
                </Typography>
                {/* List the product description */}
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>

        </Card>
    );
};

export default ProductCard;
