module.exports = {
  
    publicPath:
    process.env.NODE_ENV === "production"
    ? "https://davidjes97.github.io/studique/"
    : "/"
,
  
  
  "transpileDependencies": [
    "vuetify"
  ]
};