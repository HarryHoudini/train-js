https://leetcode.com/problems/my-calendar-i/

Approaches:

1. Naive: array of time intervals (startTime, endTime) + linear search
   Time complexity for Book() - O(n)

2. Self-balancing tree of time intervals: key - startTime
   Time complexity for Book() - O(log(n))

3. Sorted Array of time intervals + Binary Search
   Time complexity for Book() - O(n) find+insert, O(log(n)) found intersection => no insertion

Optimizations:
- merge neighboring intervals on insertion, if they are "touching"

(1,2),
(2,3),
(3,4),
...

Time O(1)
Space O(1)

- quick check for intersection of intervals [start1, end1) and [start2, end2):
return start1 < end2 && end1 > start2

Book(34, 38)
find the last interval with start < inputEnd = 38, check for this interval's end > inputStart = 48
Stored intervals: [ (2, 5), (10, 17), (20, 23), (24, 26), (28, 33), (36, 42) ]

// kotlin
// naive with list
class MyCalendar() {

    private val intervals = ArrayList<Pair<Int, Int>>()

    fun book(startTime: Int, endTime: Int): Boolean {
        if (intervals.any { (start, end) -> isIntersects(start, end, startTime, endTime-1) }) {
            return false
        }
        intervals.add(startTime to endTime-1)
        return true
    }

    private fun isIntersects(s1: Int, e1: Int, s2: Int, e2: Int): Boolean {
        return s1 in s2..e2 || e1 in s2..e2 || s2 in s1..e1 || e2 in s1..e1 // can be optimized here
    }
}
// tree, no merging (beats 48% by time)
class MyCalendar() {

    private val intervals = TreeMap<Int, Int>() // key - startTime, value - endTime

    fun book(startTime: Int, endTime: Int): Boolean {
        val higherEntry = intervals.higherEntry(startTime) // log(n)
        val floorEntry = intervals.floorEntry(startTime) // log(n)
        val startNew = startTime
        val endNew = endTime-1
        if (higherEntry != null && isIntersects(higherEntry.key, higherEntry.value, startNew, endNew)) return false
        if (floorEntry != null && isIntersects(floorEntry.key, floorEntry.value, startNew, endNew)) return false

        intervals.put(startNew, endNew) // log(n)
        return true
    }

    private fun isIntersects(s1: Int, e1: Int, s2: Int, e2: Int): Boolean {
        return s1 in s2..e2 || e1 in s2..e2 || s2 in s1..e1 || e2 in s1..e1 // can be optimized here
    }
}
// tree, with merging (beats 55% by time)
class MyCalendar() {

    private val intervals = TreeMap<Int, Int>()

    fun book(startTime: Int, endTime: Int): Boolean {
        val higherEntry = intervals.higherEntry(startTime) // log(n)
        val floorEntry = intervals.floorEntry(startTime) // log(n)
        val startNew = startTime
        val endNew = endTime-1
        if (higherEntry != null && isIntersects(higherEntry.key, higherEntry.value, startNew, endNew)) return false
        if (floorEntry != null && isIntersects(floorEntry.key, floorEntry.value, startNew, endNew)) return false
        when {
            // merge the previous stored, the new one and the next stored intervals to 1 single interval
            floorEntry != null && floorEntry.value + 1 == startNew && higherEntry != null && endNew + 1 == higherEntry.key -> {
                intervals.remove(higherEntry.key) // log(n)
                intervals.remove(floorEntry.key) // log(n)
                intervals.put(floorEntry.key, higherEntry.value) // log(n)

                /*
                  // optimized version:
                 intervals.remove(higherEntry.key)
                 floorEntry.value = higherEntry.value
                */
            }
            // merge previous stored interval and the new one to 1 single interval
            floorEntry != null && floorEntry.value + 1 == startNew -> {
                intervals.remove(floorEntry.key) // log(n)
                intervals.put(floorEntry.key, endNew) // log(n)

                /*
                // optimazed version:
                floorEntry.value = endNew
                */
            }
            // merge the new one and next stored interval to 1 single interval
            higherEntry != null && endNew + 1 == higherEntry.key -> {
                intervals.remove(higherEntry.key) // log(n)
                intervals.put(startNew, higherEntry.value) // log(n)
            }
            // just put new interval
            else -> {
                intervals.put(startNew, endNew) // log(n)
            }
        }

        return true
    }

    private fun isIntersects(s1: Int, e1: Int, s2: Int, e2: Int): Boolean {
        return s1 in s2..e2 || e1 in s2..e2 || s2 in s1..e1 || e2 in s1..e1 // can be optimized here
    }
}




// js naive (o(n) = time complexity)

var MyCalendar = function() {
    this.events = [];
};

/**
 * @param {number} startTime
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function(startTime, endTime) {
   for (let i = 0; i < this.events.length; i++) {

    let start = this.events[i][0];
    let end = this.events[i][1];

      if (start < endTime && end > startTime) {
        return false;
      }
    }

    this.events.push([startTime, endTime]);

    return true;
};




 //typescript binary search in sorted array
 class MyCalendar {
    private readonly sortedIntervals: [number, number][] = [];

    constructor() {
    }

    public book(candidateStartTime: number, candidateEndTime: number): boolean {

        if (this.sortedIntervals.length === 0) {
            this.sortedIntervals.push([candidateStartTime, candidateEndTime]);
            return true;
        }

        return this.recursiveHelper(candidateStartTime, candidateEndTime, [0, this.sortedIntervals.length - 1])
    }

    private recursiveHelper(candidateStartTime: number, candidateEndTime: number, testingPart: [number, number]): boolean {
        const middleElementIndex: number = testingPart[0] + Math.ceil((testingPart[1] - testingPart[0]) / 2)
        const [intervalStart, intervalEnd]: [number, number] = this.sortedIntervals.at(middleElementIndex) as [number, number];
        if (MyCalendar.isThereAnIntersection(candidateStartTime, candidateEndTime, intervalStart, intervalEnd)) {
            return false
        }

        if (candidateEndTime <= intervalStart) {

            if (testingPart[1] === testingPart[0] || middleElementIndex - 1 < testingPart[0]) {
                this.sortedIntervals.splice(middleElementIndex, 0, [candidateStartTime, candidateEndTime]);
                return true
            }

            return this.recursiveHelper(candidateStartTime, candidateEndTime, [testingPart[0], middleElementIndex - 1])
        }

        if (testingPart[1] === testingPart[0] || middleElementIndex + 1 > testingPart[1]) {
            this.sortedIntervals.splice(middleElementIndex + 1, 0, [candidateStartTime, candidateEndTime]);
            return true
        }

        return this.recursiveHelper(candidateStartTime, candidateEndTime, [middleElementIndex + 1, testingPart[1]])
    }

    private static isThereAnIntersection(candidateStartTime: number, candidateEndTime: number, intervalStart: number, intervalEnd: number): boolean {
        return !(candidateStartTime >= intervalEnd || candidateEndTime <= intervalStart)
    }

}



public class MyCalendar3
{
    private readonly SortedSet<Booking> bookings = new();

    public bool Book(int startTime, int endTime)
    {
        return bookings.Add(new Booking(startTime, endTime));
    }

    private class Booking(int startTime, int endTime) : IComparable<Booking>
    {
        public int StartTime { get; } = startTime;
        public int EndTime { get; } = endTime;

        public int CompareTo(Booking? other)
        {
            if (StartTime < other.EndTime && EndTime > other.StartTime)
                return 0;

            return StartTime - other.StartTime;
        }
    }
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
https://adventofcode.com/2024/day/12

AAAA
BBCD
BBCC
EEEC

+-+-+-+-+
|A A A A|
+-+-+-+-+     +-+
              |D|
+-+-+   +-+   +-+
|B B|   |C|
+   +   + +-+
|B B|   |C C|
+-+-+   +-+ +
          |C|
+-+-+-+   +-+
|E E E|
+-+-+-+

price = area * perimeter
region A has price 4 * 10 = 40
region B has price 4 * 8 = 32
region C has price 4 * 10 = 40
region D has price 1 * 4 = 4
region E has price 3 * 8 = 24
the total price for the example is 40 + 32 + 40 + 4 + 24 = 140

Approaches:

1. FloodFill (Recursive / Iterative-Queue / Iterative-Stack) + Set/BitArray of Visited Cells

count = 4;

xx0
011
000

queue [1,0]

  A
 AAA
  A

Set { [0,0], [0,1], [0,2], [1,0], [2,0], [2,1], [2,2]}


// js

// perimeter calculation
// x * y

AAAA
BBCD
BBCC
EEEC

set of As: { (0,0), (0,1), (0,2), (0,3) }
set of Bs: { (1,0), (1,1), (2,0), (2,1) }
...
^ lookup - O(setCount)
solution - set of visited cell coordinates:
[
  , [0,1], [0,2], [0,3],
  [1,0], [1,1], [1,2], [1,3],
  [2,0], [2,1], [2,2], [2,3],
  [3,0], [3,1], [3,2], [3,3]
]
or bit-array of visited cells:
[
    [0,1,1,1],
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1],
]


2. FloodFill In-Place

aaaa
BBCD
BBCC
EEEC

A: p = 3+2+2+3    a = 1+1+1+1


3. UnionFind

Union - merges two sets into one
Find - given an element, it tells to which set the element belongs to
Both operations - O(1) amortized

(0, 1), check neighbors in disjoint set: (0,0), (0,2), (-1,1), (1,1) => found one (0,0), merge them into one set
 |
AAAA
BBCD
BBCC
EEEC

DisjointSet:
set 1: A(0,0)
set 2: A(0,1)
merge sets 1 and 2 =>
set 1: A(0,1) A(0,0)

...
set 1: A, A, A, A
set 2: B, B, B, B
set 3: C, C, C, C
set 4: D
set 5: E, E, E

iterate over each set, calc perimeter and area



// js - floodfill stack

// 0 , 1  1,0 0,-1


function gardenStack(x,y) {
  let stack = [[x,y]];
  let area = 0;
  let perimeter = 0;

  while(stack.length > 0) {
    let [x, y] = stack.pop();

    area ++;

  }

}

////////////////////////

--- Part Two ---

Fortunately, the Elves are trying to order so much fence that they qualify for a bulk discount!

Under the bulk discount, instead of using the perimeter to calculate the price,
you need to use the number of sides each region has.
Each straight section of fence counts as a side, regardless of how long it is.

Consider this example again:

AAAA
BBCD
BBCC
EEEC

+-+-+-+-+
|A A A A|
+-+-+-+-+     +-+
              |D|
+-+-+   +-+   +-+
|B B|   |C|
+   +   + +-+
|B B|   |C C|
+-+-+   +-+ +
          |C|
+-+-+-+   +-+
|E E E|
+-+-+-+

The region containing type A plants has 4 sides, as does each of the regions containing plants of type B, D, and E.
However, the more complex region containing the plants of type C has 8 sides!

Using the new method of calculating the per-region price by multiplying the region's area by its number of sides,
regions A through E have prices 16, 16, 32, 4, and 12, respectively, for a total price of 80.

The second example above (full of type X and O plants) would have a total price of 436.

Here's a map that includes an E-shaped region full of type E plants:
_____
EEEEE
EXXXX
EEEEE
EXXXX
EEEEE
The E-shaped region has an area of 17 and 12 sides for a price of 204.
Including the two regions full of type X plants, this map has a total price of 236.

X|XXX
X|XXX
x|  X
XXXXX

This map has a total price of 368:

AAAAAA
AAABBA
AAABBA
ABBAAA
ABBAAA
AAAAAA
+-----------+
|A A A A A A|
|     +---+ |
|A A A|B B|A|
|     |   | |
|A A A|B B|A|
| +---+---+ |
|A|B B|A A A|
| |   |     |
|A|B B|A A A|
| +---+     |
|A A A A A A|
+-----------+

+-----------+
|A A A A A A|
|     +---+ |
|A A A|B B|A|
|     |   | |
|A A A|B B|A|
| +---+---+ |
|A|B B|A A A|
| |   |     |
|A|B B|A A A|
| +---+     |
|A A A A A A|
+-----------+

A sides = 4 + 8


set coordinates[[0,0], [0,1], [0,2].....]
filteredCoordinates [[0,0], [0,1], [0,2].....]

count = 8;

set VisitedPositions [[0,0], [0,1], [0,2] ]


It includes two regions full of type B plants (each with 4 sides)
and a single region full of type A plants (with 4 sides on the outside and 8 more sides on the inside, a total of 12 sides).
Be especially careful when counting the fence around regions like the one full of type A plants;
in particular, each section of fence has an in-side and an out-side,
so the fence does not connect across the middle of the region (where the two B regions touch diagonally).
(The Elves would have used the Möbius Fencing Company instead, but their contract terms were too one-sided.)

The larger example from before now has the following updated prices:

A region of R plants with price 12 * 10 = 120.
A region of I plants with price 4 * 4 = 16.
A region of C plants with price 14 * 22 = 308.
A region of F plants with price 10 * 12 = 120.
A region of V plants with price 13 * 10 = 130.
A region of J plants with price 11 * 12 = 132.
A region of C plants with price 1 * 4 = 4.
A region of E plants with price 13 * 8 = 104.
A region of I plants with price 14 * 16 = 224.
A region of M plants with price 5 * 6 = 30.
A region of S plants with price 3 * 6 = 18.
Adding these together produces its new total price of 1206.

What is the new total price of fencing all regions on your map?



object Day12Part1 : Problem("Advent of Code 2024, day 12 part 1") {

    override fun run(): List<TestResult> {
        val testCases = listOf(
            TestCase1(INPUT, 1370258L),
        )
        return testCases.flatMap { case ->
            listOf(
                TestResult(case, getFencesSum(case.p1))
            )
        }
    }

    private val directions = arrayOf(
        // dy, dx
        -1 to 0, // up
        1 to 0, // down
        0 to 1, // right
        0 to -1, // left
    )

    private fun getFencesSum(input: List<String>): Long {
        var sum = 0L
        val visitedLocations = HashSet<Pair<Int, Int>>()
        val queue = LinkedList<Pair<Int, Int>>()
        for (rowIndex in input.indices) {
            val row = input[rowIndex]
            for (colIndex in row.indices) {
                val char = row[colIndex]
                if (rowIndex to colIndex in visitedLocations) continue

                visitedLocations.add(rowIndex to colIndex)
                var area = 0L
                var perimeter = 0L
                queue.add(rowIndex to colIndex)
                while (queue.isNotEmpty()) {
                    val (r, c) = queue.pollFirst()
                    area++
                    directions.forEach { (dy, dx) ->
                        val newR = r + dy
                        val newC = c + dx
                        if (newR in input.indices && newC in row.indices && input[newR][newC] == char) {
                            if (newR to newC !in visitedLocations) {
                                visitedLocations.add(newR to newC)
                                queue.addLast(newR to newC)
                            }
                        } else {
                            perimeter++
                        }
                    }
                }
                sum += area * perimeter
            }
        }
        return sum
    }
}

object Day12Part2 : Problem("Advent of Code 2024, day 12 part 2") {

    override fun run(): List<TestResult> {
        val testCases = listOf(
            TestCase1(INPUT, 805814L),
        )
        return testCases.flatMap { case ->
            listOf(
                TestResult(case, scan(case.p1))
            )
        }
    }

    private val directions = arrayOf(
        // dy, dx
        -1 to 0, // up
        0 to -1, // left
        1 to 0, // down
        0 to 1, // right
    )
    private val queue = LinkedList<Pair<Int, Int>>()
    private val visitedLocations = HashSet<Pair<Int, Int>>()

    private fun scan(input: List<String>): Long {
        queue.clear()
        visitedLocations.clear()
        var sum = 0L
        for (rowIndex in input.indices) {
            val row = input[rowIndex]
            for (colIndex in row.indices) {
                if (rowIndex to colIndex in visitedLocations) continue
                sum += getPriceOfFence(
                    rowIndex = rowIndex,
                    colIndex = colIndex,
                    input = input,
                )
            }
        }
        return sum
    }

    private fun getPriceOfFence(
        rowIndex: Int,
        colIndex: Int,
        input: List<String>,
    ): Long {
        var area = 0L
        val char = input[rowIndex][colIndex]
        visitedLocations.add(rowIndex to colIndex)
        queue.add(rowIndex to colIndex)
        val fencesMap = HashMap<Int, HashSet<Int>>()
        while (queue.isNotEmpty()) {
            val (r, c) = queue.pollFirst()
            area++
            directions.forEachIndexed { dirIndex, (dy, dx) ->
                val newR = r + dy
                val newC = c + dx
                if (newR in input.indices && newC in input[rowIndex].indices && input[newR][newC] == char) {
                    if (newR to newC !in visitedLocations) {
                        visitedLocations.add(newR to newC)
                        queue.addLast(newR to newC)
                    }
                } else {
                    val isVerticalFence = dirIndex % 2 == 1
                    val key = (if (isVerticalFence) newC else newR) * 100 + dirIndex
                    val value = if (isVerticalFence) newR else newC
                    fencesMap[key] = (fencesMap[key] ?: HashSet()).apply { add(value) }
                }
            }
        }
        return area * getSidesCount(fencesMap)
    }

    private fun getSidesCount(fencesMap: HashMap<Int, HashSet<Int>>): Long {
        var sides = 0L
        for (fences in fencesMap.values) {
            val values = fences.toMutableList().apply { sort() }
            sides++
            for (index in 1..values.lastIndex) {
                if (values[index] - values[index - 1] > 1) {
                    sides++
                }
            }
        }
        return sides
    }

}




// C# Part 1 - Flood Fill (iterative, queue, in-place)
public static class Fencing
{
    private static readonly ImmutableArray<Size> neighborOffsets = [
        new Size(+1, 0),
        new Size(-1, 0),
        new Size(0, -1),
        new Size(0, +1)
    ];

    public static long CalculateFenceCost(string filepath)
    {
        var garden = ParseInput(filepath);
        int height = garden.GetLength(0);
        int width = garden.GetLength(1);

        long totalFenceCost = 0;
        for (int y = 0; y < height; y++)
            for (int x = 0; x < width; x++)
                if (char.IsAsciiLetterUpper(garden[y, x]))
                    totalFenceCost += GetPlotFenceCostUsingFloodFillInplace(garden, x, y);

        return totalFenceCost;
    }

    private static long GetPlotFenceCostUsingFloodFillInplace(char[,] garden, int x, int y)
    {
        int height = garden.GetLength(0);
        int width = garden.GetLength(1);

        int area = 0;
        int perimeter = 0;

        var start = new Point(x, y);
        var cellsToVisit = new Queue<Point>();
        cellsToVisit.Enqueue(start);

        while (cellsToVisit.Any())
        {
            var current = cellsToVisit.Dequeue();
            if (char.IsAsciiLetterLower(garden[current.Y, current.X]))
                continue;

            garden[current.Y, current.X] = char.ToLower(garden[current.Y, current.X]);
            area++;
            foreach (var offset in neighborOffsets)
            {
                var neighbor = current + offset;
                if (IsOutOfBounds(neighbor))
                    perimeter++;
                else if (garden[current.Y, current.X] != char.ToLower(garden[neighbor.Y, neighbor.X]))
                    perimeter++;
                else
                    cellsToVisit.Enqueue(neighbor);
            }
        }

        long fenceCost = ((long)area) * perimeter;
        return fenceCost;

        bool IsOutOfBounds(Point cell)
        {
            return cell.X < 0 || cell.X >= width || cell.Y < 0 || cell.Y >= height;
        }
    }

    private static char[,] ParseInput(string filepath)
    {
        var lines = File.ReadAllLines(filepath);
        int height = lines.Length;
        int width = lines[0].Length;

        var garden = new char[height, width];
        for (int y = 0; y < height; y++)
            for (int x = 0; x < width; x++)
                garden[y, x] = lines[y][x];

        return garden;
    }
}


// C# Part 1 - Union-Find + Dictionary

public static class Fencing2
{
    private static readonly ImmutableArray<Size> topAndLeftNeighborOffsets = [
        new Size(0, -1),
        new Size(-1, 0),
    ];
    private static readonly ImmutableArray<Size> neighborOffsets = [
        new Size(+1, 0),
        new Size(-1, 0),
        new Size(0, -1),
        new Size(0, +1)
    ];

    public static long CalculateFenceCost(string filepath)
    {
        var garden = File.ReadAllLines(filepath);
        int height = garden.Length;
        int width = garden[0].Length;

        var unionFind = new UnionFind(width, height);
        for (int y = 0; y < height; y++)
            for (int x = 0; x < width; x++)
            {
                var current = new Point(x, y);
                foreach (var offset in topAndLeftNeighborOffsets)
                {
                    var neighbor = current + offset;
                    if (IsOutOfBounds(neighbor))
                        continue;
                    if (garden[current.Y][current.X] == garden[neighbor.Y][neighbor.X])
                        unionFind.Unite(current, neighbor);
                }
            }

        var plotsByRepresentative = new Dictionary<Point, Plot>();
        for (int y = 0; y < height; y++)
            for (int x = 0; x < width; x++)
            {
                var current = new Point(x, y);
                var representative = unionFind.FindRepresentative(current);
                if (!plotsByRepresentative.TryGetValue(representative, out var plot))
                {
                    plot = new Plot();
                    plotsByRepresentative.Add(representative, plot);
                }
                plot.Area++;

                foreach (var offset in neighborOffsets)
                {
                    var neighbor = current + offset;
                    if (IsOutOfBounds(neighbor))
                        plot.Perimeter++;
                    else if (garden[current.Y][current.X] != garden[neighbor.Y][neighbor.X])
                        plot.Perimeter++;
                }
            }

        long totalFenceCost = 0;
        foreach (var plot in plotsByRepresentative.Values)
            totalFenceCost += plot.Area * plot.Perimeter;

        return totalFenceCost;

        bool IsOutOfBounds(Point cell)
        {
            return cell.X < 0 || cell.X >= width || cell.Y < 0 || cell.Y >= height;
        }
    }


    private class Plot
    {
        public int Area { get; set; } = 0;
        public int Perimeter { get; set; } = 0;
    }

    private class UnionFind
    {
        private readonly int width;
        private readonly int height;
        private int[] parents;
        private int[] sizes;

        public UnionFind(int width, int height)
        {
            this.width = width;
            this.height = height;
            int count = width * height;

            sizes = new int[count];
            parents = new int[count];
            for (int i = 0; i < count; i++)
                parents[i] = i;
        }

        private int ConvertToId(Point cell)
        {
            return cell.Y * width + cell.X;
        }

        private Point ConvertToCell(int id)
        {
            return new Point(id % width, id / width);
        }

        public Point FindRepresentative(Point cell)
        {
            int id = ConvertToId(cell);
            int representativeId = FindRepresentativeAndHalvePath(id);
            return ConvertToCell(representativeId);
        }

        private int FindRepresentativeAndHalvePath(int id)
        {
            int currentId = id;
            int parentId = parents[currentId];
            int grandparentId = parents[parentId];

            while (currentId != grandparentId)
            {
                parents[currentId] = grandparentId;

                currentId = grandparentId;
                parentId = parents[currentId];
                grandparentId = parents[parentId];
            }

            return grandparentId;
        }

        public void Unite(Point cell1, Point cell2)
        {
            Unite(ConvertToId(cell1), ConvertToId(cell2));
        }

        private void Unite(int id1, int id2)
        {
            int root1 = FindRepresentativeAndHalvePath(id1);
            int root2 = FindRepresentativeAndHalvePath(id2);
            if (root1 == root2)
                return;

            int smallerSetRoot = root1;
            int largerSetRoot = root2;
            if (sizes[smallerSetRoot] > sizes[largerSetRoot])
                (smallerSetRoot, largerSetRoot) = (largerSetRoot, smallerSetRoot);

            sizes[largerSetRoot] += sizes[smallerSetRoot];
            sizes[smallerSetRoot] = 0;
            parents[smallerSetRoot] = largerSetRoot;
        }
    }
}






