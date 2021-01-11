var array = [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3]
var kel1 = [1,2,33,44,55,33,44,22,44,33]
var kel2 = [2,77,66,1,2,3,4,5,6,7,89]
var kel3 = [3,3,8,9,75,4,3,2,2,1,3]
var sum = (accumulator, currentValue) => accumulator + currentValue;

console.log('Total nilai dari setiap kelompok:')
console.log('Total nilai kelompok 1 = '+kel1.reduce(sum))
console.log('Total nilai kelompok 2 = '+kel2.reduce(sum))
console.log('Total nilai kelompok 3 = '+kel3.reduce(sum))
console.log('\n')
console.log('Rata-rata nilai dari setiap kelompok:')
console.log('Rata-rata nilai kelompok 1 = '+kel1.reduce(sum)/kel1.length)
console.log('Rata-rata nilai kelompok 2 = '+kel2.reduce(sum)/kel2.length)
console.log('Rata-rata nilai kelompok 3 = '+kel3.reduce(sum)/kel3.length)
console.log('\n')
console.log('Nilai tertinggi dan terendah dari setiap kelompok:')
console.log('Kelompok 1 : ' + 'tertinggi = ' + Math.max.apply(Math, kel1) + ', terendah = ' + Math.min.apply(Math, kel1))
console.log('Kelompok 2 : ' + 'tertinggi = ' + Math.max.apply(Math, kel2) + ', terendah = ' + Math.min.apply(Math, kel2))
console.log('Kelompok 3 : ' + 'tertinggi = ' + Math.max.apply(Math, kel3) + ', terendah = ' + Math.min.apply(Math, kel3))
