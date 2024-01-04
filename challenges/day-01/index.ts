import getInput from "../../utils/getInput";

const input = getInput(__dirname);

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

partOne(input)

/**
 * https://adventofcode.com/2023/day/1#part2
 * 
 * @param input data from challenge
 */
function partTwo(input:string) {
	let sum: number = 0;
	const pattern: string = '(?=(one|two|three|four|five|six|seven|eight|nine|\\d))';
	const numberTranslationDictionary: Record<string, string> = {
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

	input.split(/\r?\n/).forEach(line => {
		let digits: Array<string> = [];
		const matches: IterableIterator<RegExpMatchArray>|null = line.matchAll(new RegExp(`${pattern}`, "g"))

		for (const match of matches) {
			digits.push(match[1]);
		}

		const len: number = digits.length - 1;
		const first: string = Number.isNaN(parseInt(digits[0])) ? numberTranslationDictionary[digits[0]] : digits[0];
		const last: string = Number.isNaN(parseInt(digits[len])) ? numberTranslationDictionary[digits[len]] : digits[len];			
		sum += parseInt(`${first}${last}`);
	})
	
	console.log('part two total', sum)
}

partTwo(input)