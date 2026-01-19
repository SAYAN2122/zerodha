const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

// No `new` — call model(...) directly. Use a capitalized model name by convention.
const OrdersModel = model("order", OrdersSchema);

module.exports = { OrdersModel };
