function checkCashRegister(price, cash, cid) {
  let change = Math.round((cash - price) * 100);
  let value = 0;
  let changeRecord = [];
  let currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  let status = "";

  for (let elem of cid) {
    elem[1] = Math.round(elem[1] * 100);
  }

  function enoughFund(cid) {
    let sum = cid.filter((elem, i) => change >= currency[i]);
    return sum.reduce((a, b) => {
      return a + b[1];
    }, 0);
  }

  if (enoughFund(cid) < change) {
    status = "INSUFFICIENT_FUNDS";
  } else if (enoughFund(cid) === change) {
    status = "CLOSED";
    changeRecord = cid;
  } else {
    status = "OPEN"
    for (let i = cid.length - 1; i > -1; i--) {
      value = 0;
      while (cid[i][1] > 0 && change >= currency[i] && change != 0) {
        change -= currency[i];
        cid[i][1] -= currency[i];
        value += currency[i];
      }
      if (value > 0) {
        changeRecord.push([cid[i][0], value]);
      }
    }
  }

  for (let elem of changeRecord) {
    elem[1] = elem[1] / 100;
  }

  return {status: status, change: changeRecord};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);