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
  ],
})
