var a = '';
for (var i = 1; i <= 7 ; i++) {
    a += i;
    for (var j = 6; j >= i; j--) {
        a +=0;

    }
    a += '\n'
}

console.log(a)