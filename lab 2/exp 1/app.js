const {
    simpleInterest,
    compoundInterest
} = require("./math");

const express = require("express");
const port = 3000;
const app = express();

app.get("/calculateCompoundInterest", (req, res) => {
    const { init, interest, numberOfYear } = req.query;

    const result = compoundInterest(
        Number(init),
        Number(interest),
        Number(numberOfYear)
    );

    res.send(String(result));
});

app.get("/calculateSimpleInterest", (req, res) => {
    const { init, interest, numberOfYear } = req.query;

    const result = simpleInterest(
        Number(init),
        Number(interest),
        Number(numberOfYear)
    );

    res.send(String(result));
});

app.listen(port, () => {
    console.log(`Server is created and listening on port ${port}`);
});
