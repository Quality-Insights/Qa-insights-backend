import app from "./app";

require('dotenv').config();

const port = process.env.PORT ?? 80;

app.listen(port, () => {
  console.log(`Listening to the PORT: ${port}`);
})
