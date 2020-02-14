CREATE TABLE shelfie_products 
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price INT,
    img TEXT
)

INSERT INTO shelfie_products 
(name , price, img)
VALUES 
('Black Flag Tee', 20, 'https://images-na.ssl-images-amazon.com/images/I/51YRpk1hXsL._AC_UX679_.jpg'),
('Joy Divison Tee', 25, 'https://80steess3.imgix.net/production/products/JOY002/unknown-pleasures-joy-division-t-shirt.master.png?w=500&h=750&fit=crop&usm=12&sat=15&auto=format&q=60&nr=15'),
('Bring Me The Horizon Tee', 18, 'https://images.backstreetmerch.com/images/products/bands/clothing/bmth/bsi_bmth69.gif');