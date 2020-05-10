const express = require("express");
const config = require("./config");
const fetch = require("./fetch");
const app = express();
const AfricasTalking = require("africastalking")(config.AT);

let deepLink = 1;
let mark = 0;
app.post(
  "/",
  new AfricasTalking.USSD(async (params, next) => {
    let endSession = false;
    let message = "";
    let val = params.text;
    let length = val.split("*").length;
    let txt = val.split("*");
    let lessMark = mark - 1;

    if (val === "" || (length === mark && txt[lessMark] === "0")) {
      deepLink = 1;
      mark++;
      message = `WELCOME TO PADDI SEARCH
      Searching the internet made easy and available for every one \n
      Sponsored:
      Available ad space \n\n`;
      message += `1: Quick search \n`;
      message += "2: Contact us \n\n";
      endSession = false;
    } else if (
      val === "1" ||
      (length === mark && txt[lessMark] === "1") ||
      txt[lessMark] !== "2"
    ) {
      if (deepLink === 1) {
        deepLink = 2;
        mark++;
        message = `Search: Type sommething... \n
        0 to main menu \n\n`;
        endSession = false;
      } else if (deepLink === 2) {
        deepLink = 1;
        mark++;
        let toSearch = txt[lessMark];
        let result;
        await fetch.content(toSearch).then((v) => {
          result =
            v.substr(0, 256) +
            `... \n 
          Read more @:https://en.wikipedia.org/wiki/${toSearch.replace(
            /\s/g,
            "_"
          )} \n
          1 to previous menu
          0 to main menu \n\n`;
          message = `${result} \n\n`;
          endSession = false;
        });
      }
    } else if (val === "2" || (length === mark && txt[lessMark] === "2")) {
      mark++;
      message += `Visit our Facebook page @: promo-123456
      For suggestion, complaints and sponsorships, send us a mail @: nomail@nomail.com \n
      0 to main menu
      \n\n`;
      endSession = false;
    } else {
      message = "Invalid option \n";
      endSession = true;
    }

    next({
      response: message,
      endSession: endSession,
    });
  })
);

app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.listen(config.PORT, () => {});
