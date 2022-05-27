module.exports = {
  plugins: [
    'commitlint-plugin-jira-rules',
    {
      rules: {
        'english-only': ({ raw }) => {
          const m = raw.match(/[^a-z\d\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+/gi);
          const nonEnglish = m?.join(', ');
          return [
            !m,
            `Your commit message should contain only english symbols.\nChange to english: ${nonEnglish}\nPB: https://www.youtube.com/watch?v=HbvYeLxMKN8`,
          ];
        },
      },
    },
  ],
  extends: ['jira'],
  rules: {
    'english-only': [2, 'always'],
  },
};
