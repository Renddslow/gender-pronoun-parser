# Gender Pronoun Parser

A simple parser for gender-pronoun strings. Given an input of "subjective/objective/possessive" the parse returns a JS object:

```
{
    subjective,
    objective,
    possessive,
}
```

The library also comes with "he/him/his" and "she/her/hers" built in, accessed by passing `he` and `she` respectively in as inputs.

## Usage

```
import pronounParser from 'gender-pronoun-parser';

const pronouns = pronounParser('they/them/their')
```