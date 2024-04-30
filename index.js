class SongQueue {
  constructor() {
    this.queue = [];
  }

  // Method to add an element to the queue with priority
  enqueue(element, priority) {
    const newItem = { element, priority };
    let added = false;

    // Find the correct position to insert the element based on its priority
    for (let i = 0; i < this.queue.length; i++) {
      if (priority > this.queue[i].priority) {
        this.queue.splice(i, 0, newItem);
        added = true;
        break;
      }
    }

    if (!added) {
      this.queue.push(newItem);
    }
  }

  // Method to remove and return the element with the highest priority
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue.shift().element;
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // Method to get the size of the queue
  size() {
    return this.queue.length;
  }

  // Method to view the elements of the queue
  view() {
    return this.queue.map(item => item.element);
  }
}

// Example usage:
const songQueue = new SongQueue();

songQueue.enqueue("Task A", 2); // Task A has higher priority
songQueue.enqueue("Task B", 1); // Task B has lower priority
songQueue.enqueue("Task C", 2); // Task C has higher priority

console.log(songQueue.view()); // Output: ["Task C", "Task A", "Task B"]

console.log(songQueue.dequeue()); // Output: "Task C"
console.log(songQueue.view());   // Output: ["Task A", "Task B"]
