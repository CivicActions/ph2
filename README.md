earl-report-generator
=====================

Generate earl accessibility reports for urls

# Usage
<!-- usage -->
```sh-session
$ git clone git@github.com:CivicActions/ph2.git
$ cd ph2
$ npm install
$ ./bin/dev ph2 -f sampleconfig.json -o /path/to/my/reports

Scanning site https://civicactions.com
Report written to /path/to/my/reports/civicactions_com_1648470648139_earlReport.json
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`./bin/dev -f sampleconfg.json`](#scan-from-config)
* [`./bin/dev URL`](#scan-from-url)

## Scan from config

Load a json file containing URLs to scan.

See `sampleconfig.json` for an example.

```sh-session
$ ./bin/dev ph2 -f sampleconfig.json

Scanning site https://civicactions.com
Report written to /home/repos/ph2/results/civicactions_com_1648470648139_earlReport.json

USAGE
  $ ./bin/dev ph2 [URL]

```
## Scan from URL

Scan a single URL

```sh-session
$ ./bin/dev ph2 https://civicactions.com

Scanning site https://civicactions.com
Report written to /home/repos/ph2/results/civicactions_com_1648470648139_earlReport.json

USAGE
  $ ./bin/dev ph2 [URL]

ARGUMENTS
  URL - URL to scan

FLAGS
  -o Output directory for report

DESCRIPTION
  Scan a single URL
```
<!-- commandsstop -->
