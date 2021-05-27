const Data = require("./data");

module.exports = {
  Query: {
    products: (_, { id }) => {
      const index = Number(id) - 1
      return Data[index];
    },
  },
};
