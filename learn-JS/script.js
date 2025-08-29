let header_by_class_1 = document.querySelector('.red');
let header_by_teg_1 = document.querySelector('h1');
let button_1 = document.querySelector('#button-1');
let count = 0;
const test_string = 10;


console.log('привет header_by_class_1 = ', header_by_class_1);
console.log('тип переменной test_string = ', typeof(test_string));
console.log('приветствую header_by_teg_1 = ', header_by_teg_1);
console.log('текст из хедера 1 ', document.querySelector('.red').textContent);

header_by_class_1.classList.add('blue-bg');

button_1.addEventListener('click', function() {
    header_by_class_1.classList.toggle('blue-bg');
    count = count + 1;
    header_by_class_1.textContent = 'МЕНЯ НАЖАЛИ ' + count + ' раз';
});