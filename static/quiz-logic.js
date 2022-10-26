const btnA   = document.querySelector('#btnA');
const btnB = document.querySelector('#btnB');
const btnC   = document.querySelector('#btnC');

const puntosHTML = document.querySelectorAll('small');
puntosHTML.innerText  = 0;


const chequear_respuesta = (respuesta) => {
    const respuestacorrectaA = 'A';

    // puntosacumulado    
    if (respuesta==respuestacorrectaA){
        puntosacumulados += 500;

        btnA.className = `box-content bg-green-700 h-100px w-128px p-4 border-4 rounded-lg`

    } else{
        let btn = document.querySelector(`#btn${respuesta}`);
        btn.className = `box-content bg-red-700 h-100px w-128px p-4 border-4 rounded-lg`
        btnA.className = `box-content bg-green-700 opacity-50 h-100px w-128px p-4 border-4 rounded-lg`
    }
    btnA.disabled   = true;
    btnB.disabled = true;
    btnC.disabled = true;
}


btnA.addEventListener('click', () => {
    respuesta = 'A'
    chequear_respuesta(respuesta)
})

btnB.addEventListener('click', () => {
    respuesta = 'B'
    chequear_respuesta(respuesta)
})

btnB.addEventListener('click', () => {
    respuesta = 'C'
    chequear_respuesta(respuesta)
})
