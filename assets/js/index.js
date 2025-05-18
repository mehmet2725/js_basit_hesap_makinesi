let sayi1 = Number(prompt(`1. Sayıyı Giriniz`));
let sayi2 = Number(prompt(`2. Sayıyı Giriniz`));

let islem = prompt(`Yapmak istediğimiz işlemi giriniz(+, -, *, /) olarak yazınız.`);

alert(`İşleminizin Sonucunu Konsoldan Görüntüleyebilirsiniz`);

if(islem === `+`){
    console.log(`İşlem Sonucunuz: ${sayi1 + sayi2}`);
}
else if(islem === `-`){
    console.log(`işlem Sonucunuz: ${sayi1 - sayi2}`);
}
else if(islem === `*`){
    console.log(`işlem Sonucunuz: ${sayi1 * sayi2}`);
}
else if(islem === `/`){
    console.log(`işlem Sonucunuz: ${sayi1 / sayi2}`);
}