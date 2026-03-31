import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useFirestore } from "../hooks/useFirestore";
import { auth } from "../firebase/config";
import { serverTimestamp } from "firebase/firestore";
import InputFiled from "../components/inputs/InputFiled";
import TextArea from "../components/inputs/TextArea";

function Create() {
  const uid = auth.currentUser.uid;
  const navigate = useNavigate();

  const { addDocument, isPending } = useFirestore("products");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const id = uuidv4();

    await addDocument(null, {
      ...data,
      uid,
      comments: [],
      createAt: serverTimestamp(),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <section className="py-10">
      <div className="align-content">
        <h1 className="text-3xl text-center mb-5">Create new Product</h1>
        <form onSubmit={handleSubmit} className="w-96 mx-auto">
          <InputFiled
            label="Name:"
            type="text"
            placeholder=" write your product name"
            name="name"
          />
          <InputFiled
            label="Category:"
            type="text"
            placeholder="write a product category"
            name="category"
          />
          <InputFiled
            label="Price:"
            type="number"
            placeholder="write a product price"
            name="price"
          />
          <InputFiled
            label="Guarantee:"
            type="number"
            placeholder="write a product guarantee"
            name="guarantee"
          />
          <InputFiled
            label="Storage:"
            type="number"
            placeholder="write a product storage"
            name="storage"
          />
          <InputFiled
            label="Image Url:"
            type="url"
            placeholder="write a product image Url"
            name="image url"
          />
          {/* Description */}
          <TextArea
            name="Description"
            placeholder="write a product description"
          />
          {!isPending && (
            <button type="submit" className="btn btn-primary w-full">
              Create Product
            </button>
          )}
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
