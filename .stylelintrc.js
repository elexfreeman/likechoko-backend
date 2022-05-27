
module.exports = {
  "extends": ["stylelint-config-standard", "stylelint-config-prettier"],
  "plugins": ["stylelint-scss", "stylelint-declaration-strict-value"],
  "rules": {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "color-hex-length": "long",
    "comment-empty-line-before": "never",
    "scale-unlimited/declaration-strict-value": [
      ["/color$/", "font-size", "font-weight", "font-family"],
      {
        "ignoreValues": [
          "currentColor",
          "inherit",
          "transparent",
          "unset",
          "none"
        ],
        "expandShorthand": true
      }
    ],
  },
  "ignoreFiles": [
    "src/assets/fonts/golos-text.css",
  ]
};
