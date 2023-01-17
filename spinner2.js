// setTimeout(() => {process.stdout.write('\r|   '); }, 100);
// setTimeout(() => {process.stdout.write('\r/   '); }, 300);
// setTimeout(() => {process.stdout.write('\r-   '); }, 500);
// setTimeout(() => {process.stdout.write('\r\\   '); }, 700);
// setTimeout(() => {process.stdout.write('\r|   '); }, 900);
// setTimeout(() => {process.stdout.write('\r/   '); }, 1100);
// setTimeout(() => {process.stdout.write('\r-   '); }, 1300);
// setTimeout(() => {process.stdout.write('\r\\   '); }, 1500);
// setTimeout(() => {process.stdout.write('\r|   '); }, 1700);
// setTimeout(() => {process.stdout.write('\n'); }, 1900);

//var to track delay
//increment for timing
let array = [ '|', '/', '-', '\\', '|', '/', '-' , '\\', '|' ]
let delay = 100
for (let index = 0; index < array.length; index++) {
  setTimeout(() => {process.stdout.write(`\r${array[index]}   `); },delay );
  delay = delay + 200
}
setTimeout(() => {process.stdout.write('\n'); }, delay);
