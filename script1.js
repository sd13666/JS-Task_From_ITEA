/* 1. Зробіть функцію, яка приймає параметром число від 1 до 7, 
а повертає день тижня українською мовою.*/

// -- 1-й варіант -----
function numToDay(num) {
  
  switch (num) {
    case 1:
      console.log("Понеділок");
      break;
    case 2:
      console.log("Вівторок");
      break;
    case 3:
      console.log("Середа");
      break;
    case 4:
      console.log("Четвер");
      break;
    case 5:
      console.log("П'ятниця");
      break;
    case 6:
      console.log("Cубота");
      break;
    case 7:
      console.log("Неділя");
      break;
    default:
      num = 0;
    };
    return num;
};

numToDay(1);
numToDay(2);
numToDay(3);
numToDay(4);
numToDay(5);
numToDay(6);
numToDay(7);