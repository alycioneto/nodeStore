module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback([
        {title: "Camiseta"},
        {title: "Bermuda"}
      ]);
    }
  };
};