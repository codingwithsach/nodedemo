const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()}: ${req.method} ${req.url}`);
    next();
});

app.use((req, res, next) => {
    res.setHeader('X-Custom-Header', 'Value');
    next();
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`user ID: ${userId}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});