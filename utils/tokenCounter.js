function countTokens(text) {
    return Math.ceil(text.split(/\s+/).length * 1.3);
}

module.exports = countTokens;