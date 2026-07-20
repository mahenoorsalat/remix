export function getApiNameFromFullName(fullName: string): string {
  return fullName.split('.').slice(-1)[0]
}

const isVerbose = process.env.DEBUG === 'verbose' || process.env.DEBUG === '2'

export function verbose(...args: unknown[]) {
  if (process.env.DEBUG && isVerbose) {
    console.debug('🔎', padStart('VERBOSE'), ...args)
  }
}

export function debug(...args: unknown[]) {
  if (process.env.DEBUG) {
    console.debug('🛠️', padStart('DEBUG'), ...args)
  }
}

export function info(...args: unknown[]) {
  console.log('ℹ️', padStart('INFO'), ...args)
}

export function warn(...args: unknown[]) {
  console.warn('⚠️', padStart('WARN'), ...args)
}

export function unimplemented(...args: unknown[]) {
  console.error('‼️', padStart('ERROR'), 'Unimplemented:', ...args)
}

export function invariant(condition: unknown, message?: string): asserts condition {
  if (!condition) {
    throw new Error(message ?? 'Invariant violation')
  }
}

function padStart(str: string, fill: string = ' '): string {
  return str.padStart(isVerbose ? 7 : 5, fill) + ':'
}
