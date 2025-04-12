//makes text bigger
function makeTextBigger() {
    alert("Hello, world!");
    document.getElementById("userText").style.fontSize = "24pt";
}

function changeStyle() {
    const textArea = document.getElementById("userText");
    const fancyRadio = document.getElementById("fancy");

    if (fancyRadio.checked) {
        alert("FancyShmancy selected!");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        alert("BoringBetty selected!");
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    const textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();

    //split into sentences using period as a separator
    let sentences = text.split(".");

    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i].trim();
        if (sentence.length === 0) continue; //skip empty strings
        let words = sentence.split(" ");
        if (words.length > 0) {
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    //join the sentences back with ". " and trim excess
    textArea.value = sentences.join(". ").trim();
}

