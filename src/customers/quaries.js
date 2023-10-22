const getAllCustomer="SELECT * FROM customer";
const checkCustomer="SELECT * FROM customer WHERE phone = $1 AND clubid = $2";
const addCustomer="INSERT INTO customer (phone, customername ,facilities, broadcast , clubid) VALUES ($1, $2, $3, $4, $5)  RETURNING *";
const getListCustomer=`SELECT customer.*, SUM(bookings.bill) AS total_bill,COUNT(bookings.bill) AS booking_count
FROM customer
JOIN bookings ON  CAST(customer.id as VARCHAR(255)) = bookings.customerid GROUP BY customer.id`

const updateQuery = (item) => {
    let body = { quarirs: "UPDATE customer SET ", bodyData: [] }
    Object.keys(item).forEach((key, index) => {
        body.quarirs += index != Object.keys(item).length - 1 ? `${key} = $${index + 1}, ` : `${key} = $${index + 1}`;
        body.bodyData.push(item[key])
    })
    body.quarirs += ` WHERE id = $${Object.keys(item).length + 1}  RETURNING *`;
    return body;
}


module.exports = {
    getAllCustomer,checkCustomer,addCustomer,updateQuery,getListCustomer
}