const express = require('express');
const app = express();
const port = 3000; // You can choose any port number

app.get('/*', (req, res) => {
  res.send('g6x9UrW4FkGkirzXZ7o2kxRHaz6_N6jZNN32LGUrfBw.2biBbcPIT1WpvT2R4cVF7RbunMmuwFubkqQGA9bH6JE');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});