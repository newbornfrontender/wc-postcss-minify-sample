import createDefaultConfig  from '@open-wc/building-rollup/modern-config';
import postcss from './plugins/postcss';

const production = !process.env.ROLLUP_WATCH;
const config = createDefaultConfig({ input: './index.html' });

export default {
  ...config,
  plugins: [
    ...config.plugins,
    postcss({ production }),
  ],
  treeshake: production,
  output: {
    ...config.output,
    preferConst: true,
  },
};
