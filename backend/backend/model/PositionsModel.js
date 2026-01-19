const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");

// No `new` — call model(...) directly. Use a capitalized model name by convention.
const PositionsModel = model("Position", PositionsSchema);

module.exports = { PositionsModel };
