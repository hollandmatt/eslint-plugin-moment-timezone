const _ = require('lodash')

const ERROR_MSG = 'Do not use moment.utc, use timezones instead.'

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'disallow use of moment.utc()',
      category: 'Possible Errors',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
  },
  create: function(context) {
    return {
      Program: function(node) {

        console.log(_.find(node.tokens, function(token) {
          console.log(token.value)
          return token.value === 'moment'
        }))

        if (_.find(node.tokens, function(token) {
          return token.value === 'moment'
        }) && _.find(node.tokens, function(token) {
          return token.value === 'utc'
        })) {
          console.log('yes')
          context.report({
            node: node,
            message: ERROR_MSG,
          })
        }
      },
    }
  },
}
