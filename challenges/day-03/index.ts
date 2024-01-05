import getInput from "../../utils/getInput";
const input = getInput(__dirname);

/**
 * https://adventofcode.com/2023/day/3#part1
 * 
 * @param input data from challenge
 */
function partOne(input: string) {
	let sum: number = 0
	const lines: Array<string> = input.split('\n')

	lines.forEach((line, index) => {
		const matches: IterableIterator<RegExpMatchArray> = line.matchAll(/\d+/g)
		if (!matches) return

		for (const match of matches) {
			switch (index) {
				case 0:
					// only check next index for adjacent
					sum += findAdjacentSymbols(lines, match, index, [1])
					break
				case (lines.length - 1):
					// only check previous index for adjacent
					sum += findAdjacentSymbols(lines, match, index, [-1])
					break;
				default:
					// check both prev and next for adjacent
					sum += findAdjacentSymbols(lines, match, index, [-1, 1])
					break;
			}
		}
	})

	console.log('Part One Answer:', sum)
}

/**
 * Scans the desired lines to find part numbers from provided input
 * 
 * @param lines all of the lines in the input file
 * @param match the current match
 * @param currentLine the entire current line
 * @param offsets the offsets of other lines to check
 * @returns the part number
 */
function findAdjacentSymbols(lines: Array<string>, match: RegExpMatchArray, currentLine: number, offsets: Array<number>) : number {
	const matchIndex: number|undefined = match.index
	let matchFound: boolean = false
	let partNumber: number = 0
	let linesToCheck: Array<string> = [lines[currentLine]]

	if (typeof matchIndex !== 'number') return partNumber

	const indicesToCheck: Array<number> = [
		matchIndex, 
		(matchIndex + match[0].length), 
		(matchIndex + match[0].length -1),
		(matchIndex - 1), 
		(matchIndex + 1)
	]

	offsets.forEach(offset => {
		linesToCheck.push(lines[(currentLine + offset)])
	})

	linesToCheck.some(line => {
		if (matchFound) return true
		const symbols: IterableIterator<RegExpMatchArray> = line.matchAll(/[^\n\d.]/g)

		for (const symbol of symbols) {
			if (!symbol.index) continue

			if (!indicesToCheck.includes(symbol.index)) continue

			partNumber = parseInt(match[0])	
			break
		}
	})

	return partNumber
}

partOne(input)

// /**
//  * https://adventofcode.com/2023/day/2#part2
//  * 
//  * @param input data from challenge
//  */
// function partTwo(input: string) {
// }

// partTwo(input)