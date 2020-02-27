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
          })
        }
      },
      VariableDeclaration: function(node) {
        if (node.declarations && node.declarations.length === 1) {
          const declaration = node.declarations[0]
          if (
            declaration.init.callee.name === 'require' &&
            declaration.init.arguments &&
            declaration.init.arguments.length === 1
          ) {
            const argument = declaration.init.arguments[0]
            if (argument.value === 'moment') {
              context.report({
                node: node,
                message: ERROR_MSG,
              })
            }
          }
        }
      },
    }
  },
}
