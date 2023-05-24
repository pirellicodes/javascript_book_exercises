//What will this code print
console.log(false ?? null);
console.log(true ?? (1 + 2));
console.log((1 + 2) ?? true);
console.log(null ?? false);
console.log(undefined ?? (1 + 2));
console.log((1 + 2) ?? null);
console.log(null ?? undefined);
console.log(undefined ?? null);

//line2: false
//3: true
//4: 3
//5: false
//6: 3
//7: 3
//8: undefined
//9: null