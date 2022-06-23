import React from "react";
import { useRouter } from "next/router";

function Comment() {
  const commentId = useRouter().query.commentId;
  const todoId = useRouter().query.id;

  return (
    <h1>
      comment number {commentId} from todo {todoId}
    </h1>
  );
}

export default Comment;
