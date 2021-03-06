module.exports = {
    "env": {
        "browser": true,
        "commonjs": true, 
        "es2021": true
    },
    "extends": ["airbnb","prettier"],
    "plugins":"prettier",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "no-unused-vars":"error"
    }
};
