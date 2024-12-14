//Foto html
document.addEventListener('DOMContentLoaded', () => {
    let sec1 = document.getElementById('idfoto1');
    sec1.addEventListener('mouseover', () => {
        let elementos = document.getElementsByClassName('foto1');
        Array.from(elementos).forEach((elemento) =>
            elemento.className = 'fotohtml')
    });
    sec1.addEventListener('mouseout', () => {
        let elementos = document.getElementsByClassName('fotohtml');
        Array.from(elementos).forEach((elemento) =>
            elemento.className = 'foto1')
    });
});
//Foto css
document.addEventListener('DOMContentLoaded', () => {
    let sec1 = document.getElementById('idfoto2');
    sec1.addEventListener('mouseover', () => {
        let elementos = document.getElementsByClassName('foto2');
        Array.from(elementos).forEach((elemento) =>
            elemento.className = 'fotocss')
    });
    sec1.addEventListener('mouseout', () => {
        let elementos = document.getElementsByClassName('fotocss');
        Array.from(elementos).forEach((elemento) =>
            elemento.className = 'foto2')
    });
});
//Foto js
document.addEventListener('DOMContentLoaded', () => {
    let sec1 = document.getElementById('idfoto3');
    sec1.addEventListener('mouseover', () => {
        let elementos = document.getElementsByClassName('foto3');
        Array.from(elementos).forEach((elemento) =>
            elemento.className = 'fotojs')
    });
    sec1.addEventListener('mouseout', () => {
        let elementos = document.getElementsByClassName('fotojs');
        Array.from(elementos).forEach((elemento) =>
            elemento.className = 'foto3')
    });
});

