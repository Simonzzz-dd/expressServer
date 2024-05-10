const express = require('express');
const app = express();

// Define the data and path
const data = 'yxOxmhIdz3OUS4QivU1HI_J8MGmD5KU_cnkOki7vPws.2biBbcPIT1WpvT2R4cVF7RbunMmuwFubkqQGA9bH6JE';
const challengePath = '/.well-known/acme-challenge/yxOxmhIdz3OUS4QivU1HI_J8MGmD5KU_cnkOki7vPws';

// Serve the data at the specified path
app.get(challengePath, (req, res) => {
    res.type('text/plain');
    res.send(data);
});
app.listen(3000, () => {
  console.log(`Server running on http://localhost:${port}`);
});