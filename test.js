const test = require('tape');

const parse = require('./index');

test('When "he" is passed in, "he" pronouns are returned', (t) => {
  const expected = {
    subjective: 'he',
    objective: 'him',
    possessive: 'his',
    possessivePro: 'his',
    reflexive: 'himself',
  };

  const actual = parse('he');

  t.deepEqual(expected, actual);
  t.end();
});

test('When he pronoun string is passed in, "he" pronouns are returned', (t) => {
  const expected = {
    subjective: 'he',
    objective: 'him',
    possessive: 'his',
    possessivePro: 'his',
    reflexive: 'himself',
  };

  const actual = parse('he/him/his');

  t.deepEqual(expected, actual);
  t.end();
});

test('When "she" is passed in, "she" pronouns are returned', (t) => {
  const expected = {
    subjective: 'she',
    objective: 'her',
    possessive: 'her',
    possessivePro: 'hers',
    reflexive: 'herself',
  };

  const actual = parse('she');

  t.deepEqual(expected, actual);
  t.end();
});

test('When she pronoun string is passed in, "she" pronouns are returned', (t) => {
  const expected = {
    subjective: 'she',
    objective: 'her',
    possessive: 'her',
    possessivePro: 'hers',
    reflexive: 'herself',
  };

  const actual = parse('she/her/her');

  t.deepEqual(expected, actual);
  t.end();
});

test('When gender neutral pronoun string is passed in, expected pronouns are returned', (t) => {
  const expected = {
    subjective: 'they',
    objective: 'them',
    possessive: 'their',
    possessivePro: 'theirs',
    reflexive: 'themself',
  };

  const actual = parse('they/them/their');

  t.deepEqual(expected, actual);
  t.end();
});
