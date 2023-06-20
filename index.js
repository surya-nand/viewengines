const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./public"));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.send("Working");
});

const dummyData = {
  Surya: {
    BatchNum: 3,
    year: 2023,
    passout: 2022,
    hobbies: ["eat", "sleep", "netflix"],
  },
  Anand: {
    BatchNum: 5,
    year: 2020,
    passout: 2000,
    hobbies: ["read", "write", "sleep"],
  },
  Siddhu: {
    BatchNum: 10,
    year: 2023,
    passout: 2028,
    hobbies: ["Read", "Eat", "playing"],
  },
};

app.get("/user-details/:username", (req, res) => {
  let username = req.params.username;
  userDetails = dummyData[username];
  if (userDetails) {
    res.render("user-details", {
      firstname: username,
      BatchNum: userDetails.BatchNum,
      year: userDetails.year,
      passout: userDetails.passout,
      hobbies: userDetails.hobbies,
    });
  } else {
    res.send("User does not exist");
  }
});

app.listen(700, () => {
  console.log("Server is ruuning on james bond port");
});
