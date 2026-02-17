const botellasPequenas = document.querySelectorAll('.botellas .botella');
const litros = document.getElementById('litros');
const porcentaje = document.getElementById('porcentaje');
const restante = document.getElementById('restante');
actualizarBotellaGrande();
botellasPequenas.forEach((botella, index) => {
    botella.addEventListener('click', () => resaltarBotellas(index));
});
function resaltarBotellas(index) {
    if (
        botellasPequenas[index].classList.contains('llena') &&
        !botellasPequenas[index].nextElementSibling?.classList.contains('llena')
    ) {
        index--;
    }
    botellasPequenas.forEach((botella, i) => {
        if (i <= index) {
            botella.classList.add('llena');
        } else {
            botella.classList.remove('llena');
        }
    });
    actualizarBotellaGrande();
}
function actualizarBotellaGrande() {
    const llenas = document.querySelectorAll('.botellas .botella.llena').length;
    const total = botellasPequenas.length;

    if (llenas === 0) {
        porcentaje.style.visibility = 'hidden';
        porcentaje.style.height = 0;
    } else {
        porcentaje.style.visibility = 'visible';
        porcentaje.style.height = `${(llenas / total) * 330}px`;
        porcentaje.innerText = `${(llenas / total) * 100}%`;
    }

    if (llenas === total) {
        restante.style.visibility = 'hidden';
        restante.style.height = 0;
    } else {
        restante.style.visibility = 'visible';
        litros.innerText = `${2 - (250 * llenas / 1000)}L`;
    }
}