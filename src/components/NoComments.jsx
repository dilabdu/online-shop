function NoComments({ product }) {
  return (
    <div>
      {product && (!product.comments || product.comments.length === 0) && (
        <div className="mb-5">
          <h3>Comments:</h3>
          <p className="italic opacity-70">No comments yet...</p>
        </div>
      )}
    </div>
  );
}

export default NoComments;
