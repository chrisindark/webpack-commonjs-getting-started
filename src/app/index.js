const a = { a: "a" };

if (typeof window !== "undefined") {
  window.document.body.append("body loaded");
}

const test = function () {
  console.log("log test");
};

module.exports = a;
