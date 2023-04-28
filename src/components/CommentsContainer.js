import React from "react";
import { MdPeople } from "react-icons/md";

//Nested dummy comments
const CommentsData = [
  {
    name: "Amarpreet singh",
    comment: "Lorem fhegfh fhegfhe fgegf gfheghf fgheg",
    replies: [
      {
        name: "Amarpreet singh",
        comment: "Lorem fhegfh fhegfhe fgegf gfheghf fgheg",
        replies: [
          {
            name: "Amarpreet singh",
            comment: "Lorem fhegfh fhegfhe fgegf gfheghf fgheg",
            replies: [],
          },
        ],
      },
      {
        name: "Amarpreet singh",
        comment: "Lorem fhegfh fhegfhe fgegf gfheghf fgheg",
        replies: [],
      },
    ],
  },
  {
    name: "Amarpreet singh",
    comment: "Lorem fhegfh fhegfhe fgegf gfheghf fgheg",
    replies: [],
  },
  {
    name: "Amarpreet singh",
    comment: "Lorem fhegfh fhegfhe fgegf gfheghf fgheg",
    replies: [],
  },
  {
    name: "Amarpreet singh",
    comment: "Lorem fhegfh fhegfhe fgegf gfheghf fgheg",
    replies: [],
  },
  {
    name: "Amarpreet singh",
    comment: "Lorem fhegfh fhegfhe fgegf gfheghf fgheg",
    replies: [],
  },
  {
    name: "Amarpreet singh",
    comment: "Lorem fhegfh fhegfhe fgegf gfheghf fgheg",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="my-4 flex flex-row items-center bg-zinc-800 p-2 rounded-xl">
      <MdPeople size={30} />
      <div className="ml-4">
        <h5>
          <b>{name}</b>
        </h5>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentList = ({ commentsData }) =>
  commentsData.map((comment) => {
    return (
      <div>
        <Comment data={comment} />
        <div className="border-l-2 ml-8">
          <CommentList commentsData={comment.replies} />
        </div>
      </div>
    );
  });

const CommentsContainer = () => {
  return (
    <div className="mt-12 text-white">
      <h1>Comments</h1>
      <CommentList commentsData={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
