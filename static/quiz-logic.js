const btnA   = document.querySelector('#btnA');
const btnB = document.querySelector('#btnB');
const btnC   = document.querySelector('#btnC');

let puntosHTML = document.querySelectorAll('small');
puntosHTML[0].innerText  = 0;
let respuesta = "A"
let puntosacumulados = 0;

const chequear_respuesta = (respuesta) => {
    const respuestacorrecta = 'A';
    console.log(respuesta===respuestacorrecta);
    // puntosacumulados    
    if (respuesta===respuestacorrecta){
        puntosacumulados += 100;
        puntosHTML[0].innerText = puntosacumulados;
        btnA.className = `box-content bg-green-700 h-100px w-128px p-4 border-4 rounded-lg disabled:opacity-50`

    } else if (respuesta==='B'){
        let btn = document.querySelector(`#btnB`);
        btn.className = `box-content bg-red-700 h-100px w-128px p-4 border-4 rounded-lg disabled:opacity-50`
        btnA.className = `box-content bg-green-700 opacity-50 h-100px w-128px p-4 border-4 rounded-lg disabled:opacity-50`
    } else if (respuesta==='C'){
        let btn = document.querySelector(`#btnC`);
        btn.className = `box-content bg-red-700 h-100px w-128px p-4 border-4 rounded-lg disabled:opacity-50`
        btnA.className = `box-content bg-green-700 opacity-50 h-100px w-128px p-4 border-4 rounded-lg disabled:opacity-50`

    }
    btnA.disabled   = true;
    btnB.disabled = true;
    btnC.disabled = true;
}


btnA.addEventListener('click', () => {
    respuesta = 'A';
    console.log(respuesta);
    chequear_respuesta(respuesta)
})

btnB.addEventListener('click', () => {
    respuesta = 'B';
    console.log(respuesta);
    chequear_respuesta(respuesta)
})

btnC.addEventListener('click', () => {
    respuesta = 'C';
    console.log(respuesta);
    chequear_respuesta(respuesta)
})
