import bodyParser from "body-parser";

module.exports = app => {
  app.set('port', 3000);
  app.set('json spaces', 4);
  app.use((req, res, next) => {
    if(req.body && req.body.id) {
      delete req.body.id;
    }
    next();
  });
};