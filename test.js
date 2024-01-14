// import ExcelTable from "mr-excel";
// import * as example from "./data.js";
let ExcelTable = require("mr-excel");
let example = require("./data");
ExcelTable.generateExcel({
  ...example.ex1.data,
  backend: true,
  generateType: "nodebuffer",
}).then((res) => {
  console.log(new Date().toUTCString());
  console.log(new Date().toLocaleString())
  console.log("passed");
});
