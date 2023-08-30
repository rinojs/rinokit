import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/rinokit.min.js',
        format: 'es',
    },
    plugins: [
        json(),
        terser({
            compress: {
                dead_code: false,
                keep_classnames: true,
                keep_fnames: true,
                keep_fargs: true,
                toplevel: false,
                unused: false
            },
            mangle: {
                keep_classnames: true,
                keep_fnames: true,
                toplevel: false
            },
            toplevel: false,
            keep_classnames: true,
            keep_fnames: true,
        }),
    ],
};