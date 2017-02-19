module.exports = app => {
  app.db.sequelize.sync().done(()=> {
    app.listen(app.get("port"), () => {
      console.log(`NodeStore API - porta ${app.get("port")}`);
    });
  });
}