module.exports = {
  content: [
    "./projects/ng-snippets-com/**/*.{html,ts}",
    "./projects/ng-snippets-com/src/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
