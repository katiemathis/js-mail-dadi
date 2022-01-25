// crea un prompt per l'user - chiedendo il suo indirizzo email
// controlla che sia sulla lista degli utenti autorizzati
// output: messaggio di accesso o no


const mailList = ['butterfly123@hotmail.com','sbtbcrew@gmail.com','lavitaebella@yahoo.it','shrek@gmail.com'];

let email = prompt('Inserire il tuo indirizzo email');

let login

for (let i = 0; i < mailList.length; i++) {

    console.log(i, mailList[i]);

    if(mailList[i] == email) {
        login = true;
        console.log('success');
        document.getElementById('hidden').innerHTML ='<p>Ora si gioca contro il computer. Chi sceglie il numero più alto, vince. Per giocare... </p><button type="button" class="btn btn-primary ms-1">Clicca qui</button>'
    } 

    if(login == true) {
        document.getElementById('accesso').innerHTML = 'Benvenuto!';
    } else {
        document.getElementById('accesso').innerHTML = 'Mi dispiace - non hai accesso a questa pagina';
    }
}

const button = document.querySelector('button');

button.addEventListener('click', event => {
  prompt('Inserisci un numero da 1 a 6:');
});
