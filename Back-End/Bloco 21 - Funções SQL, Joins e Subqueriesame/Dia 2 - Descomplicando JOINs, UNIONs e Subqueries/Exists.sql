SELECT * FROM hotel.Books;
SELECT * FROM hotel.Books_Lent;

-- 1
SELECT id, title 
FROM hotel.Books AS b
WHERE NOT EXISTS(
	SELECT *
    FROM hotel.Books_Lent
    WHERE b.id = book_id
);

-- 2 
SELECT * FROM hotel.Books;
SELECT * FROM hotel.Books_Lent;

SELECT id, title
FROM hotel.Books AS b
WHERE EXISTS(
	SELECT *
    FROM hotel.Books_Lent
    WHERE b.id = book_id AND b.Title LIKE '%lost%'
);

-- 3
SELECT * FROM hotel.CarSales;
SELECT * FROM hotel.Customers;

SELECT name 
FROM hotel.Customers AS c
WHERE(
	SELECT *
    FROM CarSales
    WHERE Customerid = c.Customerid
);

