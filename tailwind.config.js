module.exports = {
  content: [
    "./projects/ng-snippets-com/**/*.{html,ts,scss}",
    "./projects/ng-snippets-com/src/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
