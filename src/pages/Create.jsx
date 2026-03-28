import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

function Create() {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [name, setName] = useState("");
  const [guarantee, setGuarantee] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [storage, setStorage] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = uuidv4();
    setIsPending(true);
    await setDoc(doc(db, "products", id), {
      name,
      price,
      category,
      storage,
      image,
      description,
      guarantee,
    });
    setIsPending(false);
    navigate("/");
  };

  return (
    <section>
      <div className="align-content">
        <h1 className="text-3xl text-center mb-5">Create new Product</h1>
        <form onSubmit={handleSubmit} className="w-96 mx-auto">
          <label className="flex flex-col gap-1 mb-5">
            <span className="">Name:</span>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              required
              className="input w-full"
              placeholder="write a Product Name"
            />
          </label>
          <label className="flex flex-col gap-1 mb-5">
            <span className="">Category:</span>
            <input
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              type="text"
              required
              className="input w-full"
              placeholder="write a Product Category"
            />
          </label>
          <label className="flex flex-col gap-1 mb-5">
            <span className="">Price:</span>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="number"
              required
              className="input w-full"
              placeholder="write a Product Price"
            />
          </label>
          <label className="flex flex-col gap-1 mb-5">
            <span className="">Guarantee:</span>
            <input
              onChange={(e) => setGuarantee(e.target.value)}
              value={guarantee}
              type="text"
              required
              className="input w-full"
              placeholder="write a Product Guarantee"
            />
          </label>
          <label className="flex flex-col gap-1 mb-5">
            <span className="">Storage:</span>
            <input
              onChange={(e) => setStorage(e.target.value)}
              value={storage}
              type="text"
              required
              className="input w-full"
              placeholder="write a Product Name"
            />
          </label>
          <label className="flex flex-col gap-1 mb-5">
            <span className="">Image Url:</span>
            <input
              onChange={(e) => setImage(e.target.value)}
              value={image}
              type="URL"
              required
              className="input w-full"
              placeholder="write a Product URL"
            />
          </label>
          <label className="flex flex-col gap-1 mb-5">
            <span className="">Description:</span>
            <textarea
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
              className="input w-full"
              placeholder="write a Product Name"
            />
          </label>
          <button type="submit" className="btn btn-primary w-full">
            Create Product
          </button>
          {isPending && (
            <button type="submit" disabled className="btn btn-primary w-full">
              Create Product
            </button>
          )}
        </form>
      </div>
    </section>
  );
}

export default Create;
