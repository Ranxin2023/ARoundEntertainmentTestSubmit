import { Box, Container, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from './productCard.js';
const ProductList = () => {
  // set the products by using state
  const [products, setProducts] = useState([]);

  //implement the get products function
  const fetchProducts = async () => {
    try {
      // response from get api function of server
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  //implement the delete function
  const handleDelete = async (id) => {
    try {
      // response from delete api function of server
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  // Call useEffect to fetch all the products from the server
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Container>
      {/* Make the content to be in the center of the screen */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <h1><b>Simple Card List</b></h1>
        <Grid container spacing={4}>
          {products.map(product => (
            // Adjust the size of grid to make it adapt to large, medium and small size of screen
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              {/* Handle the delete of items */}
              <ProductCard product={product} handleDeleteFunc={handleDelete} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductList;