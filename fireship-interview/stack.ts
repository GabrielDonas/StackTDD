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
//[] isEmpty: Checks whether the stack is empty.
//[X] isFull: Checks whether the stack is full.

export class Stack {
  private myStack: Record<string, string>;
  private size: number;

  constructor(size: number) {
    this.myStack = {};
    this.size = size;
  }

  public stackPush(item: string) {
    this.myStack[this.stackSize()] = item;
    return this.stackPeek();
  }

  public stackSize() {
    return Object.keys(this.myStack).length;
  }

  public stackPeek() {
    return this.myStack[this.stackSize() - 1];
  }

  public stackPop() {
    const lastItem = this.stackPeek();
    delete this.myStack[this.stackSize() - 1];
    return lastItem;
  }

  public stackIsFull() {
    return this.stackSize() === this.size;
  }

  public stackIsEmpty() {
    return this.stackSize() === 0;
  }
}
