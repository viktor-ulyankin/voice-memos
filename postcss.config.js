import postcssImport from "postcss-import";
import postcssCustomMedia from "postcss-custom-media";
import functions from "postcss-functions";

const MIN_SPACE_PX = 4;

export default {
  plugins: [
    postcssImport(),
    postcssCustomMedia(),
    functions({
      functions: {
        space: (multiplier) => {
          const num = parseFloat(multiplier);
          if (isNaN(num)) return "0px";
          return `${num * MIN_SPACE_PX}px`;
        },
      },
    }),
  ],
};
