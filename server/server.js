const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//permite que o react router defina as rotas
//assim sempre dando o  index.html da public/
app.get('*', (req,res)=>{
    res.sendFile(path.join(publicPath, 'index.html'));
})

app.listen(port, ()=>{
    console.log(`Server up on port: ${port}`);
});