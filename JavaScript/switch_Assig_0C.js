function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log("The 1nd Month is Jan");
      break;

    case 2:
      console.log("The 2nd Month is Feb");
      break;
    case 3:
      console.log("The 3nd Month is March");
      break;
    case 4:
      console.log("The 4nd Month is April");
      break;
    case 5:
      console.log("The 5nd Month is May");
      break;
    case 6:
      console.log("The 6nd Month is Jun");
      break;
    case 7:
      console.log("The 7nd Month is July");
      break;
    case 8:
      console.log("The 8nd Month is Aug");
      break;
    case 9:
      console.log("The 9nd Month is Sep");
      break;
    case 10:
      console.log("The 2nd Month is Oct");
      break;
    case 11:
      console.log("The 2nd Month is Nov");
      break;
    case 12:
      console.log("The 2nd Month is Dec");
      break;
    default:
      console.log(`invalid Month ${monthNumber}`);
  }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);