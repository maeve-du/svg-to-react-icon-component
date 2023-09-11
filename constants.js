export const rollupGiConfig = {
  input: './src/Generated-icon-components/gi/index.ts',
  output: [
    {
      file: './packages/gale-icons/gi/index.js',
      format: 'esm',
    },
    {
      file: './packages/gale-icons/gi/index.cjs.js',
      format: 'cjs',
    },
  ],
}

export const rollupHiConfig = {
  input: './src/Generated-icon-components/hi/index.ts',
  output: [
    {
      // dir: 'packages/gale-icons/dist/hi',
      file: './packages/gale-icons/hi/index.js',
      format: 'esm',
      // sourceMap: true,
      // preserveModules: true,
      // preserveModulesRoot: 'src/Generated-icon-components',
    },
    {
      file: 'packages/gale-icons/hi/index.cjs.js',
      format: 'cjs',
    },
  ],
}
