import React from "react";
import { auth } from "./fireBase";
import Homescreen from "./Components/Homescreen";
import LoginScreen from "./Components/LoginScreen";
import ProfileScreen from "./Components/ProfileScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  console.log(user);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        console.log(userAuth);
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      {/* using react-router for routing (handling requests.) */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!user ? <LoginScreen /> : <Homescreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
