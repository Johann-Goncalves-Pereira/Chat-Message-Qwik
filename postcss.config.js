module.exports = {
  plugins: {
    autoprefixer: {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    "postcss-preset-env": { stage: 0, features: { "nesting-rules": false } },
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
