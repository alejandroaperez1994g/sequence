module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["standard-with-typescript","plugin:@typescript-eslint/recommended-type-checked"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ]
        }
    ],
    "parserOptions": {
        "project": true,
        "tsconfigRootDir": __dirname,
    },

    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-misused-promises": "off",
    }
}
