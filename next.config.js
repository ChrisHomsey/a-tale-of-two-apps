const urls = [
  "/Home",
  "/about-us",
  "/help-me",
];

function toPascalCase(text) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text) {
  return text.replace(/-/, "").toUpperCase();
}

module.exports = {
  async redirects() {
    return urls.map(function(url) {
      return {
        source: toPascalCase(url),
        destination: url,
        permanent: true,
      }
    }); 
  },
};
