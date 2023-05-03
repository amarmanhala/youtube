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



