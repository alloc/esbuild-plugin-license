import { Options } from 'tsup'

export default <Options>{
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  external: ['esbuild']
}
