import globals from "globals";


// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
//   {languageOptions: { globals: globals.browser }},
// ];

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" },
    rules: {
      "no-unused-vars": "error", // Erreur pour les variables non utilisées
      "no-console": "error", // Erreur pour les utilisations de console.log
      "quotes": ["error", "single"], // Erreur pour les guillemets doubles
      "semi": ["error", "always"], // Erreur pour les points-virgules manquants
      "indent": ["error", 2] // Erreur pour une indentation incorrecte
    }
  },
  {
    languageOptions: { globals: globals.browser }
  }
];