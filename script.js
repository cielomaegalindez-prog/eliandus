/* Floating symbols */
const symbols = ["💖","💗","🌸"];

for (let i = 0; i < 25; i++) {
    let span = document.createElement("div");
    span.classList.add("floating");
    span.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = (6 + Math.random() * 10) + "s";
    document.body.appendChild(span);
}

/* Envelope open */
function openEnvelope(e) {
    document.getElementById("scene").classList.add("open");

    for (let i = 0; i < 25; i++) {
        createHeart(e.clientX, e.clientY);
    }

    setTimeout(() => {
        document.getElementById("scene").style.display = "none";
        document.getElementById("letterBox").style.display = "block";
        typeInkLetter();
    }, 900);
}

/* Hearts animation */
function createHeart(x, y) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";

    const angle = Math.random() * Math.PI * 2;
    const distance = 140 + Math.random() * 140;

    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
    heart.style.setProperty("--y", Math.sin(angle) * distance + "px");

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1200);
}

/* Letter content */
const fullText = [
"To My Dearest Eli,",
"Happy 1st Anniversary.",
"One year ago, we chose each other, and ever since then, my world has never been the same...",
"This past year has shown me that love isn't always grand gestures or perfect moments...",
"There are days when life feels overwhelming...",
"This year hasn't been without challenges...",
"Thank you for loving me in ways I didn't know I needed...",
"If I could ask for anything, it would simply be this...",
"Because among the billions of people in this world, I found someone who makes me feel understood...",
"And if life becomes too loud, let's take each other's hands...",
"After one beautiful year, I can say this with all my heart...",
"Because if there is one thing this year has taught me...",
"Happy 1st Anniversary, my love. I love you—today, tomorrow, and palagi. 🤍"
];

/* Typewriter effect */
function typeInkLetter() {
    const container = document.getElementById("letter");
    container.innerHTML = "";

    let i = 0;

    function writeLine() {
        if (i >= fullText.length) return;

        const line = document.createElement("div");
        line.className = "line";
        container.appendChild(line);

        let j = 0;
        const text = fullText[i];

        function writeChar() {
            if (j < text.length) {
                line.innerHTML += text[j];
                j++;
                setTimeout(writeChar, 22);
            } else {
                line.style.borderRight = "none";
                i++;
                setTimeout(writeLine, 500);
            }
        }

        writeChar();
    }

    writeLine();
}