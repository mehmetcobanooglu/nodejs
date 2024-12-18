const math = require('./math');

try {
    const toplama = math.sum(27, 23);
    console.log(`Toplama İşlemin Sonucu:${toplama}`);
}
catch (error) {
    console.error(`Hata Mesaji : ${error.message}`)
}
try {
    const carpma = math.multiply(25, 2);
    console.log(`Çarpma İşleminin Sonucu:${carpma}`);

} catch (error) {
    console.error(`Hata Mesaji : ${error.message}`)
}
try {
    const cikarma = math.subtract(52, "d");
    console.log(`Çıkarma İşleminin Sonucu:${cikarma}`);
} catch (error) {
    console.error(`Hata Mesaji : ${error.message}`)
}
try {
    const bolme = math.divide(100, 0);
    console.log(`Bölme İşleminin Sonucu:${bolme}`);


} catch (error) {
    console.error(`Hata Mesaji : ${error.message}`)
}



