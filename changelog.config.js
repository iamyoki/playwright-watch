module.exports = {
  list: [
    'test',
    'feat',
    'fix',
    'chore',
    'docs',
    'refactor',
    'style',
    'ci',
    'perf',
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    'type',
    'scope',
    'subject',
    // 'body',
    'breaking',
    'issues',
    // 'lerna',
  ],
  types: {
    chore: {
      description: 'Build process or auxiliary tool changes',
      emoji: '🔫',
      value: 'chore',
    },
    ci: {
      description: 'CI related changes',
      emoji: '🗳️',
      value: 'ci',
    },
    docs: {
      description: 'Documentation only changes',
      emoji: '🌠',
      value: 'docs',
    },
    feat: {
      description: 'A new feature',
      emoji: '🚀',
      value: 'feat',
    },
    fix: {
      description: 'A bug fix',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: 'Create a release commit',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description: 'Markup, white-space, formatting, missing semi-colons...',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: 'Add, update, or pass tests',
      emoji: '✅',
      value: 'test',
    },
  },
}
