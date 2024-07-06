// 2621. Sleep
// https://leetcode.com/problems/sleep/description/?envType=study-plan-v2&envId=30-days-of-javascript



async function sleep(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis))
}


// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });
// Example 2:

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.
