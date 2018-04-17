console.log('Hello,kunjani');


var toiletriesDept = {name: 'toiletries',total: 5007};
var groceriesDept = {name: 'groceries',total: 11089};
var pharmacyDept = {name: 'pharmacy',total: 7321};
var bakeryDept = {name: 'bakery',total: 10073};
var butcheryDept = {name: 'butchery',total: 9053};

/*console.log('toiletriesDept');
console.log('groceriesDept')
console.log('pharmacyDept')
console.log('bakeryDept')
console.log('butcheryDept')
*/
var depts = [];
depts.push(toiletriesDept);
  depts.push(groceriesDept);
  depts.push(pharmacyDept);
  depts.push(bakeryDept);
  depts.push(butcheryDept);
  // for(var i=0; i<depts.length;i++){
  //   console.log(depts[i].total);
  // }
  function grandTotal(depts){
    var total = 0;
    for (var i=0;i<depts.length;i++){
      total += depts[i].total;
    }
    return total;
}
