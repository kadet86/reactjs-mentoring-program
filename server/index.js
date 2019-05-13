const app = require('./app');

const port = process.env.PORT || 5432;

app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
});
