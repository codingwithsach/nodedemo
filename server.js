const express = require("express");
const app = express();

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`user ID: ${userId}`);
});

app.use((req, res, next) => {
    res.status(404).send('404 not found');
});

app.use((err, res, req, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});