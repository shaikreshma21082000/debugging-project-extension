const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const metascraper = require('metascraper')([
    require('metascraper-author')(),
    require('metascraper-date')(),
    require('metascraper-description')(),
    require('metascraper-image')(),
    require('metascraper-logo')(),
    require('metascraper-clearbit')(),
    require('metascraper-publisher')(),
    require('metascraper-title')(),
    require('metascraper-url')()
])

const metadata = {};
const app = express();
const got = require('got')

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post("/scrape", async(req, res, next) => {
    const { body: html, url } = await got(req.body["target"])
    const scraped_metadata = await metascraper({ html, url });
    metadata[url] = scraped_metadata;
    res.json(scraped_metadata);
});

app.get("/metadata", (req, res, next) => {
    res.json(Object.values(metadata));
});

app.delete("/metadata", (req, res, next) => {
    const {target} = req.body;
    console.log(req)
    console.log(req.body)
    console.log(metadata)
    if (metadata[target]) {
        delete metadata[target];
    }
    res.status(204).send();
});

app.listen(9090);