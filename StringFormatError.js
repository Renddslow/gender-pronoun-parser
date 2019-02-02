module.exports = class StringFormatError extends Error {
  constructor(input) {
    const message = `Expected an input string in the format of "subjective/objective/possessive" but "${input}" was provided`;
    super(message);
  }
};