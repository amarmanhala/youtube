import React from "react";

const SkeltonVideoCards = () => {
  const numberOfSkeltons = Array(20).fill("");
  console.log(numberOfSkeltons);
  return (
    <div className="flex flex-row flex-wrap">
      {numberOfSkeltons.map(() => (
        <div className="w-96 h-60 bg-zinc-900 rounded-xl m-4"></div>
      ))}
    </div>
  );
};

export default SkeltonVideoCards;
