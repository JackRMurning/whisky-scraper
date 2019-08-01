const axios = require("axios");
const cheerio = require("cheerio");

const url =
  "https://www.scotchwhiskyauctions.com/auctions/search/?q=longrow+red";

const parsedResults = [];

const getHtml = async url => {
  const htmlObject = await axios(url);
  const $ = cheerio.load(htmlObject.data);
  $(".prodbox").map((i, el) => {
    const prodTitle = $(el)
      .find(".prodtitle")
      .text();
    const prodPrice = $(el)
      .find(".price")
      .text();
    const data = {
      prodTitle: prodTitle,
      prodPrice: prodPrice
    };
    parsedResults.push(data);
  });
  console.log(parsedResults);
};

getHtml(url);

// axios(url)
//   .then(response => {
//     const html = response.data;
//     const $ = cheerio.load(html);
//     const prodTitle = $(".prodtitle").text();

//     console.log(prodTitle);
//   })
//   .catch(console.error);
