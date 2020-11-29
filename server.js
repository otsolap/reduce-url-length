const config = require('./utils/config');
const express = require('express');
const app = express();
const path = require('path');
// need cors ajax-calls frontend-side.
const cors = require('cors');
const mongoose = require('mongoose');
const reducedUrlsRouter = require('./controllers/reducedUrlsRouter');
// I personally love mongoose debugger. Terminal shows all queries.
// Keeps me (junior web dev) comfortable about the data-inflow.
mongoose.set('debug', true);
mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('connected to MongoDB');
    })
    .catch((error) => {
        console.log('error connection to MongoDB:', error.message);
    });

app.use(cors());
// we need these both false due to our frontend side.
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ extended: false }));
// routers.
app.use('/reduceurls', reducedUrlsRouter)
// creates a static asset for heroku.
// this just gets it for us.
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}


app.listen(config.PORT, () => {
    console.log(`Live on channel ${config.PORT || 8080}`);
});