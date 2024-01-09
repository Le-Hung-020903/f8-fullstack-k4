CREATE DATABASE database_02_ledinhhung
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
-- table customer
CREATE TABLE IF NOT EXISTS public.customers
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name character varying COLLATE pg_catalog."default",
    email character varying COLLATE pg_catalog."default",
    phone_number character(15) COLLATE pg_catalog."default",
    CONSTRAINT customers_pkey PRIMARY KEY (id)
)

-- table product
CREATE TABLE IF NOT EXISTS public.products
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name character varying COLLATE pg_catalog."default",
    price real,
    CONSTRAINT products_pkey PRIMARY KEY (id)
)

-- table order_list
CREATE TABLE IF NOT EXISTS public.order_list
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    customers_id integer,
    "Total_product_quantity" integer,
    "Total_order_amount" real,
    "Order_status" boolean,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT order_list_pkey PRIMARY KEY (id),
    CONSTRAINT order_list_customer_id_foreign FOREIGN KEY (customers_id)
        REFERENCES public.customers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

-- table order_details
CREATE TABLE IF NOT EXISTS public.order_details
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    order_id integer,
    product_id integer,
    quantity integer,
    item_amount real,
    CONSTRAINT order_details_pkey PRIMARY KEY (id),
    CONSTRAINT order_details_order_id_foreign FOREIGN KEY (order_id)
        REFERENCES public.order_list (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT order_details_product_id_foreign FOREIGN KEY (product_id)
        REFERENCES public.products (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

INSERT INTO customers (name, email, phone_number)
VALUES  ('Ta Hoang An', 'hoangan@gmail.com', '0123456789'),
		('Dang Ngoc Khai', 'ngockhai@gmail.com', '0123456789'),
		('Dang Ngoc Son', 'dangson@gmail.com', '0123456789');


INSERT INTO products(name, price)
VALUES		('kem danh rang', 1000),
			('bat chen', 2000),
			('may tinh', 3000);

INSERT INTO order_list(customers_id,Total_product_quantity, Total_order_amount, Order_status)
VALUES 		(1, 2, 10000, true),
			(2, 2, 20000, false),
			(3,1,30000, true);
			
INSERT INTO order_details (order_id,product_id, quantity, item_amount)
VALUES  	(1, 1,2,2000),
			(2, 2,3,6000),
			(3, 3,2,6000);

-- xem danh sách đơn hàng
SELECT 
    order_list.id,
    customers.name,
    customers.email,
    customers.phone_number,
    order_list.total_product_quantity,
    order_list.total_order_amount,
    order_list.order_status
FROM 
    order_list 
JOIN 
    customers ON order_list.id = customers.id;

SELECT * FROM customers
SELECT * FROM products
SELECT * FROM  order_details
SELECT * FROM order_list

