module.exports = () => {
  return {
    postcssPlugin: "transform-px-to-vmin",
    Once: (root) => {
      root.walkRules((rule) => {
        rule.walkDecls(function (decl, i) {
          decl.value = decl.value
            .split(" ")
            .map((el) => el.replace(/(.+)px/, "calc($1vmin / 7.5)"))
            .join(" ");
        });
      });
    },
  };
};

module.exports.postcss = true;
