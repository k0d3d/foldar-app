export const orderState = function (num) {
  let returnVal;
  switch (parseInt(num)) {
    case -1:
      returnVal = "cancelled";
      break;
    case 0:
      returnVal = "cart";
      break;
    case 1:
      returnVal = "pending order";
      break;
    case 2:
      returnVal = "received";
      break;
    case 3:
      returnVal = "supplied";
      break;
    case 4:
      returnVal = "order paid";
      break;
    case 5:
      returnVal = "complete";
      break;
    default:
      returnVal = "processing";
      break;
  }

  return returnVal;
};
