module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Require a scope on every commit message e.g. feat(schema): or fix(groq):
    'scope-empty': [2, 'never'],
    // Allowed scopes relevant to your project architecture
    'scope-enum': [
      2,
      'always',
      [
        'schema', // Schema definitions (objects, blocks, documents)
        'groq', // GROQ queries & fragments
        'desk', // Studio desk structure & singletons
        'studio', // Sanity studio config & plugins
        'client', // Sanity client & fetchers
        'types', // TypeScript definitions
        'docs', // README & handoff documentation
        'config', // Environment & project setup
        'deps', // Dependency updates
      ],
    ],
  },
}
