const paragraph = document.getElementById("myParagraph");

const words = paragraph.innerText.toLowerCase().split(/\W+/);

const wordCount = {};
for (const word of words) {
  if (word.trim() !== "") {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
}

const wordFrequency = Object.entries(wordCount);

wordFrequency.sort((a, b) => b[1] - a[1]);



const wordCloudContainer = document.getElementById("myWordCloud");


let cloudHTML = "";
const maxFontSize = 64;
for (let i = 0; i < Math.min(12, wordFrequency.length); i++) {
  const [word, count] = wordFrequency[i];
  const fontSize = maxFontSize - i * 4; 
  cloudHTML += `<span style="font-size: ${fontSize}px">${word}</span> `;
}


wordCloudContainer.innerHTML = cloudHTML;