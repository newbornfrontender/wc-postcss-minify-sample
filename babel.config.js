module.exports = {
  plugins: [
    [
      '@babel/proposal-decorators',
      {
        decoratorsBeforeExport: true,
      },
    ],
    '@babel/proposal-class-properties',
    '@babel/proposal-private-methods',
  ],
};
