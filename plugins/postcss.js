import { parse, transformFromAstSync } from '@babel/core';
import traverse from "@babel/traverse";
import postcss from 'postcss';
import postcssrc from 'postcss-load-config';

import deasync from './utils/deasync';

export default (ctx) => ({
  name: 'rollup-plugin-postcss',

  transform(source, id) {
    // const ast = this.parse(code);

    // walk(ast, {
    //   enter(node) {
    //     if (node.type === 'TaggedTemplateExpression' && node.tag.name === 'css') {
    //       walk(node.quasi.quasis, {
    //         enter(node) {
    //           if (node.type === 'TemplateElement') {
    //             const { raw } = node.value;
    //             const { plugins, options } = deasync(postcssrc(ctx));
    //             const { css } = deasync(
    //               postcss(plugins).process(raw, { ...options, from: undefined }),
    //             );

    //             node.value.raw = css;
    //           }
    //         },
    //       });
    //     }
    //   },
    // });

    const ast = parse(source);

    traverse(ast, {
      TaggedTemplateExpression({ node }) {
        const {
          tag,
          quasi: { quasis, expressions },
        } = node;

        if (tag.name === 'css') {
          console.log(quasis);
          console.log(expressions);
        }
      }
    });

    const { code } = transformFromAstSync(ast, source);

    return {
      code: '',
      map: { mappings: '' },
    };
  },
});
