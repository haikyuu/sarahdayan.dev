const selectorParser = require("postcss-selector-parser");
const hexToRgb = require("hex-to-rgb");

const breakpoints = require("./tailwind/breakpoints");
const spacing = require("./tailwind/spacing");
const fontSize = require("./tailwind/font-size");
const colors = require("./tailwind/colors");

const screens = Object.assign(
  {},
  ...Object.keys(breakpoints).map(breakpoint => ({
    [breakpoint]: `${breakpoints[breakpoint]}px`
  }))
);

module.exports = {
  theme: {
    screens,
    spacing,
    minHeight: spacing,
    maxWidth: spacing,
    fontSize,
    letterSpacing: {
      tightest: "-3px",
      tighter: "-2px",
      tight: "-1px",
      normal: "0",
      wide: "1px",
      wider: "2px",
      widest: "3px"
    },
    extend: {
      colors,
      opacity: {
        important: "1 !important"
      }
    },
    fontFamily: {
      sans: [
        "'Gothic A1'",
        "-apple-system",
        "BlinkMacSystemFont",
        "Helvetica Neue",
        "Arial",
        "sans-serif"
      ]
    }
  },
  variants: {
    opacity: ["group-hover", "hover"],
    backgroundColor: ["group-hover"],
    width: ["responsive", "hover", "focus", "group-hover"]
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
        ".shift-y-16": {
          transform: `translateY(${spacing["16"]})`
        },
        ".gradient-y-transparent-night": {
          background: `linear-gradient(to bottom, rgba(${hexToRgb(
            colors.night
          ).join(", ")}, 0), ${colors.night})`
        },
        ".gradient-y-night-transparent": {
          background: `linear-gradient(to top, rgba(${hexToRgb(
            colors.night
          ).join(", ")}, 0), ${colors.night})`
        }
      };

      addUtilities(newUtilities, [
        "responsive",
        "hover",
        "group-hover",
        "group-2-hover"
      ]);
    },
    function({ addVariant, e }) {
      addVariant("group-2-hover", ({ modifySelectors, separator }) => {
        return modifySelectors(({ selector }) => {
          return selectorParser(selectors => {
            selectors.walkClasses(sel => {
              sel.value = `group-2-hover${separator}${sel.value}`;
              sel.parent.insertBefore(
                sel,
                selectorParser().astSync(".group-2:hover ")
              );
            });
          }).processSync(selector);
        });
      });
    }
  ]
};
