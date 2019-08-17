if (process.env.NODE_ENV === "produuction") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
