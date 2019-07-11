import createDefaultConfig  from '@open-wc/building-rollup/modern-config';
// import babel from 'rollup-plugin-babel';
import postcss from './plugins/postcss';

const production = !process.env.ROLLUP_WATCH;
const config = createDefaultConfig({ input: './index.html' });

export default {
  ...config,
  plugins: [
    // babel(),
    postcss({ production }),
    ...config.plugins,
  ],
  treeshake: production,
  output: {
    ...config.output,
    preferConst: true,
  },
};
