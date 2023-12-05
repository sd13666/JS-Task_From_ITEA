// ---- #1 -------
// function numToDay(num) {
//   switch (num) {
//     case 1:
//       console.log("Понеділок");
//       break;
//     case 2:
//       console.log("Вівторок");
//       break;
//     case 3:
//       console.log("Середа");
//       break;
//     case 4:
//       console.log("Четвер");
//       break;
//     case 5:
//       console.log("П'ятниця");
//       break;
//     case 6:
//       console.log("Cубота");
//       break;
//     case 7:
//       console.log("Неділя");
//       break;
//     default:
//       console.log("Невірний номер дня");
//     };
//     return num;
// };

// numToDay(1);
// numToDay(2);
// numToDay(3);
// numToDay(4);
// numToDay(5);
// numToDay(6);
// numToDay(7);
// numToDay(8);
// --------------------------

// ---- #2 -------
// function firstLetterToUpperCase(str) {
//   str = str.replace(str[0],str[0].toUpperCase())
//   str = str.split('_')

//   console.log(str.map(function(word, index) {
//     if (index === 0) {
//       return word;
//     }
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }).join('')); 
// }

// firstLetterToUpperCase('var_text_hello');
// --------------------------

//---- #3 -------
// function arrOfX () {
//   let arr = [];
//   for (let i = 0; i < 10; i++) {
//     arr.push('X');
//   }
//   return console.log(arr);
// }

// arrOfX();
// --------------------------

//---- #4 -------