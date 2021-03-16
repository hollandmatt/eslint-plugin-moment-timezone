const rule = require('../../../lib/rules/moment-no-utc')
const RuleTester = require('eslint').RuleTester

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
})

const ERROR_MSG = 'Do not use moment.utc, use timezones instead.'

const ruleTester = new RuleTester()

ruleTester.run('moment-no-utc', rule, {
  valid: [
    {
      code: "moment(something).set('day', 1)",
    },
    {
      code: "moment()",
    },
    {
      code: "moment(something)",
    },
  ],
  invalid: [
    {
      code: "moment.utc(date)",
      errors: [
        {
          message: ERROR_MSG,
          type: 'Program',
        },
      ],
    },
    {
      code: "moment.utc()",
      errors: [
        {
          message: ERROR_MSG,
          type: 'Program',
        },
      ],
    },
    {
      code: "moment.utc",
      errors: [
        {
          message: ERROR_MSG,
          type: 'Program',
        },
      ],
    },
  ],
})
