const StringFormatError = require('./StringFormatError');
const {
  he,
  she,
} = require('./binary');

module.exports = (str) => {
  const input = str.toLowerCase();

  if (input === 'he') return he;
  if (input === 'she') return she;

  const [
    subjective,
    objective,
    possessive,
  ] = input.split('/');

  if (!subjective || !objective || !possessive) {
    throw new StringFormatError(input);
  }

  return {
    subjective,
    objective,
    possessive,
    possessivePro: possessive[possessive.length - 1] !== 's' ?
      possessive + 's' :
      possessive,
    reflexive: objective + 'self',
  };
};