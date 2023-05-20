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
    <div className="my-4 flex flex-row items-center p-2 rounded-xl">
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
        { comment.replies.length === 0 ? null : <button className="text-blue-500 font-bold text-sm">{comment.replies.length} replies</button> }
        <div className="border-l-2 ml-8">
          <CommentList commentsData={comment.replies} />
        </div>
      </div>
    );
  });

const CommentsContainer = ({ commentCounts }) => {
  const formatCommentCounts = commentCounts.toLocaleString("en-US");
  return (
    <div className="mt-12 text-white">
      <h1 className="font-bold">{formatCommentCounts} &nbsp;Comments</h1>
      <CommentList commentsData={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
