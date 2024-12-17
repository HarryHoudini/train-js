//https://leetcode.com/problems/my-calendar-i/
// 729. My Calendar I
// Solved
// Medium
// Topics
// Companies
// Hint
// You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a double booking.

// A double booking happens when two events have some non-empty intersection (i.e., some moment is common to both events.).

// The event can be represented as a pair of integers startTime and endTime that represents a booking on the half-open interval [startTime, endTime), the range of real numbers x such that startTime <= x < endTime.

// Implement the MyCalendar class:

// MyCalendar() Initializes the calendar object.
// boolean book(int startTime, int endTime) Returns true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.


// Example 1:

// Input
// ["MyCalendar", "book", "book", "book"]
// [[], [10, 20], [15, 25], [20, 30]]
// Output
// [null, true, false, true]

// Explanation
// MyCalendar myCalendar = new MyCalendar();
// myCalendar.book(10, 20); // return True
// myCalendar.book(15, 25); // return False, It can not be booked because time 15 is already booked by another event.
// myCalendar.book(20, 30); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.


// Constraints:

// 0 <= start < end <= 109
// At most 1000 calls will be made to book.

class MyCalendar {
    private calendar: [number, number][];

       constructor() {
           this.calendar = [];
       }

       book(start: number, end: number): boolean {
           // Perform a binary search to find the correct position for the interval
           let left = 0;
           let right = this.calendar.length -1;

           while (left <= right) {
               const mid = Math.floor(left + (right-left) / 2);
               const [s, e] = this.calendar[mid];
               if (s < end && e > start) return false;

               if (start >= e) {
                   left = mid + 1
               } else {
                   right = mid - 1
               }
           }
           // Insert the new interval into the calendar
           this.calendar.splice(left, 0, [start, end]);
           return true;
       }
}
   /**
    * Your MyCalendar object will be instantiated and called as such:
    * var obj = new MyCalendar()
    * var param_1 = obj.book(startTime,endTime)
    */


class MyCalendar2 {
    private calendar: [number, number][];

       constructor() {
           this.calendar = [];
       }

       book(start: number, end: number): boolean {
           // Perform a binary search to find the correct position for the interval
           let left = 0;
           let right = this.calendar.length;

           while (left < right) {
               const mid = Math.floor((left + right) / 2);
               if (this.calendar[mid][0] < end) {
                   left = mid + 1;
               } else {
                   right = mid;
               }
           }

           // Check for overlap with the previous interval
           if (left > 0 && this.calendar[left - 1][1] > start) {
               return false;
           }

           // Insert the new interval into the calendar
           this.calendar.splice(left, 0, [start, end]);
           return true;
       }
}

   /**
    * Your MyCalendar object will be instantiated and called as such:
    * var obj = new MyCalendar()
    * var param_1 = obj.book(startTime,endTime)
    */
