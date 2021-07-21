function main() {
  return new Promise((resolve, reject) => {
    console.log('tru');
    while (true) {}
  });
}

main().then(() => {
  console.log('Depois');
});
console.log('Saiu');

setTimeout(() => { console.log('setTimeout'); }, 0);
(() => new Promise(() => { console.log('Promise'); }))();
