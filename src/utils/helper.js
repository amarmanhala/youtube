export function getRandomName() {
  const names = [
    "Ava",
    "Emma",
    "Olivia",
    "Sophia",
    "Isabella",
    "Mia",
    "Charlotte",
    "Amelia",
    "Harper",
    "Evelyn",
    "Abigail",
    "Emily",
  ];

  const randomName = names[Math.floor(Math.random() * names.length)];
  return randomName;
}



export const getRandomSentence = () => {
  const words = ['happy', 'cat', 'jumped', 'over', 'the', 'moon'];
  let sentence = '';
  for (let i = 0; i < words.length; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    sentence += words[randomIndex] + ' ';
  }
  return sentence.trim() + '.';
};

export const convertViewsCount = (viewsCount) => {
  if (viewsCount >= 1000000000) {
    return (viewsCount / 1000000000).toFixed(1) + 'B'; // convert to billions and add "B"
  } else if (viewsCount >= 1000000) {
    return (viewsCount / 1000000).toFixed(1) + 'M'; // convert to millions and add "M"
  } else if (viewsCount >= 1000) {
    return (viewsCount / 1000).toFixed(1) + 'K'; // convert to thousands and add "K"
  } else {
    return viewsCount.toString(); // return the original number as a string
  }
}



