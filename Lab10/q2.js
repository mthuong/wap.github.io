// Question 2
// 1/ Explain why do we want sometimes to use setImmediate instead of using setTimeout?
/* Answer: Because setTimeout schedules a callback to run after a specific time, the functions are registered in the "timers" phase of the event loop. setImmediate schedules a callback to run at "check" phase of the event loop after IO events' callbacks.
*/

// 2/ Explain the difference between process.nextTick and setImmediate?
/* Answer: setImmediate schedules a callback run at "check" phase of event loop after IO events callbacks.
process.nextTick is not part of the event loop, it adds the callback into the nextTick queue. Node processes all the callbacks in the nextTick queue after the current operation completes and before the event loop continues.
*/

// 3/ Does Node.js has window object?
// Answer: In Node we run JS on the server so we don’t have window object. Instead Node provides us with global modules and methods that are automatically created for us