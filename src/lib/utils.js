export const getOutputPath = (pathname) => {
  // TODO validate pathname string
  const cwd = process.cwd()
  let isRelative = false

  if (pathname.indexOf('/') !== 0) {
    isRelative = true
  }

  return isRelative ? `${cwd}/${pathname}` : pathname
}
