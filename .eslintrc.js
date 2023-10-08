module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    "extends": ["standard-with-typescript",
        "plugin:@typescript-eslint/recommended-type-checked"],
    "overrides": [
        {
            "env": {
                "node": true,
                "jest": true,
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ]
        }
    ],
    "parserOptions": {
        "project": true,
        "tsconfigRootDir": __dirname,
        "sourceType": "module"
    },
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-misused-promises": "off",
    }
}
