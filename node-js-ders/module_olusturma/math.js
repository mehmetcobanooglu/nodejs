function sum(a,b){

    if(typeof a !== 'number' || typeof b!== 'number'){
           throw new Error("Toplama İşleminde Sadece Sayılar Kullanılabilir.");
           
    }
    return a + b;
}


function multiply(a,b){

    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('Çarpma İşleminde Sadece Sayilar Kullanilabilir.');
    }
    return a * b;
}

function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Bölme İşleminde Sadece Sayilar Kullanilabilir.');
    }
    if (b === 0) {
        throw new Error('Bir Sayi Sifira Bölünemez.');
    }
    return a / b;
}
function subtract(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('Çıkarma İşleminde Sadece Sayilar Kullanilabilir.');
    }
    return a - b;
}
module.exports = {
    sum,multiply,divide,subtract
}
