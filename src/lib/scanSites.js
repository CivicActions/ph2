import { AxePuppeteer } from '@axe-core/puppeteer'
import { createEarlReport } from '@axe-core/reporter-earl'
import { writeFileSync } from 'fs'
import * as puppeteer from 'puppeteer'

const runAxeScan = async (siteURL, outputDir) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setBypassCSP(true)
  await page.goto(siteURL)

  const axe = new AxePuppeteer(page)
  const results = await axe.configure({ reporter: 'raw' }).analyze()
  const earlReport = JSON.stringify(createEarlReport(results, siteURL), null, 2)
  const timestamp = Date.now()
  const url = new URL(siteURL)
  const host = url.hostname.replace('.', '_')
  const reportPath = `${outputDir}/${host}_${timestamp}_earlReport.json`
  writeFileSync(`${outputDir}/${host}_${timestamp}_earlReport.json`, earlReport)
  console.log(`Report written to ${reportPath}`)
}

export default (sites, outputDir) => {
  return Promise.all(
    sites.map((site) => {
      console.log('Scanning site', site)
      return runAxeScan(site, outputDir)
    }),
  )
}
