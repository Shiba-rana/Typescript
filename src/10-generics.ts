// Generics in Typescript
function identity<MyType>(arg: MyType): MyType {
  return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(100);

// Generics with arrays
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

let myNum = getFirstElement([1, 2, 3]);
let myName = getFirstElement(["Shiva", "SDE"]);

// Generic interfaces
interface KeyValuePair<K, V> {
  key: {
    name: string;
    myKey: K;
  };
  value: V;
}

let stringNumberPair: KeyValuePair<string, number> = {
  key: {
    name: "Shiva",
    myKey: " ",
  },
  value: 22,
};

// Generic classes
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  removeItem(item: T): void {
    this.data = this.data.filter((i: T) => i !== item);
  }

  getItem(): T[] {
    return [...this.data];
  }
}

let textStorage = new DataStorage<string>();
textStorage.addItem("Hello");

// Generic constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("hello")
logLength([1, 2, 3])