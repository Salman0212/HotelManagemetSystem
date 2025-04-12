// import React from 'react'

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";

const BookingsTable = ({ bookingInfo, handleBookingCancellation }) => {
  const [bookings, setBookings] = useState(bookingInfo);

  useEffect(() => {
    setBookings(bookingInfo);
  }, [bookingInfo]);

  const formatDate = (dateString) => {
    return moment(dateString).format("MMM Do, YYYY");
  };

  return (
    <section className="p-4">
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Booking ID</th>
            <th>Room ID</th>
            <th>Room Type</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
            <th>Guest Name</th>
            <th>Guest Email</th>
            <th>Adults</th>
            <th>Children</th>
            <th>Total Guest</th>
            <th>Confirmation Code</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {bookings.map((booking, index) => (
            <tr key={booking.bookingId}>
              <td>{index + 1}</td>
              <td>{booking.bookingId}</td>
              <td>{booking.room.id}</td>
              <td>{booking.room.roomType}</td>
              <td>{formatDate(booking.checkInDate)}</td>
              <td>{formatDate(booking.checkOutDate)}</td>
              <td>{booking.guestFullName}</td>
              <td>{booking.guestEmail}</td>
              <td>{booking.numOfAdults}</td>
              <td>{booking.numOfChildren}</td>
              <td>{booking.totalNumOfGuests}</td>
              <td>{booking.bookingConfirmationCode}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleBookingCancellation(booking.bookingId)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {bookings.length === 0 && (
        <p className="text-center">No bookings found.</p>
      )}
    </section>
  );
};

BookingsTable.propTypes = {
  bookingInfo: PropTypes.arrayOf(
    PropTypes.shape({
      bookingId: PropTypes.string,
      room: PropTypes.shape({
        id: PropTypes.string,
        roomType: PropTypes.string
      }),
      checkInDate: PropTypes.string,
      checkOutDate: PropTypes.string,
      guestFullName: PropTypes.string,
      guestEmail: PropTypes.string,
      numOfAdults: PropTypes.number,
      numOfChildren: PropTypes.number,
      totalNumOfGuests: PropTypes.number,
      bookingConfirmationCode: PropTypes.string
    })
  ).isRequired,
  handleBookingCancellation: PropTypes.func.isRequired
};

export default BookingsTable;
