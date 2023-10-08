module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    "extends": ["standard-with-typescript",
        "plugin:@typescript-eslint/recommended-type-checked","plugin:jest/recommended"],
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
    //"plugins": ["jest"],
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    }
}
