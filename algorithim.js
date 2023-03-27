const BankIdentificationNumbers = {
    "1000 Dollars": 129013,
  };
  
  class Algorithim {
    constructor() {
      this.cardNumber = null;
      this.brand = null;
    }
  
    __findBrand() {
      if (["34", "37"].includes(this.cardNumber.substring(0, 2))) {
        this.brand = "American Express";
      } else if (
        ["300", "301", "302", "303", "304", "305"].includes(
          this.cardNumber.substring(0, 3)
        )
      ) {
        this.brand = "Diners Club - Carte Blanche";
      } else if (["36"].includes(this.cardNumber.substring(0, 2))) {
        this.brand = "Diners Club - International";
      } else if (["54"].includes(this.cardNumber.substring(0, 2))) {
        this.brand = "Diners Club - USA & Canada";
      } else if (
        ["6011"].includes(this.cardNumber.substring(0, 4)) ||
        ["644", "645", "646", "647", "648", "649"].includes(
          this.cardNumber.substring(0, 3)
        ) ||
        ["65"].includes(this.cardNumber.substring(0, 2)) ||
        (parseInt(this.cardNumber.substring(0, 6)) >= 622126 &&
          parseInt(this.cardNumber.substring(0, 6)) <= 622925)
      ) {
        this.brand = "Discover";
      } else if (
        ["637", "638", "639"].includes(this.cardNumber.substring(0, 3))
      ) {
        this.brand = "InstaPayment";
      } else if (
        parseInt(this.cardNumber.substring(0, 4)) >= 3528 &&
        parseInt(this.cardNumber.substring(0, 4)) <= 3589
      ) {
        this.brand = "JCB";
      } else if (
        [
          "5018",
          "5020",
          "5038",
          "5893",
          "6304",
          "6759",
          "6761",
          "6762",
          "6763",
        ].includes(this.cardNumber.substring(0, 4))
      ) {
        this.brand = "Maestro";
      } else if (
        ["51", "52", "53", "54", "55"].includes(
          this.cardNumber.substring(0, 2)
        ) ||
        (parseInt(this.cardNumber.substring(0, 6)) >= 222100 &&
          parseInt(this.cardNumber.substring(0, 6)) <= 272099)
      ) {
        this.brand = "MasterCard";
      } else if (
        ["4026", "4508", "4844", "4913", "4917"].includes(
          this.cardNumber.substring(0, 4)
        ) ||
        this.cardNumber.substring(0, 6) === "417500"
      ) {
        this.brand = "VISA Electron";
      } else if (["4"].includes(this.cardNumber[0])) {
        this.brand = "VISA";
      } else {
        this.brand = "Unknown Brand";
      }
    }
    validate(number) {
      if (!number) return "Not a valid Credit Card Number";
      if (typeof number !== "string" && typeof number !== "number")
        return "Not a valid Credit Card Number";
      number = number.toString().replace(/\s/g, "");
      if (isNaN(number) || number.length < 13 || number.length > 19)
        return "Not a valid Credit Card Number";
      // Identify Brand
      this.cardNumber = number;
      this.__findBrand();
      // Luhn's Algorithm
      const lastDigit = parseInt(number[number.length - 1]);
      const base = [...number.slice(0, -1)].reverse().map(Number);
      const doubled = base.map((x, i) => (i % 2 !== 0 ? 2 * x : x));
      const summed = doubled
        .map((x) => (x > 9 ? x - 9 : x))
        .reduce((a, b) => a + b, 0);
      const checkDigit = (summed * 9) % 10;
      if (checkDigit === lastDigit) {
        console.log("\x1b[32m", `[!] ${this.cardNumber} is a valid Store Card!`);
        const fs = require("fs");
        fs.writeFileSync("cards.txt", JSON.stringify(this.cardNumber));
        return `[!] ${this.cardNumber} is a valid Store Card!`;
      } else {
        console.log(
          "\x1b[31m",
          `[!] ${this.cardNumber} is not a valid Store Card!`
        );
        return `[!] ${this.cardNumber} is not a valid Store Card!`;
     }
    }
}
 
module.exports = Algorithim;
  