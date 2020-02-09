function fibonacci(limit) {
  const list = [0, 1];
  let nextNum = 0;
  let thisNum = 1;
  let lastNum = 0;
  while (list.length < limit) {
    nextNum = thisNum + lastNum;
    lastNum = thisNum;
    thisNum = nextNum;
    list.push(thisNum);
  }
  return list;
}

console.log(fibonacci(100));
