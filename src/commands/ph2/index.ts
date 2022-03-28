import { Command, Flags } from '@oclif/core'
import { readFileSync } from 'node:fs'
import scanSites from '../../lib/scanSites'
import { getOutputPath } from '../../lib/utils'

export default class PH2 extends Command {
  static description = 'PH2'

  static examples = [
    `$ ph2 --sitename https://civicactions.com
  [TODO] Output goes here      
`,
  ]

  static flags = {
    file: Flags.string({ char: 'f' }),
    out: Flags.string({ char: 'o' }),
  }

  static args = [
    {
      name: 'sitename',
      description: 'Name of website to scan',
      required: false,
    },
  ]

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PH2)
    const out = flags.out ? getOutputPath(flags.out) : process.cwd()

    if (args.sitename) {
      this.log(`scanning ${args.sitename} (./src/commands/ph2/index.ts)`)
      await scanSites([args.sitename], out)
      this.exit(0)
    }

    if (flags.file) {
      try {
        const buf = readFileSync(flags.file)
        const contents = JSON.parse(buf.toString())
        await scanSites(contents.sites, out)
      } catch (error: any) {
        console.log(`Error parsing file ${flags.file}`, error)
        this.exit(1)
      }

      this.exit(0)
    }
  }
}
