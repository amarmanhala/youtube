const getRandomColor = () => {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};

const AvatarInitials = ({ name }) => {
  getRandomColor();
  let Initials = "";
  const words = name?.split(" ");
  if (words?.length === 1) {
    Initials = words[0].charAt(0);
  }

  if (words?.length >= 2) {
    Initials = words[0].charAt(0) + words[1].charAt(0);
  }

  return (
    <div
      className={`bg-zinc-800 flex justify-center w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] rounded-full items-center text-white font-medium text-sm sm:font-semibold`}
    >
      {Initials}
    </div>
  );
};

export default AvatarInitials;
