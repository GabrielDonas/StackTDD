{
  /*
A stack is a linear data structure that follows the LIFO (Last–In, First–Out) order
i.e., items can be inserted or removed only at one end of it.
Don't use an array or array methods on the implementation.
*/
}

//[X] push: Pushes an item at the top of the stack.
//[X] pop: Remove and return the item from the top of the stack.
//[X] peek: Returns the item at the top of the stack without removing it.
//[X] size: Returns the total number of items in the stack.
//[X] isFull: Checks whether the stack is full.


export class Stack<T> {
  private myStack: Record<number, T>;
  private maxSize: number;

  constructor(maxSize: number) {
    this.myStack = {};
    this.maxSize = maxSize;
  }

  public push(item: T): void {
    this.myStack[this.stackSize()] = item;
  }

  public get size(): number {
    return Object.keys(this.myStack).length;
  }

  public peek(): T | undefined {
    //edge empty array
    return this.myStack[this.stackSize() - 1];
  }

  public pop(): T | undefined {
    //edge empty array
    const lastItem = this.stackPeek();
    if(lastItem){
      delete this.myStack[this.stackSize() - 1];
    }
    return lastItem;
  }

  public isFull(): boolean {
    return this.stackSize() === this.maxSize;
  }

  public isEmpty(): boolean {
    return this.stackSize() === 0;
  }
}

const ryan = new Stack(20);
ryan.push(person)