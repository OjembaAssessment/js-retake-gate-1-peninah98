const paragraph = document.getElementById("myParagraph");
const words = paragraph.innerText.toLowerCase().split(/\W+/);

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const wordCount = {};
for (const word of words) {
  if (word.trim() !== "") {
    wordCount[word] = (wordCount[word] || 0) + 1
  }
}

const wordFrequency = Object.entries(wordCount)

wordFrequency.sort((a, b) => b[1] - a[1])

const wordCloudContainer = document.getElementById("myWordCloud")

let cloudHTML = ""
const maxFontSize = 64

const numWordsToDisplay = 12

const cloudRadius = 100
const rotationRange = 90 

for (let i = 0; i < numWordsToDisplay; i++) {
  const [word, count] = wordFrequency[i];
  const fontSize = maxFontSize - i * 4;
  const wordColor = getRandomColor();

  
  const angle = (Math.random() - 0.5) * rotationRange;
  const x = cloudRadius * Math.cos((i / numWordsToDisplay) * Math.PI * 2 + angle);
  const y = cloudRadius * Math.sin((i / numWordsToDisplay) * Math.PI * 2 + angle);

  cloudHTML += `<span style="font-size: ${fontSize}px; color: ${wordColor}; transform: translate(${x}px, ${y}px) rotate(${angle}deg);">${word}</span> `;
}

wordCloudContainer.innerHTML = cloudHTML
