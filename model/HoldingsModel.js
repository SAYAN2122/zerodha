const { model } = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema");

// No `new` — call model(...) directly. Use a capitalized model name by convention.
const HoldingsModel = model("Holding", HoldingsSchema);

module.exports = { HoldingsModel };
