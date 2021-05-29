-- 1
USE Pixar;

SELECT m.title, b.domestic_sales, b.international_sales
FROM Movies m
INNER JOIN BoxOffice b
ON b.movie_id = m.id;

-- 3
SELECT m.title, b.rating
FROM Movies m
INNER JOIN BoxOffice b
ON b.movie_id = m.id
order by b.rating DESC;

-- 5
SELECT
    t.id,
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM Theater t
RIGHT JOIN Movies m
ON t.id = m.theater_id
ORDER BY t.name;

-- 7
SELECT rating FROM BoxOffice
WHERE movie_id IN (
    SELECT id FROM Movies
    WHERE year > 2009
);
    
SELECT b.rating
FROM BoxOffice b
INNER JOIN Movies m
ON b.movie_id = m.id
WHERE m.year > 2009;
