const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const INDEX_HTML_PATH = `${__dirname}/index.html`;

const db = {
    path: `${__dirname}/db.json`,
    check() {
        if (!fs.existsSync(this.path)) {
            fs.writeFileSync(this.path, JSON.stringify({ users: [] }));
        }
    },
    read() {
        return JSON.parse(fs.readFileSync(this.path));
    },
    write({ users }) {
        fs.writeFileSync(this.path, JSON.stringify({ users: users }));
    },
};

db.check();

app.use("/", express.static("."));

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(INDEX_HTML_PATH);
});

app.get("/dashboard/", (req, res) => {
    res.send(INDEX_HTML_PATH);
});

app.get("/users", (req, res) => {
    const data = db.read();
    return res.json(data);
});

app.post("/insert/", (req, res) => {
    const user = req.body;
    const data = db.read();

    console.log(user);

    data.users.push(user);

    db.write(data);

    res.json({
        ok: true,
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
