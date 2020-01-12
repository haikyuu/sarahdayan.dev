const woodsmoke = "#101111";
const shark = "#17181a";
const oslo = "#939496";
const twilight = "#feffff";

module.exports = {
  theme: {
    extend: {
      colors: {
        woodsmoke,
        shark,
        oslo,
        twilight
      },
      opacity: {
        important: "1 !important"
      }
    }
  },
  variants: {
    opacity: ["group-hover", "hover"]
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".transition": {
          transition: "all 0.2s ease-in-out"
        },
        ".scale-3\\/2x": {
          transform: "scale(1.5)"
        },
        ".scale-6\\/5x": {
          transform: "scale(1.2)"
        },
        ".scale-11\\/10x": {
          transform: "scale(1.1)"
        },
        ".scale-2x": {
          transform: "scale(2)"
        },
        ".gradient-y-transparent-woodsmoke": {
          background: `linear-gradient(to bottom, transparent, ${woodsmoke})`
        },
        ".gradient-y-woodsmoke-transparent": {
          background: `linear-gradient(to top, transparent, ${woodsmoke})`
        }
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }
  ]
};
