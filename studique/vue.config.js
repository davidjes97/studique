module.exports = {
    publicPath:
      process.env.NODE_ENV === "production"
        ? "https://studique-462e8.web.app/"
        : "/"
  ,
  "transpileDependencies": [
    "vuetify"
  ]
};