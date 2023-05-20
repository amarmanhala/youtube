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
  for (let i = 0; i < words.length - 2; i++) {
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
    return viewsCount?.toString(); // return the original number as a string
  }
}



export const formatDaysFromDate = (dateString) => {
  // Define the string representing the date


// Convert the string to a Date object
const date = new Date(dateString);

// Get the current date
const today = new Date();

// Calculate the difference between the two dates in milliseconds
const diffInMillis = today - date;

// Calculate the number of days, weeks and months from the difference in milliseconds
const diffInDays = diffInMillis / (1000 * 60 * 60 * 24);
const diffInWeeks = diffInDays / 7;
const diffInMonths = today.getMonth() - date.getMonth() + (12 * (today.getFullYear() - date.getFullYear()));

// Log the results
console.log(`Days: ${diffInDays.toFixed(0)}`);
console.log(`Weeks: ${diffInWeeks.toFixed(0)}`);
console.log(`Months: ${diffInMonths.toFixed(0)}`);
// Find the maximum value among the three values
const maxValue = Math.max(diffInDays, diffInWeeks, diffInMonths);
let prefix = "";
// Check if the difference in days is greater than or equal to 365
if (diffInDays >= 365) {
  console.log("1 year");
} else {
  // Find the maximum value among the three values
  const maxValue = Math.max(diffInDays, diffInWeeks, diffInMonths);

  // Determine which unit of time has the highest value and concatenate the appropriate string
  
  if (maxValue === diffInDays) {
    prefix = "days";
  } else if (maxValue === diffInWeeks) {
    prefix = "weeks";
  } else {
    prefix = "months";
  }

  // Log the maximum value with the appropriate prefix
  console.log(`Max value: ${maxValue.toFixed(0)} ${prefix}`);
}
return maxValue.toFixed(0) + " " + prefix + " ago";
}


