import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  modulePathIgnorePatterns: ['.next', 'node_modules'],
}
export default config
