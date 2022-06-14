import app from "./app";

const port = process.env.PORT || 3000;
const url = `http://localhost:${port}`;

app.listen(3000, () => {
    console.log(`🚀 API Server ready at ${url}`);
});