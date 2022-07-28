import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Landing, Error, Register, ProtectedRoute } from "./pages";
// import {
//   Profile,
//   AddJob,
//   AllJobs,
//   Stats,
//   SharedLayout,
// } from "./pages/dashboard";
import { lazy, Suspense } from "react";

const ProtectedRoute = lazy(() =>
  import("./pages").then(({ ProtectedRoute }) => ({ default: ProtectedRoute }))
);
const SharedLayout = lazy(() =>
  import("./pages/dashboard").then(({ SharedLayout }) => ({
    default: SharedLayout,
  }))
);
const Stats = lazy(() =>
  import("./pages/dashboard").then(({ Stats }) => ({ default: Stats }))
);
const AllJobs = lazy(() =>
  import("./pages/dashboard").then(({ AllJobs }) => ({ default: AllJobs }))
);
const AddJob = lazy(() =>
  import("./pages/dashboard").then(({ AddJob }) => ({ default: AddJob }))
);
const Profile = lazy(() =>
  import("./pages/dashboard").then(({ Profile }) => ({ default: Profile }))
);
const Landing = lazy(() =>
  import("./pages").then(({ Landing }) => ({ default: Landing }))
);
const Register = lazy(() =>
  import("./pages").then(({ Register }) => ({ default: Register }))
);
const Error = lazy(() =>
  import("./pages").then(({ Error }) => ({ default: Error }))
);

function App() {
  return (
    <BrowserRouter>
        <Suspense fallback={<h1>Loading..........</h1>}>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <SharedLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Stats />} />
              <Route path="all-jobs" element={<AllJobs />} />
              <Route path="add-job" element={<AddJob />} />
              <Route path="profile" element={<Profile />} />
              <Route path="stats" element={<Stats />} />
            </Route>
            <Route path="/landing" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <ToastContainer position="top-center" />
        </Suspense>
    </BrowserRouter>
  );
}

export default App;
