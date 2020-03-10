Just testing the PR builder

# eslint-plugin-moment-timezone

Enforce usage of moment-timezone instead of plain moment.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-moment-timezone`:

```
$ npm install eslint-plugin-moment-timezone --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-moment-timezone` globally.

## Usage

Add `moment-timezone` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "moment-timezone"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "moment-timezone/use-moment-timezone": 2
    }
}
```

## Supported Rules

* `use-moment-timezone`: Ensure that `moment-timezone` is imported instead of plain `moment`.
