const paragraphElement = document.getElementById("myParagraph");
const wordsArray = paragraphElement.innerText.toLowerCase().split(/\W+/);

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const wordCountDictionary = {};
for (const word of wordsArray) {
  if (word.trim() !== "") {
    wordCountDictionary[word] = (wordCountDictionary[word] || 0) + 1;
  }
}

const wordFrequencyArray = Object.entries(wordCountDictionary);

wordFrequencyArray.sort((a, b) => b[1] - a[1]);

const wordCloudContainerElement = document.getElementById("myWordCloud");

let cloudHTMLString = "";
const maxFontSizeNumber = 64;

const numWordsToDisplayNumber = 12;

const cloudRadiusNumber = 100;
const rotationRangeNumber = 90;

for (let i = 0; i < numWordsToDisplayNumber; i++) {
  const [word, count] = wordFrequencyArray[i];
  const fontSizeNumber = maxFontSizeNumber - i * 4;
  const wordColorString = getRandomColor();

  const angleNumber = (Math.random() - 0.5) * rotationRangeNumber;
  const xNumber = cloudRadiusNumber * Math.cos((i / numWordsToDisplayNumber) * Math.PI * 2 + angleNumber);
  const yNumber = cloudRadiusNumber * Math.sin((i / numWordsToDisplayNumber) * Math.PI * 2 + angleNumber);

  cloudHTMLString += `<span style="font-size: ${fontSizeNumber}px; color: ${wordColorString}; transform: translate(${xNumber}px, ${yNumber}px) rotate(${angleNumber}deg);">${word}</span> `;
}

wordCloudContainerElement.innerHTML = cloudHTMLString;