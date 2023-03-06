function error(message: string): never {
  throw new Error(message);
}
try {
  let result = error('エラー');
  console.log(result);
} catch (e) {
  console.log(e);
}
// never型呼んだ場所に戻ってこのない
//void 型はreturn される値がない
interface class mainOj {
    id:number;
    name:string;
}
let ob: Object = { name: 'naoki' };
let profile: {} = { name: '' };
