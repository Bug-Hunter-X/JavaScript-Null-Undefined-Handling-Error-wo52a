function foo(a) {
  if (a === null || a === undefined) {
    return 0;
  } else if (Array.isArray(a)){
    return a.length;
  } else {
    return 0; // Or handle other cases appropriately
  }
}

console.log(foo(null)); // 0
console.log(foo([1, 2, 3])); // 3
console.log(foo(undefined)); // 0
console.log(foo(5)); //0