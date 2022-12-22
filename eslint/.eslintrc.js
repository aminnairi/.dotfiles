"use strict";

module.exports = {
  env: {
    browser: true,
    node: true
  },
  plugins: [
    "react"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    }
  },
  rules: {
    indent: ["error", 2],
    "array-callback-return": [
      "error",
      {
        allowImplicit: false,
        checkForEach: true
      }
    ],
    "constructor-super": "error",
    "for-direction": "error",
    "getter-return": [
      "error",
      {
        allowImplicit: false
      }
    ],
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": [
      "error",
      "always"
    ],
    "no-const-assign": "error",
    "no-constant-binary-expression": "error",
    "no-constant-condition": [
      "error",
      {
        checkLoops: true
      }
    ],
    "no-constructor-return": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-ex-assign": "error",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": [
      "error",
      "both"
    ],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-new-native-nonconstructor": "error",
    "no-new-symbol": "error",
    "no-obj-calls": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-self-assign": [
      "error",
      {
        props: true
      }
    ],
    "no-self-compare": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-undef": [
      "error",
      {
        typeof: true
      }
    ],
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": [
      "error",
      {
        enforceForOrderingRelations: true
      }
    ],
    "no-unsafe-optional-chaining": [
      "error",
      {
        disallowArithmeticOperators: true
      }
    ],
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false
      }
    ],
    "no-use-before-define": "error",
    "no-useless-backreference": "error",
    "require-atomic-updates": [
      "error",
      {
        allowProperties: false
      }
    ],
    "use-isnan": [
      "error",
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true
      }
    ],
    "valid-typeof": [
      "error",
      {
        requireStringLiterals: true
      }
    ],
    "react/jsx-indent": ["error", 2],
    "react/button-has-type": [
      "error",
      {
        button: true,
        reset: true,
        submit: true
      }
    ],
    "react/destructuring-assignment": [
      "error",
      "always",
      {
        destructureInSignature: "always"
      }
    ],
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "react/hook-use-state": [
      "error"
    ],
    "react/iframe-missing-sandbox": "error",
    "react/jsx-boolean-value": [
      "error",
      "always"
    ],
    "react/jsx-child-element-spacing": "error",
    "react/jsx-closing-bracket-location": [
      "error",
      "after-props"
    ],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      "never"
    ],
    "react/jsx-curly-newline": [
      "error",
      "consistent"
    ],
    "react/jsx-curly-spacing": [
      "error",
      {
        when: "never"
      }
    ],
    "react/jsx-equals-spacing": [
      "error",
      "never"
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [
          ".jsx",
          ".tsx"
        ]
      }
    ],
    "react/jsx-first-prop-new-line": [
      "error",
      "multiline-multiprop"
    ],
    "react/jsx-fragments": [
      "error",
      "element"
    ],
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "on",
        eventHandlerPropPrefix: "handle",
        checkLocalVariables: true,
        checkInlineFunction: true
      }
    ],
    "react/jsx-indent-props": [
      "error",
      2
    ],
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true
      }
    ],
    "react/jsx-newline": [
      "error",
      {
        prevent: true,
        allowMultilines: false
      }
    ],
    "react/jsx-no-bind": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-leaked-render": "error",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-undef": [
      "error",
      {
        allowGlobals: true
      }
    ],
    "react/jsx-no-useless-fragment": [
      "error",
      {
        allowExpressions: false
      }
    ],
    "react/jsx-pascal-case": [
      "error",
      {
        allowAllCaps: false,
        allowNamespace: true,
        allowLeadingUnderscore: false
      }
    ],
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-props-no-spreading": "error",
    "react/jsx-space-before-closing": [
      "error",
      "always"
    ],
    "react/jsx-tag-spacing": [
      "error",
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
        beforeClosing: "never"
      }
    ],
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": [
      "error"
    ],
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "error",
    "react/no-arrow-function-lifecycle": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-find-dom-node": "error",
    "react/no-invalid-html-attribute": "error",
    "react/no-namespace": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "error",
    "react/no-unstable-nested-components": "error",
    "react/prefer-exact-props": "error",
    "react/prefer-read-only-props": "error",
    "react/prefer-stateless-function": "error",
    "react/self-closing-comp": "error",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error"
  }
}
