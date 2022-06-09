// Construct Single Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Create/Get/Remove Nodes From Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    // console.log(`\n------insertFirst-------`);

    this.head = new Node(data, this.head);
    this.size++;
    // console.log(`this.head:, ${this.head}`);

    // console.log(`current.next:, ${this.head.next}`);
    // console.log("this.size:", this.size);
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    // let current;

    // if (this.head === null) {
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      // test
      // console.log(current);
      // console.log(current.data);

      while (current.next) {
        current = current.next;
        // console.log("current:", current);
      }
      current.next = node;
      // console.log("last: ", current);
    }
    this.size++;
  }

  // insert at index
  insertAt(data, index) {
    // out of range:
    if (index > 0 && index > this.size) return;
    // first of linkedList:
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
      // between nodes:
    } else {
      let current = this.head;
      // console.log("current", current);
      // console.log("this.size:", this.size);
      // console.log("index:", index);

      let prev;
      let counter = 0;
      while (counter < index) {
        prev = current;
        counter++;
        current = current.next;
        // console.log(`${counter}-while current: ${current.data}`);
      }
      // console.log(`prev: ${prev.data}, current: ${current.data},`);
      prev.next = new Node(data, current);
      this.size++;
    }
  }

  // Get at index
  getIndex(index) {
    if (index === 0) return this.head.data; //if index is 0
    if (index > 0 && index > this.size) return "error"; //if index out of range

    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    console.log(`index: ${index}-${current.data}`);
  }

  // Remove at index
  removeAt(index) {
    console.log("index:", index);
    if (index > 0 && index > this.size) return; //out of range

    let couter = 0;
    let current = this.head;
    let prev;

    // remove 0 index
    if (index == 0) {
      this.head = current.next;
      this.size--;
      console.log(
        `index ${index} with ${this.head.data} removed. current:${current.data}`
      );
      return;
    }
    // index between nodes
    while (couter < index) {
      prev = current;
      current = current.next;
      couter++;
    }
    prev.next = current.next;
    console.log(
      `prev:${prev.data}, current: ${current.data}, current.next:${current.next.data}`
    );
    this.size--;
  }

  // Clear List

  // Print list data
  printListData() {
    console.log(`\n------printListData-------`);
    let current = this.head;

    // console.log(`this.head:", ${this.head.data}`);
    // console.log(this.size);
    // console.log("current:", current);

    let counter = 0;
    while (current) {
      console.log(`${counter}- ${current.data}`);
      counter++;
      current = current.next;
    }
  }
}

const ll = new LinkedList();

console.log("$".repeat(35), "start", "$".repeat(35));

ll.insertFirst(300);
ll.insertFirst(200);
ll.insertFirst(100);
ll.insertLast(400);
ll.insertLast(500);
ll.insertLast(600);

// console.log(ll);
// ll.insertAt("777", 3);
// ll.getIndex(4);
ll.removeAt(1);
ll.printListData();
