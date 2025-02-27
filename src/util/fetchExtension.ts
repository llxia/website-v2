export function fetchExtension (filename) {
  let extension = `.${filename.split('.').pop()}`
  // Workaround to prevent extension returning as .gz
  if (extension === '.gz') {
    extension = 'tar.gz'
  }
  return extension
}
