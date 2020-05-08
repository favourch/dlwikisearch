const wiki = require("wikijs").default;

async function content(toSearch) {
  return await wiki()
    .page(toSearch)
    .then((page) => page.summary());
}

async function url(toSearch) {
  return await wiki()
    .page(toSearch)
    .then((page) => page.raw.fullurl);
}

module.exports.content = content;
module.exports.url = url;
