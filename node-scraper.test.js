const scrape = require("./node-scraper");

const unsortedArray = [
  {
    title: "Longrow 11 Year Old Red Cabernet Franc",
    price: 60,
    lotNumbder: "02463",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/321601_longrow-11-year-old-red-cabernet-franc/"
  },
  {
    title: "Longrow 11 Year Old Red Cabernet Franc",
    price: 55,
    lotNumbder: "00591",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/319589_longrow-11-year-old-red-cabernet-franc/"
  },
  {
    title: "Longrow 11 Year Old Red Cabernet Franc",
    price: 55,
    lotNumbder: "06421",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/325822_longrow-11-year-old-red-cabernet-franc/"
  },
  {
    title: "Longrow 11 Year Old Red Cabernet Franc",
    price: 70,
    lotNumbder: "03636",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/322793_longrow-11-year-old-red-cabernet-franc/"
  },
  {
    title: "Longrow 11 Year Old Red Pinot Noir",
    price: 50,
    lotNumbder: "05519",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/324761_longrow-11-year-old-red-pinot-noir/"
  },
  {
    title: "Longrow 11 Year Old Red Pinot Noir",
    price: 55,
    lotNumbder: "04319",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/323483_longrow-11-year-old-red-pinot-noir/"
  },
  {
    title: "Longrow 12 Year Old Red Pinot Noir",
    price: 65,
    lotNumbder: "00590",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/319588_longrow-12-year-old-red-pinot-noir/"
  },
  {
    title: "Longrow 13 Year Old Red Malbec Cask",
    price: 100,
    lotNumbder: "00589",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/319587_longrow-13-year-old-red-malbec-cask/"
  },
  {
    title: "Longrow 13 Year Old Red Malbec Cask",
    price: 100,
    lotNumbder: "06422",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/325823_longrow-13-year-old-red-malbec-cask/"
  },
  {
    title: "Longrow 2003 14 Year Old Sherry Cask Matured",
    price: 65,
    lotNumbder: "00592",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/319590_longrow-2003-14-year-old-sherry-cask-matured/"
  },
  {
    title: "Longrow 2003 14 Year Old Sherry Cask Matured",
    price: 65,
    lotNumbder: "04815",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/324028_longrow-2003-14-year-old-sherry-cask-matured/"
  }
];

const expectedPriceSort = [
  {
    title: "Longrow 11 Year Old Red Pinot Noir",
    price: 50,
    lotNumbder: "05519",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/324761_longrow-11-year-old-red-pinot-noir/"
  },
  {
    title: "Longrow 11 Year Old Red Pinot Noir",
    price: 55,
    lotNumbder: "04319",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/323483_longrow-11-year-old-red-pinot-noir/"
  },
  {
    title: "Longrow 11 Year Old Red Cabernet Franc",
    price: 55,
    lotNumbder: "06421",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/325822_longrow-11-year-old-red-cabernet-franc/"
  },
  {
    title: "Longrow 11 Year Old Red Cabernet Franc",
    price: 55,
    lotNumbder: "00591",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/319589_longrow-11-year-old-red-cabernet-franc/"
  },
  {
    title: "Longrow 11 Year Old Red Cabernet Franc",
    price: 60,
    lotNumbder: "02463",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/321601_longrow-11-year-old-red-cabernet-franc/"
  },
  {
    title: "Longrow 12 Year Old Red Pinot Noir",
    price: 65,
    lotNumbder: "00590",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/319588_longrow-12-year-old-red-pinot-noir/"
  },
  {
    title: "Longrow 2003 14 Year Old Sherry Cask Matured",
    price: 65,
    lotNumbder: "00592",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/319590_longrow-2003-14-year-old-sherry-cask-matured/"
  },
  {
    title: "Longrow 2003 14 Year Old Sherry Cask Matured",
    price: 65,
    lotNumbder: "04815",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/324028_longrow-2003-14-year-old-sherry-cask-matured/"
  },
  {
    title: "Longrow 11 Year Old Red Cabernet Franc",
    price: 70,
    lotNumbder: "03636",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/322793_longrow-11-year-old-red-cabernet-franc/"
  },
  {
    title: "Longrow 13 Year Old Red Malbec Cask",
    price: 100,
    lotNumbder: "00589",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/319587_longrow-13-year-old-red-malbec-cask/"
  },
  {
    title: "Longrow 13 Year Old Red Malbec Cask",
    price: 100,
    lotNumbder: "06422",
    url:
      "https://www.scotchwhiskyauctions.com/auctions/search/325823_longrow-13-year-old-red-malbec-cask/"
  }
];

describe("priceSort", () => {
  it("should sort the whisky array by price", () => {
    const response = scrape.priceSort(unsortedArray);
    expect(response).toEqual(expectedPriceSort);
  });

  it("should sort the whisky array by price", () => {
    const expected = [
      {
        title: "Longrow 11 Year Old Red Pinot Noir",
        price: 50,
        lotNumbder: "05519",
        url:
          "https://www.scotchwhiskyauctions.com/auctions/search/324761_longrow-11-year-old-red-pinot-noir/"
      },
      {
        title: "Longrow 11 Year Old Red Cabernet Franc",
        price: 55,
        lotNumbder: "06421",
        url:
          "https://www.scotchwhiskyauctions.com/auctions/search/325822_longrow-11-year-old-red-cabernet-franc/"
      },
      {
        title: "Longrow 12 Year Old Red Pinot Noir",
        price: 65,
        lotNumbder: "00590",
        url:
          "https://www.scotchwhiskyauctions.com/auctions/search/319588_longrow-12-year-old-red-pinot-noir/"
      },
      {
        title: "Longrow 2003 14 Year Old Sherry Cask Matured",
        price: 65,
        lotNumbder: "00592",
        url:
          "https://www.scotchwhiskyauctions.com/auctions/search/319590_longrow-2003-14-year-old-sherry-cask-matured/"
      },
      {
        title: "Longrow 13 Year Old Red Malbec Cask",
        price: 100,
        lotNumbder: "00589",
        url:
          "https://www.scotchwhiskyauctions.com/auctions/search/319587_longrow-13-year-old-red-malbec-cask/"
      }
    ];
    const response = scrape.uniqueWhiskies(expectedPriceSort);
    expect(response).toEqual(expected);
  });
});

describe("urlConstructor", () => {
  it("should construct a valid url from an array of search args", () => {
    const expected =
      "https://www.scotchwhiskyauctions.com/auctions/search/?page=1&q=longrow+red&area=&sort=az&order=asc&perpage=500";
    const searchArguments = ["longrow", "red"];
    const response = scrape.urlConstructor(searchArguments);
    expect(response).toEqual(expected);
  });

  it("should construct a valid url from an array of search args 1 arg", () => {
    const expected =
      "https://www.scotchwhiskyauctions.com/auctions/search/?page=1&q=longrow&area=&sort=az&order=asc&perpage=500";
    const searchArguments = ["longrow"];
    const response = scrape.urlConstructor(searchArguments);
    expect(response).toEqual(expected);
  });

  it("should throw an error if no search arguments are specified", () => {
    const searchArguments = [];
    expect(() => scrape.urlConstructor(searchArguments)).toThrow(
      Error("No search arguments specified")
    );
  });
});
