import { useState } from "react";
import { useFirestore } from "../hooks/useFirestore";
import { v4 as uuidv4 } from "uuid";
import { useGlobalContext } from "../hooks/useGlobal.context";

function AddComment({ product }) {
  const [comment, setComment] = useState("");
  const { user } = useGlobalContext();
  const { updateDocument } = useFirestore("products");
  const handleSubmit = (e) => {
    e.preventDefault();

    updateDocument(product.id, {
      comments: [
        ...product.comments,
        {
          text: comment,
          author: {
            name: user.displayName,
            uid: user.uid,
            photoURL: user.photoURL,
          },
          createdAt: new Date().getTime(),
          id: uuidv4(),
        },
      ],
    });
    setComment("");
  };
  return (
    <div>
      <h3>Add Comment:</h3>
      <form onSubmit={handleSubmit}>
        {/* this is my Comment */}
        <textarea
          className="textarea w-full resize-none"
          placeholder="Write your comment here..."
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-secondary mt-2">
          Add Comment
        </button>
      </form>
    </div>
  );
}

export default AddComment;
