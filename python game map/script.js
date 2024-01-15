var countries = {
    "angola": "afrique",
    "bénin": "afrique",
    "botswana": "afrique",
    "burkina": "afrique",
    "burundi": "afrique",
    "cameroun": "afrique",
    "cap vert": "afrique",
    "république centrafricaine": "afrique",
    "tchad": "afrique",
    "comores": "afrique",
    "congo": "afrique",
    "congo, république démocratique du": "afrique",
    "djibouti": "afrique",
    "égypte": "afrique",
    "guinée équatoriale": "afrique",
    "érythrée": "afrique",
    "éthiopie": "afrique",
    "gabon": "afrique",
    "gambie": "afrique",
    "ghana": "afrique",
    "guinée": "afrique",
    "guinée-bissau": "afrique",
    "côte d'ivoire": "afrique",
    "kenya": "afrique",
    "lesotho": "afrique",
    "libéria": "afrique",
    "libye": "afrique",
    "madagascar": "afrique",
    "malawi": "afrique",
    "mali": "afrique",
    "mauritanie": "afrique",
    "maurice": "afrique",
    "maroc": "afrique",
    "mozambique": "afrique",
    "namibie": "afrique",
    "niger": "afrique",
    "nigéria": "afrique",
    "rwanda": "afrique",
    "sao tomé et principe": "afrique",
    "sénégal": "afrique",
    "seychelles": "afrique",
    "sierra leone": "afrique",
    "somalie": "afrique",
    "afrique du sud": "afrique",
    "soudan du sud": "afrique",
    "soudan": "afrique",
    "swaziland": "afrique",
    "tanzanie": "afrique",
    "togo": "afrique",
    "tunisie": "afrique",
    "ouganda": "afrique",
    "zambie": "afrique",
    "zimbabwe": "afrique",
    "afghanistan": "asie",
    "bahreïn": "asie",
    "bangladesh": "asie",
    "bhoutan": "asie",
    "brunei": "asie",
    "birmanie (myanmar)": "asie",
    "cambodge": "asie",
    "chine": "asie",
    "timor oriental": "asie",
    "inde": "asie",
    "indonésie": "asie",
    "iran": "asie",
    "irak": "asie",
    "israël": "asie",
    "japon": "asie",
    "jordanie": "asie",
    "kazakhstan": "asie",
    "corée du nord": "asie",
    "corée, sud": "asie",
    "koweït": "asie",
    "kirghizistan": "asie",
    "laos": "asie",
    "liban": "asie",
    "malaisie": "asie",
    "maldives": "asie",
    "mongolie": "asie",
    "népal": "asie",
    "oman": "asie",
    "pakistan": "asie",
    "philippines": "asie",
    "qatar": "asie",
    "fédération de russie": "asie",
    "arabie saoudite": "asie",
    "singapour": "asie",
    "sri lanka": "asie",
    "syrie": "asie",
    "tadjikistan": "asie",
    "thaïlande": "asie",
    "turquie": "asie",
    "turkménistan": "asie",
    "émirats arabes unis": "asie",
    "ouzbékistan": "asie",
    "vietnam": "asie",
    "yémen": "asie",
    "albanie": "europe",
    "andorre": "europe",
    "arménie": "europe",
    "autriche": "europe",
    "azerbaïdjan": "europe",
    "biélorussie": "europe",
    "belgique": "europe",
    "bosnie-herzégovine": "europe",
    "bulgarie": "europe",
    "croatie": "europe",
    "chypre": "europe",
    "république tchèque": "europe",
    "danemark": "europe",
    "estonie": "europe",
    "finlande": "europe",
    "france": "europe",
    "géorgie": "europe",
    "allemagne": "europe",
    "grèce": "europe",
    "hongrie": "europe",
    "islande": "europe",
    "irlande": "europe",
    "italie": "europe",
    "lettonie": "europe",
    "liechtenstein": "europe",
    "lituanie": "europe",
    "luxembourg": "europe",
    "macédoine": "europe",
    "malte": "europe",
    "moldavie": "europe",
    "monaco": "europe",
    "monténégro": "europe",
    "pays-bas": "europe",
    "norvège": "europe",
    "pologne": "europe",
    "portugal": "europe",
    "roumanie": "europe",
    "saint-marin": "europe",
    "serbie": "europe",
    "slovaquie": "europe",
    "slovénie": "europe",
    "espagne": "europe",
    "suède": "europe",
    "suisse": "europe",
    "ukraine": "europe",
    "royaume-uni": "europe",
    "vatican": "europe",
    "antigua et barbuda": "amérique du nord",
    "bahamas": "amérique du nord",
    "barbade": "amérique du nord",
    "belize": "amérique du nord",
    "canada": "amérique du nord",
    "costa rica": "amérique du nord",
    "cuba": "amérique du nord",
    "dominique": "amérique du nord",
    "république dominicaine": "amérique du nord",
    "el salvador": "amérique du nord",
    "grenade": "amérique du nord",
    "guatemala": "amérique du nord",
    "haïti": "amérique du nord",
    "honduras": "amérique du nord",
    "jamaïque": "amérique du nord",
    "mexique": "amérique du nord",
    "nicaragua": "amérique du nord",
    "panama": "amérique du nord",
    "saint-kitts-et-nevis": "amérique du nord",
    "sainte-lucie": "amérique du nord",
    "saint-vincent-et-les grenadines": "amérique du nord",
    "trinidad et tobago": "amérique du nord",
    "états-unis": "amérique du nord",
    "australie": "océanie",
    "fidji": "océanie",
    "kiribati": "océanie",
    "îles marshall": "océanie",
    "micronésie": "océanie",
    "nauru": "océanie",
    "nouvelle-zélande": "océanie",
    "palaos": "océanie",
    "papouasie-nouvelle-guinée": "océanie",
    "samoa": "océanie",
    "îles salomon": "océanie",
    "tonga": "océanie",
    "tuvalu": "océanie",
    "vanuatu": "océanie",
    "argentine": "amérique du sud",
    "bolivie": "amérique du sud",
    "brésil": "amérique du sud",
    "chili": "amérique du sud",
    "colombie": "amérique du sud",
    "équateur": "amérique du sud",
    "guyane": "amérique du sud",
    "paraguay": "amérique du sud",
    "pérou": "amérique du sud",
    "suriname": "amérique du sud",
    "uruguay": "amérique du sud",
    "venezuela": "amérique du sud"
};

var answer = Object.keys(countries)[Math.floor(Math.random() * Object.keys(countries).length)];
var attempts = 0;

function checkGuess() {
    var guess = document.getElementById("guessInput").value.toLowerCase().trim();
    attempts++;

    if (!guess) {
        alert("Veuillez entrer un nom de pays.");
        return;
    }

    if (!(guess in countries)) {
        alert("Le pays saisi n'existe pas dans la liste.");
        document.getElementById("guessInput").value = '';
        return;
    }

    var isContinentCorrect = countries[guess] === countries[answer];
    var isFirstLetterCorrect = guess[0] === answer[0];
    var isLastLetterCorrect = guess[guess.length - 1] === answer[answer.length - 1];

    var table = document.getElementById("guessTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    newRow.innerHTML = `
        <td>${guess}</td>
        <td class="${isContinentCorrect ? 'correct' : 'incorrect'}">${isContinentCorrect ? 'Oui' : 'Non'}</td>
        <td class="${isFirstLetterCorrect ? 'correct' : 'incorrect'}">${isFirstLetterCorrect ? 'Oui' : 'Non'}</td>
        <td class="${isLastLetterCorrect ? 'correct' : 'incorrect'}">${isLastLetterCorrect ? 'Oui' : 'Non'}</td>
    `;

    if (guess === answer) {
        document.getElementById("feedback").innerText = `Bravo! Vous avez trouvé le pays en ${attempts} essais.`;
        document.getElementById("guessInput").disabled = true;
        document.getElementById("guessButton").disabled = true;
    } else {
        document.getElementById("feedback").innerText = "Essayez encore.";
    }

    document.getElementById("guessInput").value = '';
    document.getElementById("attemptCount").innerText = `Nombre d'essais : ${attempts}`;
}

function giveUp() {
    alert(`Le pays était : ${answer}`);
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessButton").disabled = true;
}

document.getElementById("guessButton").addEventListener('click', checkGuess);
document.getElementById("giveUpButton").addEventListener('click', giveUp);

document.getElementById("guessInput").addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
