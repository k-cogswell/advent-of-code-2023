import getInput from "../../utils/getInput";
const input = getInput(__dirname);

/**
 * https://adventofcode.com/2023/day/2#part1
 * 
 * @param input data from challenge
 */
function partOne(input: string) {
  let sum: number = 0
  const colorLimits: Record<string, number> = {
    "red": 12,
    "green": 13,
    "blue": 14
  }

  input.split(/\r?\n/).forEach(line => {		
    let gameIsValid: boolean = true
    const matches: IterableIterator<RegExpMatchArray>|null = line.matchAll(/\d+(?= (red|green|blue))/g)

    if (!matches) return
    
    for (const match of matches) { 
      if (parseInt(match[0]) <= colorLimits[match[1]]) continue

      gameIsValid = false
      break
    }

    if (!gameIsValid) return 

    const gameID: RegExpMatchArray|null = line.match(/\d+(?=:)/g)

    if (!gameID) return
    
    sum += parseInt(gameID[0])
  })
  
  console.log('part one total', sum)
}

partOne(input)

/**
 * https://adventofcode.com/2023/day/2#part2
 * 
 * @param input data from challenge
 */
function partTwo(input: string) {
  let sum: number = 0
  input.split(/\r?\n/).forEach(line => {
    const tally: Record<string, number> = {
      "red": 0,
      "green": 0,
      "blue": 0
    }
    const matches: IterableIterator<RegExpMatchArray>|null = line.matchAll(/\d+(?= (red|green|blue))/g)

    for (const match of matches) {
      if (parseInt(match[0]) <= tally[match[1]]) continue
      tally[match[1]] = parseInt(match[0]);
    }

    sum += tally["red"] * tally["blue"] * tally["green"]
  })
  
  console.log('part two total', sum)
}

partTwo(input)