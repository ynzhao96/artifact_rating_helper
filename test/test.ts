let list = [[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]];
list.forEach(l=> {
  l.sort(function(a,b) {
    if (a == 0) {
      return 1;
    } else if (b == 0) {
      return -1;
    } else {
      return a > b ? 1 : -1;
    }
  })
  console.log(l);
})


console.log(list);