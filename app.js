let para = document.getElementsByClassName('paragraphe');

for (let i = 0; i <= para.length; i++) {
    if(i === para.length - 1) {
        break;
    }
    if((i + 1) % 2 === 0) {
        continue;
    }
    para[i].innertext = i + 1;
}