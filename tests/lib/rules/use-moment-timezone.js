const rule = require('../../../lib/rules/use-moment-timezone')
const RuleTester = require('eslint').RuleTester

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
})

const ERROR_MSG = 'Do not import plain moment, use moment-timezone instead.'

const ruleTester = new RuleTester()

ruleTester.run('use-moment-timezone', rule, {
  valid: [
    {
      code: "import moment from 'moment-timezone'",
    },
    {
      code: "const moment = require('moment-timezone')",
    },
    {
      code: "let moment = require('moment-timezone')",
    },
    {
      code: "var moment = require('moment-timezone')",
    },
  ],
  invalid: [
    {
      code: "import moment from 'moment'",
      errors: [
        {
          message: ERROR_MSG,
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "const moment = require('moment')",
      errors: [
        {
          message: ERROR_MSG,
          type: 'VariableDeclaration',
        },
      ],
    },
    {
      code: "let moment = require('moment')",
      errors: [
        {
          message: ERROR_MSG,
          type: 'VariableDeclaration',
        },
      ],
    },
    {
      code: "var moment = require('moment')",
      errors: [
        {
          message: ERROR_MSG,
          type: 'VariableDeclaration',
        },
      ],
    },
  ],
})
