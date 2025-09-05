https://leetcode.com/problems/single-element-in-a-sorted-array/

Approaches:

// 1. Binary search
//  every pair starts at even index
//  then single elem
//  every pair starts at odd index
//   0  1  | 2  3  | 4  5  | 6  7  | 8  | 9 10  | 11  12
// [ 1, 1, | 3, 3, | 4, 4, | 7, 7, | 8, | 9, 9, | 10, 10 ]
// Time - O(log(n))
// Space - O(1)

// 2. Binary search
//  the length of the array is odd (cause we have a bunch of pairs and 1 single element)
//  if we "remove" the pair in the middle,
//  we'll end up with one part of the array having odd len (contains the single elem)
//  & the other part - even len
//         even len                       odd len
//  |<------------------>|          |<----------------->|
// [ 1, 1, | 3, 3, | 4, 4, | 7, 7, | 8, | 9, 9, | 10, 10 ]
//                           ^
//                           middle index
//                           ^  ^
//                           middle pair

// Time - O(log(n))
// Space - O(1)

// 3,3,7,7,8,9,9
//       ^

// 1,1,2,3,3,4,4,8,8
//         ^
// 1,1,2,3,3,4,4,8,8,9,9
//           ^

// 1 1 2 2 3 3 4 4 5 5 6 7 7 //13 items -> 13/2 = 6
//             ^
// 1 1 2 2 3 3 4 4 6 7 7 // 11 items -> 11/2 = 5
//           ^
//           (nums.size/2 % 2) == 0


// // 1 1 2 2 3 3 4 4 5 5 6 6 7 8 8
//    ^
//                                ^
//                  ^
// // 1 1 2 3 3 4 4 5 5 6 6 7 7 8 8
//    ^
//                ^
//          ^

// kotlin
class Solution {
     fun singleNonDuplicate(nums: IntArray): Int {
        var leftIndex = 0
        var rightIndex = nums.lastIndex
        while (leftIndex < rightIndex) {
          val midIndex = (leftIndex + rightIndex) / 2
          val currValue = nums.getOrNull(midIndex)
          val nextValue = nums.getOrNull(midIndex + 1)
          val prevValue = nums.getOrNull(midIndex - 1)
          if (currValue != nextValue && currValue != prevValue) return currValue!!

          if ((midIndex % 2) == 0) {
            if (currValue == prevValue) {
              rightIndex = midIndex - 2
            } else {
              leftIndex = midIndex + 2
            }
          } else {
            if (currValue == prevValue) {
              leftIndex = midIndex + 1
            } else {
              rightIndex = midIndex - 1
            }
          }
        }
        return nums[leftIndex]
    }
}



// js

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {

    let startIndex = 0;
    let lastIndex = nums.length - 1;

    while (startIndex < lastIndex) {
      let midIndex = Math.floor((startIndex + lastIndex) / 2);

      if(midIndex % 2 === 0) {
        if(nums[midIndex] === nums[midIndex + 1]) {
          startIndex = midIndex + 2;
        } else {
          lastIndex = midIndex;
        }
      } else {
        if(nums[midIndex] === nums[midIndex - 1]) {
          startIndex = midIndex + 1;
        } else {
          lastIndex = midIndex;
        }
      }
    }
    return nums[startIndex];
};



////////////////////////////////////////////////////////////////////////////////////
https://adventofcode.com/2024/day/8


// adventofcode - day 8 - js

// antinodes we need grid like 2D

const map = []; //input map

function getAntennas(map, gridWidth, gridHeight) {
  const antinodes = new Set();
  const freq = 0;

  for(let y = 0; y < map.length; y++) {
    for(let x = 0; x < map[y].length; x++) {
      const char =
    }
  }

}

function calculateAntinodes(antennas, gridWith, gridHeigth) {

}


function findUniqueAntinodes() {
  // ??
}








// kotlin
object Day8Part1 : Problem("Advent of Code 2024, day 8 part 1") {
    override fun run(): List<TestResult> {
        val testCases = listOf(
            TestCase1(INPUT, 392L),
        )
        return testCases.flatMap { case ->
            listOf(
                TestResult(case, scan(case.p1))
            )
        }
    }

    private fun scan(table: List<String>): Long {
        val map = getMap(table) // // collect locations of every chars
        val antinodesLocations = HashSet<Pair<Int, Int>>()

        for ((_, list) in map) {
            countAntinodes(
                locations = list,
                rowsCount = table.size,
                columnsCount = table[0].length,
                antinodesLocations = antinodesLocations,
            )
        }

        return antinodesLocations.size.toLong()
    }

    private fun getMap(table: List<String>): HashMap<Char, ArrayList<Pair<Int,Int>>> {
        // key - char
        // value - list of locations
        val map = HashMap<Char, ArrayList<Pair<Int,Int>>>()
        for (rowIndex in table.indices) {
            val row = table[rowIndex]
            for (colIndex in row.indices) {
                val char = row[colIndex]
                if (char == '.') continue
                val list = map[char] ?: ArrayList<Pair<Int, Int>>().also { map[char] = it }
                list.add(rowIndex to colIndex)
            }
        }
        return map
    }

    private fun countAntinodes(
        locations: ArrayList<Pair<Int,Int>>,
        rowsCount: Int, columnsCount: Int,
        antinodesLocations: HashSet<Pair<Int, Int>>,
    ) {
        val rowBounds = 0 until rowsCount
        val colBounds = 0 until columnsCount
        for (leftIndex in locations.indices) {
            for (rightIndex in leftIndex+1 until locations.size) {
                // dr = r1 - r2 = -1
                // dc = c1 - c2 = 1

                // c3 = c1 + dc
                // r3 = r1 + dr

                // c4 = c2 - dc
                // r4 = r2 - dr

                //.......3...
                //......1....
                //.....2.....
                //....4......

                val (r1, c1) = locations[leftIndex]
                val (r2, c2) = locations[rightIndex]
                val dc = c1 - c2
                val dr = r1 - r2
                val c3 = c1 + dc
                val r3 = r1 + dr
                val c4 = c2 - dc
                val r4 = r2 - dr
                if (r3 in rowBounds && c3 in colBounds) antinodesLocations.add(r3 to c3)
                if (r4 in rowBounds && c4 in colBounds) antinodesLocations.add(r4 to c4)
            }
        }
    }
}




// C#

public static class AntinodeCounter
{
    public static int CountAntinodes(string filepath)
    {
        var matrix = File.ReadAllLines(filepath);
        int height = matrix.Length;
        int width = matrix[0].Length;

        var antennaCellsByFrequency = GroupAntennasByFrequency(matrix);

        var uniqueAntinodeCells = new HashSet<Point>();
        foreach (var antennaCells in antennaCellsByFrequency.Values)
            AddAntinodeCellsFromAntennas(antennaCells, width, height, uniqueAntinodeCells);

        return uniqueAntinodeCells.Count;
    }

    private static Dictionary<char, List<Point>> GroupAntennasByFrequency(string[] matrix)
    {
        int height = matrix.Length;
        int width = matrix[0].Length;

        var antennaCellsByFrequency = new Dictionary<char, List<Point>>();
        for (int y = 0; y < height; y++)
            for (int x = 0; x < width; x++)
                if (char.IsAsciiLetterOrDigit(matrix[y][x]))
                {
                    char frequency = matrix[y][x];
                    if (!antennaCellsByFrequency.TryGetValue(frequency, out var antennaCells))
                    {
                        antennaCells = new List<Point>();
                        antennaCellsByFrequency.Add(frequency, antennaCells);
                    }
                    antennaCells.Add(new Point(x, y));
                }

        return antennaCellsByFrequency;
    }

    private static void AddAntinodeCellsFromAntennas(List<Point> antennaCells, int gridWidth, int gridHeight, HashSet<Point> antinodeCells)
    {
        for (int i = 0; i < antennaCells.Count; i++)
            for (int j = i + 1; j < antennaCells.Count; j++)
            {
                var firstAntenna = antennaCells[i];
                var secondAntenna = antennaCells[j];

                var delta = new Size(secondAntenna.X - firstAntenna.X,
                                     secondAntenna.Y - firstAntenna.Y);

                var firstAntinode = firstAntenna - delta;
                if (!IsOutOfBounds(firstAntinode))
                    antinodeCells.Add(firstAntinode);

                var secondAntinode = secondAntenna + delta;
                if (!IsOutOfBounds(secondAntinode))
                    antinodeCells.Add(secondAntinode);
            }


        bool IsOutOfBounds(Point cell)
        {
            return cell.X < 0 || cell.X >= gridHeight || cell.Y < 0 || cell.Y >= gridHeight;
        }
    }
}



// Day 8 Part 2


Watching over your shoulder as you work, one of The Historians asks
if you took the effects of resonant harmonics into your calculations.

Whoops!

After updating your model, it turns out that an antinode occurs at any grid position
exactly in line with at least two antennas of the same frequency, regardless of distance.
This means that some of the new antinodes will occur at the position of each antenna
(unless that antenna is the only one of its frequency).

So, these three T-frequency antennas now create many antinodes:

T....#....
...T......
.T....#...
.........#
..#.......  #
..........     #
...#......        #
..........
....#.....
..........
In fact, the three T-frequency antennas are all exactly in line with two antennas,
so they are all also antinodes! This brings the total number of antinodes in the above example to 9.

The original example now has 34 antinodes, including the antinodes that appear on every antenna:

##....#....#
.#.#....0...
..#.#0....#.
..##...0....
....0....#..
.#...#A....#
...#..#.....
#....#.#....
..#.....A...
....#....A..
.#........#.
...#......##
Calculate the impact of the signal using this updated model.
How many unique locations within the bounds of the map contain an antinode?


Approaches:

1. Same idea, generate all antinodes and put into a set
   for a pair of antennas of the same frequency - time to generate all antinodes O(Min(width/deltaX, height/deltaY))

2.


// kotlin
object Day8Part2 : Problem("Advent of Code 2024, day 8 part 2") {
    override fun run(): List<TestResult> {
        val testCases = listOf(
            TestCase1(INPUT, 1124L), // wrong
        )
        return testCases.flatMap { case ->
            listOf(
                TestResult(case, scan(case.p1))
            )
        }
    }

    private fun scan(table: List<String>): Long {
        val map = getMap(table) // // collect locations of every chars
        val antinodesLocations = HashSet<Pair<Int, Int>>()

        for ((_, list) in map) {
            countAntinodes(
                locations = list,
                rowsCount = table.size,
                columnsCount = table[0].length,
                antinodesLocations = antinodesLocations,
            )
        }

        return antinodesLocations.size.toLong()
    }

    private fun getMap(table: List<String>): HashMap<Char, ArrayList<Pair<Int,Int>>> {
        // key - char
        // value - list of locations
        val map = HashMap<Char, ArrayList<Pair<Int,Int>>>()
        for (rowIndex in table.indices) {
            val row = table[rowIndex]
            for (colIndex in row.indices) {
                val char = row[colIndex]
                if (char == '.') continue
                val list = map[char] ?: ArrayList<Pair<Int, Int>>().also { map[char] = it }
                list.add(rowIndex to colIndex)
            }
        }
        return map
    }

    private fun countAntinodes(
        locations: ArrayList<Pair<Int,Int>>,
        rowsCount: Int, columnsCount: Int,
        antinodesLocations: HashSet<Pair<Int, Int>>,
    ) {
        val rowBounds = 0 until rowsCount
        val colBounds = 0 until columnsCount
        for (leftIndex in locations.indices) {
            for (rightIndex in leftIndex+1 until locations.size) {
                // dr = r1 - r2 = -1
                // dc = c1 - c2 = 1

                // c3: c1 + dc , c1 + 2*dc, ...
                // r3: r1 + dr , r1 + 2*dr, ...

                // c4: c2 - dc , c2 - 2*dc, ...
                // r4: r2 - dr , r2 - 2*dr, ...

                //........3..
                //.......3...
                //......1....
                //.....2.....
                //....4......
                //...4.......

                val (r1, c1) = locations[leftIndex]
                val (r2, c2) = locations[rightIndex]
                antinodesLocations.add(r1 to c1)
                antinodesLocations.add(r2 to c2)
                val dr = r1 - r2
                val dc = c1 - c2

                var c3 = c1 + dc
                var r3 = r1 + dr
                while (r3 in rowBounds && c3 in colBounds) {
                    antinodesLocations.add(r3 to c3)
                    c3 += dc
                    r3 += dr
                }

                var c4 = c2 - dc
                var r4 = r2 - dr
                while (r4 in rowBounds && c4 in colBounds) {
                    antinodesLocations.add(r4 to c4)
                    c4 -= dc
                    r4 -= dr
                }
            }
        }
    }
}






// C#

public static int CountAntinodes(string filepath)
{
    var matrix = File.ReadAllLines(filepath);
    int height = matrix.Length;
    int width = matrix[0].Length;

    var antennaCellsByFrequency = GroupAntennasByFrequency(matrix);

    int nonUniqueAntinodeCount = 0;
    foreach (var antennaCells in antennaCellsByFrequency.Values)
        nonUniqueAntinodeCount += CountAntinodesWithinBoundaries(antennaCells, width, height);

    int overlapCount = CountIntersectionsOfAntinodeLinesWithinBoundaries(antennaCellsByFrequency, width, height);

    return nonUniqueAntinodeCount - overlapCount;
}

//TODO:
CountAntinodesWithinBoundaries()
CountIntersectionsOfAntinodeLinesWithinBoundaries()














