import { useState } from "react";
import { useFirestore } from "../hooks/useFirestore";
import { auth } from "../firebase/config";
import { v4 as uuidv4 } from "uuid";

function AddComment({ product }) {
  const [comment, setComment] = useState("");

  const { updateDocument } = useFirestore("products");
  const handleSubmit = (e) => {
    e.preventDefault();

    updateDocument(product.id, {
      comments: [
        ...(product.comments || []),
        {
          text: comment,
          author: {
            name: author.displayName,
            uid: author.uid,
            photoURL: author.photoURL,
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
