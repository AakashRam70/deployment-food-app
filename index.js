import express from "express";

const app = express();
const port = 7890;

app.listen(7890, () => {
    console.log(`Starting server on Port ${port}`)
})