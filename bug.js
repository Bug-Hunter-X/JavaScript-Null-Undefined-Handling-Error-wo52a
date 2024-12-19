function foo(a) {
  if (a == null) {
    return 0;
  } else {
    return a.length;
  }
}

console.log(foo(null)); // 0
console.log(foo([1, 2, 3])); // 3
console.log(foo(undefined)); // TypeError: Cannot read properties of undefined (reading 'length')