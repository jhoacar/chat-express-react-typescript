import { exec } from 'child_process'
import { existsSync } from 'fs'
import colors from 'colors'
import { join } from 'path'

const roots = ['client', 'server']

function installTestDependecies(folder) {
    if (existsSync(join(folder, 'node_modules'))) {
        return Promise.resolve({
            stdout: `Packages installed in ${colors.green(folder)}`,
        })
    }
    console.log(
        colors.yellow('Installing dependencies in: ') + colors.green(folder)
    )
    return new Promise((resolve, reject) => {
        exec(`cd ${folder} && npm i`, (error, stdout, stderr) => {
            if (error) {
                reject(error)
            } else {
                resolve({ stdout, stderr })
            }
        })
    })
}

for (const root of roots) {
    const { stdout, stderr } = await installTestDependecies(root)
    console.log(colors.gray(stdout || ''))
    console.log(colors.red(stderr || ''))
}

export default {
    roots,
}
