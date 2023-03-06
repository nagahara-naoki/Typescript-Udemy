//こっちで型を指定
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  if (typeof value === 'string') {
    return value + value;
  } else {
    return value * 2;
  }
}

console.log(double('HELLO'));
console.log(double(100));
// console.log(double(true));
