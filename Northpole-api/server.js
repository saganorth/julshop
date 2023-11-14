const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/productsRouter'); 
const app = express();
const path = require('path');
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/img', express.static(path.join(__dirname, 'public', 'img')));



app.use('/api/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
