const express = require('express');
const app = express();


//Routes

app.post('api/users/register', (req, res)=> {
    res.send("User registered")
})


// server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`app is running on${PORT}`);
});

