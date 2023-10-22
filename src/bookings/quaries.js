const getAllBookings="SELECT * FROM bookings";
const addBookings = "INSERT INTO bookings (bookingid , date , bill , customerid) VALUES ($1, $2, $3, $4)  RETURNING *";



module.exports = {
    getAllBookings,addBookings
}