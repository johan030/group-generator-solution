function addParticipant(event){

    event.preventDefault();
    // je récupere l'input du participant
    const nameInputElt = document.getElementById('nameInput');


    // je crée mon prénom
    const participantName = nameInputElt.value.trim();

    //si le nom est vide j'affiche un message d'erreur
    if(participantName === ''){
        alert('le nom est obligatoire');
        return;
    }


    //je cree un element ul qui contient mon prénom
    const participantElt =  `
    <li>${participantName}</li> 
      `;
    

    // je récupere l'élément ul qui contient la liste des participants

    const participantListElt = document.getElementById("participantList");
    participantListElt.innerHTML = participantListElt.innerHTML + participantElt;

    //Je vide l'input nameInput
    nameInputElt.value = "";
} 

// Je récupere le formulaire d'ajout de nom

const addNameFormElt = document.getElementById("addNameForm");

//quand on soumet le formulaire , je veux que la fonction addParticipant soit appelée.

addNameFormElt.addEventListener("submit", addParticipant);



