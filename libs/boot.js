module.exports = app => {
  app.listen(app.get("port"), () => 
  {
    console.log(`NodeStore API - porta ${app.get("port")}`)
  });
}