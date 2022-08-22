function tageImMonat(month, year) {
    return new Date(year, month, 0).getDate();
}


console.log(tageImMonat(1, 2016))
// 31

console.log(tageImMonat(2, 2016));
// 29

console.log(tageImMonat(2, 2017))
// 28

console.log(tageImMonat(12, 2017))
// 31