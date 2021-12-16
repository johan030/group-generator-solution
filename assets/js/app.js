function addParticipant(event) {

    event.preventDefault();
    // je récupere l'input du participant
    const nameInputElt = document.getElementById('nameInput');


    // je crée mon prénom
    const participantName = nameInputElt.value.trim();

    //si le nom est vide j'affiche un message d'erreur
    if (participantName === '') {
        alert('le nom est obligatoire');
        return;
    }


    //je cree un element ul qui contient mon prénom
    const participantElt = document.createElement('li');
    participantElt.textContent = participantName;
    participantElt.classList.add("participant");
    /*
    const participantElt =  `
    <li>${participantName}</li> 
      `;
    */

    // je récupere l'élément ul qui contient la liste des participants

    const participantListElt = document.getElementById("participantList");
    /*  participantListElt.innerHTML = participantListElt.innerHTML + participantElt;*/
    participantListElt.appendChild(participantElt);

    //Je vide l'input nameInput
    nameInputElt.value = "";
}

// Je récupere le formulaire d'ajout de nom

const addNameFormElt = document.getElementById("addNameForm");

//quand on soumet le formulaire , je veux que la fonction addParticipant soit appelée.

addNameFormElt.addEventListener("submit", addParticipant);


const participants = ["Grégory", "julien", "Nicolas", "Pierre", "paul", "jacques", "johan"];
const numberGroups = 3;

function generateGroups(participants, numberGroups) {
    //Je veux trier un tableau de nom alatoirement

    // La fonction map prend un tableau en entrée
    //applique une fonction sur chaque element du tableau
    //et retourne un nouveau tableau
    const sorted = participants
        .map((participant) => ({ name: participant, sort: Math.random() }))

        .sort((a, b) => a.sort - b.sort)
        .map((participant) => participant.name)
    //je veux generer des groupes de nom
    const groupsArr = [];
    for (i = 0; i < numberGroups; i++) {
        groupsArr.push([]);
    }
    var groupsArrIndex = 0;
    while (sorted.length > 0) {
        groupsArr[groupsArrIndex].push(sorted.pop());
        groupsArrIndex++;
        if (groupsArrIndex >= groupsArr.length) {
            groupsArrIndex = 0;
        }
    }

    console.log(groupsArr);
    //je veux afficher les groupes sur la page
    const groupListElt = document.getElementById("groupList");

    groupListElt.innerHTML = "";

    for (let groupIndex = 0; groupIndex < groupsArr.length; groupIndex++) {
        let groupElt = `
  <div class="card bg-light mb-3" style="max-width: 20rem;">
<div class="card-header">Groupe ${groupIndex + 1}</div>
<div class="card-body">
 <ul>
 
 `
        for (participantIndex = 0; participantIndex < groupsArr[groupIndex].length; participantIndex++) {
            groupElt += `<li>${groupsArr[groupIndex][participantIndex]}</li>`;
        }

        groupElt +=
            ` </ul> 
</div>
</div>

`
        groupListElt.innerHTML += groupElt;
    }

}
const generateForm = document.getElementById("generateGroup");
generateForm.addEventListener('submit', function (event) {

    event.preventDefault();
    const numberGroups = parseInt(document.getElementById('groupNumber').value);
    const participants = [];
    const participantsElt = document.querySelectorAll('.participant');

    participantsElt.forEach(element => participants.push(element.textContent));






    generateGroups(participants, numberGroups);



})

