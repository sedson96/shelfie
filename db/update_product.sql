UPDATE product
SET 
name = $1,
price = $2,
img_url = $3
WHERE id = $4;


SELECT * FROM product ORDER BY id;