import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { auth } from "../firebase/config";
import { updateProfile } from "firebase/auth";
import { toast } from "sonner";

function Profile() {
  const { user, dispatch } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(auth.currentUser, {
      photoURL: image,
      displayName: name,
    });
    dispatch({
      type: "login",
      payload: { ...user, photoURL: image, displayName: name },
    });
    toast.success("Profil updated!");
  };
  return (
    <section>
      <div className="align-content my-10">
        <h1 className="text-3xl font-medium">Profile Page</h1>
        <div className="card">
          <div className="card-body">
            {user.photoURL ? (
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                  <img src={user.photoURL} />
                </div>
              </div>
            ) : (
              <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-24 rounded-full">
                  <span className="text-3xl">No User</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <h3>{user.displayName ? user.displayName : "No Name"}</h3>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="w-96 mx-auto">
              <label className="flex flex-col gap-1">
                <span>Image:</span>
                <input
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                  type="URL"
                  className="input w-full"
                  placeholder="Your Image URL"
                  required
                />
              </label>
              <label className="flex flex-col gap-1">
                <span>Name:</span>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  className="input w-full"
                  placeholder="Your Image Name"
                  required
                />
              </label>
              <div className="mt-10">
                <button className="btn btn-outline btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
