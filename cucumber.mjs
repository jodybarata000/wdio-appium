const common = {
  paths: ['features/**/*.feature'],
  import: ['steps/**/*.js', 'support/hooks.js'],
  parallel: 0,
  retry: 0,
};

export default {
  ...common,
  format: ['progress', 'allure-cucumberjs/reporter:allure-results/formatter.log'],
  formatOptions: { resultsDir: 'allure-results' },
};

export const check = { ...common, dryRun: true, format: ['summary'] };
