const ERROR_MSG = 'Do not import plain moment, use moment-timezone instead.'

module.exports = {
  meta: {
    type: 'suggestion',

    docs: {
      description: 'enforce moment-timezone usage',
      category: 'Possible Errors',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
  },
  create: function(context) {
    return {
      ImportDeclaration: function(node) {
        if (node.source.type === 'Literal' && node.source.value === 'moment') {
          context.report({
            node: node,
            message: ERROR_MSG,
            fix: function(fixer) {
              return fixer.replaceText('moment', 'moment-timezone')
            },
          })
        }
      },
    }
  },
}
