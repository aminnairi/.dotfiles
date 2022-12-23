"use strict";

module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true
  },
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    }
  },
  overrides: [
    {
      files: [
        "*.ts",
        "*.tsx"
      ],
      rules: {
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": "error",
        "dot-notation": "off",
        "@typescript-eslint/dot-notation": [
          "error",
          {
            allowPrivateClassPropertyAccess: false,
            allowProtectedClassPropertyAccess: false,
            allowIndexSignaturePropertyAccess: false
          }
        ],
        "init-declarations": "off",
        "@typescript-eslint/init-declarations": "error",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "error",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "error",
        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": "error",
        "no-implied-eval": "off",
        "@typescript-eslint/no-implied-eval": "error",
        "no-invalid-this": "off",
        "@typescript-eslint/no-invalid-this": "error",
        "no-loop-func": "off",
        "@typescript-eslint/no-loop-func": "error",
        "no-loss-of-precision": "off",
        "@typescript-eslint/no-loss-of-precision": "error",
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": [
          "error",
          {
            ignoreDeclarationMerge: false
          }
        ],
        "no-throw-literal": "off",
        "@typescript-eslint/no-throw-literal": "error",
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "error",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        "require-await": "off",
        "@typescript-eslint/require-await": "error",
        "no-return-await": "off",
        "@typescript-eslint/return-await": "error"
      }
    }
  ],
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
    "accessor-pairs": [
      "error",
      {
        setWithoutGet: true,
        getWithoutSet: true,
        enforceForClassMembers: true
      }
    ],
    "arrow-body-style": [
      "error",
      "as-needed"
    ],
    "block-scoped-var": "error",
    "class-methods-use-this": [
      "error",
      {
        enforceForClassFields: true
      }
    ],
    "consistent-return": [
      "error",
      {
        treatUndefinedAsUnspecified: true
      }
    ],
    "curly": [
      "error",
      "all"
    ],
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "error",
    "dot-notation": [
      "error",
      {
        allowKeywords: true
      }
    ],
    "eqeqeq": [
      "error",
      "always"
    ],
    "func-style": [
      "error",
      "expression",
      {
        allowArrowFunctions: true
      }
    ],
    "logical-assignment-operators": [
      "error",
      "always"
    ],
    "init-declarations": [
      "error",
      "always"
    ],
    "guard-for-in": "error",
    "no-array-constructor": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-delete-var": "error",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-empty": "error",
    "no-empty-function": "error",
    "no-empty-static-block": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": [
      "error",
      {
        enforceForLogicalOperands: true
      }
    ],
    "no-extra-semi": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-negated-condition": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-return-assign": [
      "error",
      "always"
    ],
    "no-return-await": "error",
    "no-script-url": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-throw-literal": "error",
    "no-undefined": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-with": "error",
    "object-shorthand": [
      "error",
      "always"
    ],
    "one-var": [
      "error",
      "never"
    ],
    "one-var-declaration-per-line": [
      "error",
      "always"
    ],

    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: false
      }
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false
      }
    ],
    "prefer-destructuring": [
      "error",
      {
        object: true,
        array: false
      }
    ],
    "prefer-exponentiation-operator": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-has-own": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": [
      "error",
      {
        allowEmptyReject: false
      }
    ],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": [
      "error",
      "as-needed",
    ],
    "require-await": "error",
    "require-unicode-regexp": "error",
    "require-yield": "error",
    "strict": [
      "error",
      "global"
    ],
    "symbol-description": "error",
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
    "react/void-dom-elements-no-children": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        fixToUnknown: true,
        ignoreRestArgs: false
      }
    ],
    "@typescript-eslint/no-extraneous-class": [
      "error",
      {
        allowConstructorOnly: false,
        allowEmpty: false,
        allowStaticOnly: false,
        allowWithDecorator: false
      }
    ],
    "@typescript-eslint/no-floating-promises": [
      "error",
      {
        ignoreVoid: false,
        ignoreIIFE: false
      }
    ],
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        ignoreParameters: false,
        ignoreProperties: false
      }
    ],
    "@typescript-eslint/no-invalid-void-type": [
      "error",
      {
        allowInGenericTypeArguments: false,
        allowAsThisParameter: false
      }
    ],
    "@typescript-eslint/no-meaningless-void-operator": [
      "error",
      {
        checkNever: true
      }
    ],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksConditionals: true,
        checksVoidReturn: true,
        checksSpreads: true
      }
    ],
    "@typescript-eslint/no-namespace": [
      "error",
      {
        allowDeclarations: false,
        allowDefinitionFiles: true
      }
    ],
    "@typescript-eslint/no-redundant-type-constituents": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unsafe-argument": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-declaration-merging": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/prefer-readonly": [
      "error",
      {
        onlyInlineLambdas: false
      }
    ],
    "@typescript-eslint/prefer-readonly-parameter-types": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-return-this-type": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/restrict-plus-operands": [
      "error",
      {
        checkCompoundAssignments: true,
        allowAny: false
      }
    ],
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowNumber: false,
        allowBoolean: false,
        allowAny: false,
        allowNullish: false,
        allowRegExp: false
      }
    ],
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/unified-signatures": "error"
  }
}
