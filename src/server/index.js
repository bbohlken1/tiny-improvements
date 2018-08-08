require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const salesForce = require("./config/salesforce");


const PORT = process.env.PORT || 8000;
const app = express();
const users =
    [
        //     {
        //         userId: 0,
        //         name: "Select One",
        //         position: ""
        //     },
        //     {
        //         userId: 45089,
        //         name: "Owen",
        //         position: "Captian of the Breakroom"
        //     },
        //     {
        //         userId: 223,
        //         name: "Brooke",
        //         position: "Winner of All Dance-Offs"
        //     },
        //     {
        //         userId: 6582,
        //         name: "Gobi",
        //         position: "King of Mid-Day Naps"
        //     }
    ];

const awards = [
    // {
    //     id: 1,
    //     title: "Best Boss Award!",
    //     comment: "Thanks for always looking out for us.",
    //     sender: "Fabian",
    //     receiver: "Leon"
    // },
    // {
    //     id: 2,
    //     title: "Longest Commute Award!",
    //     comment: "I can't believe Laura makes it to work as often as she does.",
    //     sender: "Archit",
    //     receiver: "Laura"
    // },
    // {
    //     id: 3,
    //     title: "Most likely to nap at work!",
    //     comment: "Maybe you need more coffee.",
    //     sender: "Gobi",
    //     receiver: "Owen"
    // }

];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/api/kudosuser", (req, res) => {
    salesForce.query(`SELECT id, Name, (SELECT Id, Name FROM Kudos1__r) FROM Tiny_Improvements_User__c WHERE Name='CJ'`).then((data) => {
        // console.log(data);
        // console.log(data.records.map(recod => record.fields));
        res.json(data.records.map(record => record._fields));
    });
})

// app.get("/api/kudos", (req, res) => res.json(awards));
app.get("/api/kudos", (req, res) => {
    salesForce.query(`SELECT id, Name, Comment__c, Receiver__r.name, Sender__r.name FROM Kudos__c`).then((data) => {
        // console.log(data);
        // console.log(data.records.map(recod => record.fields));
        res.json(data.records.map(record => record._fields));
    });
})

app.get("/api/kudosfilter/:name", (req, res) => {
    salesForce.query(`SELECT id, Name, Comment__c, Receiver__r.name, Sender__r.name FROM Kudos__c WHERE Receiver__r.name='${req.params.name}'`).then((data) => {
        // console.log(data);
        // console.log(data.records.map(recod => record.fields));
        res.json(data.records.map(record => record._fields));
    });
})

app.get("/api/users", (req, res) => {
    salesForce.query(`SELECT id, Name FROM Tiny_Improvements_User__c`).then(data => {
        // console.log(data);
        // console.log(data.records.map(recod => record.fields));
        res.json(data.records.map(record => record._fields));
        // res.json(users));
    });
});

// app.post("/api/kudos", (req, res) => {
//     awards.push(req.body);
//     res.json(awards);
// });

app.post("/api/kudos", (req, res) => {
    salesForce.createKudos(req.body).then(() => {
        console.log(req.body);
        res.json({ success: true })
    });
})


app.listen(PORT, function () {
    console.log(`We are connected 🌎 on PORT ${PORT}`);
});
