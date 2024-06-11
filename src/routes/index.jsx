import { Routes, Route } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { PostCreate } from "../pages/PostCreate";
import { PostView } from "../pages/PostView";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/new-post" element={<PostCreate />} />
      <Route path="/post/:postId" element={<PostView />} />
    </Routes>
  );
}
