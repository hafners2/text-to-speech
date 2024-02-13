const textArea = document.querySelector(".textarea");
const convertBtn = document.querySelector(".convertBtn");
let isSpeaking = true;

const convertToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = textArea.value;
    const utternance = new SpeechSynthesisUtterance(text);
    synth.speak(utternance);

    if(!synth.speaking && text) {
        const utternance = new SpeechSynthesisUtterance(text);
        synth.speak(utternance);
    }

    if(synth.speaking && isSpeaking) {
        convertBtn.innerHTML = "Pause";
        synth.resume();
        isSpeaking = false;
    } else {
        button.innerHTML = "Resume";
        synth.pause();
        isSpeaking = true;
    }
}

convertBtn.addEventListener("click", convertToSpeech);