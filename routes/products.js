module.exports = app => {
  const productController = app.controllers.productController;

app.route("/products")
  .get(productController.getAll)
  .post(productController.post);

app.route("/products:id")
  .get(productController.get)
  .put(productController.put)
  .delete(productController.delete);
};  