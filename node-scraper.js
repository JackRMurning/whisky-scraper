const axios = require("axios");
const cheerio = require("cheerio");

const url =
  "https://www.scotchwhiskyauctions.com/auctions/search/?q=longrow+red";

const priceFloat = priceStr => {
  const parsed = parseFloat(priceStr.slice(1));
  if (!parsed) {
    return priceStr.slice(1);
  }
  return parsed;
};

const constructProdUrl = prodUrl => {
  return `https://www.scotchwhiskyauctions.com/${prodUrl}`;
};

const priceSort = prodArray => {
  return prodArray.sort((a, b) => {
    return a.price - b.price;
  });
};

const uniqueWhiskies = prodArray => {
  const uniqueNames = [];
  prodArray.forEach(whisky => {
    if (!uniqueNames.includes(whisky.title)) {
      uniqueNames.push(whisky.title);
    }
  });
  const uniqueCheapest = uniqueNames.map(whiskyName =>
    prodArray.find(whisky => whisky.title === whiskyName)
  );
  return uniqueCheapest;
};

const getHtml = async url => {
  const htmlObject = await axios(url);
  return htmlObject.data;
};

const parseHtml = async html => {
  const parsedResults = [];
  const $ = await cheerio.load(html);
  $(".prodbox").map((i, el) => {
    const prodTitle = $(el)
      .find(".prodtitle")
      .text();
    const prodPrice = $(el)
      .find(".price")
      .text();
    const prodLotNumber = $(el)
      .find(".prodlot.priceline.curprice")
      .text();
    const prodUrl = $(el).attr("href");
    const data = {
      title: prodTitle,
      price: priceFloat(prodPrice),
      lotNumbder: prodLotNumber.slice(-5),
      url: constructProdUrl(prodUrl)
    };
    parsedResults.push(data);
  });
  const sortedResults = priceSort(parsedResults);
  const uniqueCheapest = uniqueWhiskies(sortedResults);
  return uniqueCheapest;
};

const scrape = async url => {
  const html = await getHtml(url);
  const results = await parseHtml(html);
  console.log(results);
  return results;
};

scrape(url);

module.exports.priceSort = priceSort;
module.exports.uniqueWhiskies = uniqueWhiskies;
