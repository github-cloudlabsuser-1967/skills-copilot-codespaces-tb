-- create a table with 5 coloumns customer_id, customer_fname, customer_lname, customer_phone, customer_address
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_fname VARCHAR(50),
    customer_lname VARCHAR(50),
    customer_phone VARCHAR(15),
    customer_address VARCHAR(100)
);
-- insert 5 records into the table
INSERT INTO customers (customer_id, customer_fname, customer_lname, customer_phone, customer_address) VALUES
(1, 'John', 'Doe', '123-456-7890', '123 Elm St'),
(2, 'Jane', 'Smith', '234-567-8901', '456 Oak St'),
(3, 'Jim', 'Brown', '345-678-9012', '789 Pine St'),
(4, 'Jake', 'White', '456-789-0123', '101 Maple St'),
(5, 'Jill', 'Green', '567-890-1234', '202 Birch St');
-- select all records from the table
SELECT * FROM customers;
-- update the phone number of customer with id 1
UPDATE customers SET customer_phone = '111-222-3333' WHERE customer_id = 1;
-- delete the record of customer with id 2
DELETE FROM customers WHERE customer_id = 2;
-- select all records from the table after update and delete
SELECT * FROM customers;
