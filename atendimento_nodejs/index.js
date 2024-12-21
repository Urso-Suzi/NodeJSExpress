const express = require('express')
const router = require('./rotas/index.js')
const app = express();
const port = 3000;

router(app);

app.use(router)

app.listen(port, (error) => {
    if(error) {
        console.log("Deu Erro")
        return;
    }
    console.log("Subiu show")
});