const withExportImages = require("next-export-optimize-images");

module.exports = withExportImages({
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/About": { page: "/About" },
      "/FirstAidApp": { page: "/FirstAidApp" },
      "/FoodWasteApp": { page: "/FoodWasteApp" },
      "/GlutenFreeApp": { page: "/GlutenFreeApp" },
    };
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
});
