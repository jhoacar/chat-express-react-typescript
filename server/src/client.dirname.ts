import { resolve, join } from 'path'

/**
 * In case of __dirname doesn't exists:
 *
 *      import { fileURLToPath } from 'url';
 *      import { dirname } from 'path'
 *      const __dirname = dirname(fileURLToPath(import.meta.url)
 */

export default resolve(join(__dirname, '/../../client/dist'))
