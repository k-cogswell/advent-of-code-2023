import { readFileSync } from 'fs'
import * as path from 'path'

function getInput(dirname: string) {
 return readFileSync(path.resolve(dirname, './input.txt')).toString();
}
// const input: string = readFileSync(path.resolve(__dirname, './input.txt')).toString();

export default getInput