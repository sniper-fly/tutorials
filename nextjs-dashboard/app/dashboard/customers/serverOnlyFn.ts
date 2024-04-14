import 'server-only'

export async function serverOnlyFn() {
  console.log('server-only')
  return 'server-only';
}
