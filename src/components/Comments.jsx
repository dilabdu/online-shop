import { auth } from "../firebase/config";

function Comments({ product }) {
  const author = auth.currentUser;
  return (
    <>
      {product && product.comments?.length > 0 && (
        <div className="my-5">
          <h3>Comments:</h3>

          {product &&
            product.comments?.map((comment) => {
              return (
                <div
                  key={comment.id}
                  className={`chat ${
                    comment.author.uid === author.uid && "chat-end"
                  }`}
                >
                  <div>
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt={comment.author.name}
                          src={comment.author?.photoURL}
                        />
                      </div>
                    </div>

                    <div className="chat-header">{comment.author.name}</div>

                    <div className="chat-bubble">{comment.text}</div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}

export default Comments;
