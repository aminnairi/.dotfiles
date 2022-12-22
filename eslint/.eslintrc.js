"use strict";

module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true
  },
  rules: {
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
    "no-class-assign": "error",
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
    "no-dupe-class-members": "error",
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
    "no-unused-private-class-members": "error",
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
    ]
  }
}