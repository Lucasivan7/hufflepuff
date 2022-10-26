// import { initializeApp } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js";
// import { getFirestore, doc, UpdateDoc  } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js";


// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//     // ...
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

const btnA   = document.querySelector('#btnA');
const btnB = document.querySelector('#btnB');
const btnC   = document.querySelector('#btnC');

const puntosHTML = document.querySelectorAll('small');
puntosHTML.innerText  = 0;

const chequear_respuesta = (respuesta) => {
    const respuestacorrectaA = 'A';
    const puntos_por_id = doc(db, "puntos-acumulados", `${id}`);

    // puntosacumulado    
    if (respuesta==respuestacorrectaA){
        puntosacumulados = puntosacumulados + 100;
        // UpdateDoc(puntos_por_id, {
        //     puntos: puntosacumulados
        // });
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
