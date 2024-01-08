import getInput from "../../utils/getInput";
const input = getInput(__dirname);
// const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
// Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
// Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
// Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
// Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
// Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`

/**
 * https://adventofcode.com/2023/day/4#part1
 * 
 * @param input data from challenge
 */
function partOne(input: string) {
  let sum: number = 0

  const winners = input
    .split('\n')
    .map(line => {
      const [left, right] = line
        .split("|")
        .map(group => group.match(/(\d+)/g))
        
      const numberOfWinners = left?.slice(1).filter(num => right?.includes(num)).length || 0
      return numberOfWinners > 0 ? Math.pow(2, numberOfWinners - 1) : 0
    })
    .reduce((a,b) => a + b)

  sum = winners
  console.log('Part one total', sum)
}

// partOne(input)

/**
 * https://adventofcode.com/2023/day/3#part2
 * 
 * @param input data from challenge
 */
function partTwo(input: string) {
  const knownWinners: Record<string, number|undefined> = {}
  const lines = input.split('\n')

  for (let i = 0; i < lines.length; i++) {
    const [left, right] = lines[i]
      .split("|")
      .map(group => group.match(/(\d+)/g))

    if (!left || !right) continue

    const length = left?.slice(1).filter(num => right?.includes(num)).length

    if (length <= 0)  continue
    
    knownWinners[left[0]] = length
  }

  console.log('knownWinners', knownWinners)
}

partTwo(input)
