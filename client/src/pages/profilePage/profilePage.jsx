import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequests";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {

  const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate()

  /*   useEffect(() => {
      if (!currentUser) {
        navigate("/login");
      }
    }, [currentUser, navigate]) */

  const handleLogout = async () => {
    try {
      //const res = apiRequest.post("/auth/logout");
      await apiRequest.post("/auth/logout");

      updateUser(null)
      //localStorage.removeItem("user")
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }
  return (
    //currentUser && (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Info</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Profile Photo:
              <img
                src={currentUser.avatar || "noavatar.png"}
                alt=""
              />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              Email: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Log out</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to ="/add">
              <button>Create Post</button>
            </Link>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>)
  //);
}

export default ProfilePage;