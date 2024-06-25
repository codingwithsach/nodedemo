const express = require("express")
const app = express()

app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Node express!')
// });

app.post('/api/data', (req, res) => {
    const { name, age } = req.body;
    res.json({ message: `Received data: ${name}, ${age}`});
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});