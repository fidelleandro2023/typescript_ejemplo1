import express from 'express';

const app = express();
const port = 9000;

app.get('/', (req, res) =>{
  res.send('El servidor funciona correctamente!!!');
});

app.listen(port, () => {
   console.log(`El servidor está escuchando el puerto ${port}`);
});
