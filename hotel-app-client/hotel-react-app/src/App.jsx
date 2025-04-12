// import './App.css'
import Home from "./components/home/Home";
import AddRoom from "./components/room/AddRoom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditRoom from "./components/room/EditRoom";
import ExistingRoom from "./components/room/ExistingRoom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import RoomListing from "./components/room/RoomListing";
import Admin from "./components/admin/Admin";
import Checkout from "./components/bookings/Checkout";
import BookingSuccess from "./components/bookings/BookingSuccess";
import Bookings from "./components/bookings/Bookings";
import FindBookings from "./components/bookings/FindBookings";
import {AuthProvider} from "./components/auth/AuthProvider";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import Profile from "./components/auth/Profile";
import Logout from "./components/auth/Logout";
import RequireAuth from "./components/auth/RequireAuth";
import RequireAdmin from "./components/auth/RequireAdmin";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <main>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/add-room"
              element={
                <RequireAdmin>
                  <AddRoom />
                </RequireAdmin>
              }
            />
            <Route
              path="/edit-room/:roomId"
              element={
                <RequireAdmin>
                  <EditRoom />
                </RequireAdmin>
              }
            />
            <Route path="/existing-rooms" element={<ExistingRoom />} />
            <Route path="/book-room/:roomId" element={<Checkout />} />
            <Route path="/success-error" element={<BookingSuccess />} />
            <Route path="/browse-all-rooms" element={<RoomListing />} />
            
            {/* Protect admin routes */}
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/existing-bookings"
              element={
                  <Bookings />
              }
            />
            
            <Route path="/find-booking" element={<FindBookings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Router>
        <Footer />
      </main>
    </AuthProvider>
  );
}

export default App;
