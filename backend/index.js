const express = require('express');
// const https = require('https');
// const fs = require('fs');
require('dotenv').config();

const app = express();

// define host and port
const HOST = process.env.HOST;
const PORT = process.env.PORT || 5000;

app.use(express.json());

// const options = {
//     key: fs.readFileSync('C:\\Users\\ranxi\\UCDavis\\W_workingApplication\\ARoundEntertainment\\SWE_Exercise\\StarterCode\\backend\\key.pem'),
//     cert: fs.readFileSync('C:\\Users\\ranxi\\UCDavis\\W_workingApplication\\ARoundEntertainment\\SWE_Exercise\\StarterCode\\backend\\cert.pem')
// };

//implement the CORS config
const cors = require('cors');
// client web address certificated by cors
const corsOptions = {
    origin: ['https://ranxin2023.github.io', 'http://localhost:3000'],
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
//products array
let products = [
    { id: 1, name: 'Product 1', description: 'description 1', price: 100, imageUrl: '' },
    { id: 2, name: 'Product 2', description: 'description 2', price: 200, imageUrl: '' },
    { id: 3, name: 'Product 3', description: 'description 3', price: 300, imageUrl: '' },
    { id: 4, name: 'Product 4', description: 'description 4', price: 150, imageUrl: '' },
    { id: 5, name: 'Product 5', description: 'description 5', price: 500, imageUrl: '' },
    { id: 6, name: 'Product 6', description: 'description 6', price: 50, imageUrl: '' },
];

//function to generate a url for getting a random image from picsum
const fetchImageUrl = () => {
    return `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`;
};

//implement the get api for getting products
app.get('/api/products', (req, res) => {
    // generate the random imageURL
    for (let i = 0; i < products.length; i++) {
        products[i].imageUrl = fetchImageUrl()
    }
    // console.log('All products:', products);
    res.json(products)
});

//implement the delete api for deleting a product by Id
app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const idInt = parseInt(id)
    // console.log("Enter app.delete")
    // console.log(`Received request to delete product with id: ${id}`);
    // find the index equals to id
    var productIdx = -1
    var idx = 0
    for (const product of products) {
        if (product.id == idInt) {
            productIdx = idx
            break
        }
        idx += 1
    }

    // console.log(`ProductIdx is ${productIdx}`)
    // finding the items
    if (productIdx !== -1) {
        // console.log(`Product found:`, products[productIdx]);
        // delete the index
        products.splice(productIdx, 1);
        res.status(200).json({ message: 'Product deleted successfully' });
    } else {
        // error response for not finding the item
        res.status(404).json({ message: 'Product not found' });
    }
});

// listen to the port
app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});