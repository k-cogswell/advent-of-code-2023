import { readFileSync } from 'fs'
import path from 'path'

const input = readFileSync(path.resolve(__dirname, './input.txt')).toString();
// const input = `
// 1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet`
/**
 * https://adventofcode.com/2023/day/1#part1
 * 
 * @param input data from challenge
 */
function partOne(input:string) {
	let sum: number = 0;

	input.split(/\r?\n/).forEach(line => {		
		const match: RegExpMatchArray|null = line.match(/(\d)/g)
		if (match) {
			sum += parseInt((match[0] + match[match.length - 1]));
		}
	})
	
	console.log('part one total', sum)
}

// partOne(input)

/**
 * https://adventofcode.com/2023/day/1#part2
 * 
 * @param input data from challenge
 */
function partTwo(input:string) {
	let sum: number = 0;
	const wordDictionary: Record<string, string> = {
		'one': '1',
		'two': '2',
		'three': '3',
		'four': '4',
		'five': '5',
		'six': '6',
		'seven': '7',
		'eight': '8',
		'nine': '9'
	}

	const matches: string = '1|2|3|4|5|6|7|8|9|one|two|three|four|five|six|seven|eight|nine';

	input.split(/\r?\n/).forEach(line => {
		console.log(line)
		const match: RegExpMatchArray|null = line.match(new RegExp(`(${matches})`, "g"))

		if (match) {
			const len: number = match.length - 1;
			const first: string = Number.isNaN(parseInt(match[0])) ? wordDictionary[match[0]] : match[0];
			const last: string = Number.isNaN(parseInt(match[len])) ? wordDictionary[match[len]] : match[len];			
			console.log(`${first}${last}`)
			sum += parseInt(`${first}${last}`);
		}
		console.log('------------------')
	})
	
	console.log('part two total', sum)
}

partTwo(input)