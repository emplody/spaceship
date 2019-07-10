const path = require("path");
const glob = require("glob");

const entryArray = glob.sync("./utils/**/index.js");
const entryObject = entryArray.reduce((acc, item) => {
  const name = item.replace("/index.js", "");
  acc[name] = item;
  return acc;
}, {});

module.exports = {
  entry: entryObject,
  output: {
    path: path.resolve(__dirname, "."),
    filename: "[name]/dist/main.js"
  }
};
