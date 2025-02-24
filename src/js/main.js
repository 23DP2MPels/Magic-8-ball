const answer = [
    "Tas ir droši",
    "Tas noteikti tā ir",
    "Bez šaubām",
    "Jā, noteikti",
    "Jūs varat paļauties uz to",
    "Kā es redzu, jā",
    "Visticamāk",
    "Izskatās labi",
    "Jā",
    "Debesis norāda uz jā",
    "Atbildēt miglains, mēģiniet vēlreiz",
    "Jautā vēlreiz vēlāk",
    "Labāk jums tagad nesaki",
    "Tagad nevar paredzēt",
    "Koncentrējieties un jautājiet vēlreiz",
    "Neceri uz to",
    "Mana atbilde ir nē",
    "Mani avoti saka nē",
    "Izredzes nav tik labas",
    "Ļoti apšaubāmi",
    "Es redzu uz tevis lāstu"
]

function getRandomItem() {
    const randomIndex = Math.floor(Math.random() * answer.length);

    // get random item
    const item = answer[randomIndex];

    document.getElementById("otvet").innerHTML = item;
}

document.getElementById("ask").addEventListener("click", getRandomItem);

//const ask_button = document.getElementById("otvet"); 
//changeButton.addEventListener("click", getRandomItem);
//document.getElementById("otvet").innerHTML = getRandomItem;
