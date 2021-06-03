// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const siteName = "Ramiro Alvarez";

module.exports = {
  siteName,
  titleTemplate: siteName,
  plugins: [
    {
      use: "gridsome-plugin-typescript"
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js"
      }
    },
    {
      use: "gridsome-plugin-svg",
      options: {
        goesBothWays: true
      }
    }
  ]
};
