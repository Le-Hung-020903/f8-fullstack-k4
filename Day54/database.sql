CREATE DATABASE database_03_ledinhhung
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
CREATE TABLE IF NOT EXISTS public.booking
(
    id character(15) COLLATE pg_catalog."default" NOT NULL,
    room_id character(15) COLLATE pg_catalog."default",
    customer_id character(15) COLLATE pg_catalog."default",
    booking_date date,
    start_time time with time zone,
    end_time time with time zone,
    deposits real,
    note text COLLATE pg_catalog."default",
    status character(20) COLLATE pg_catalog."default",
    CONSTRAINT booking_pkey PRIMARY KEY (id),
    CONSTRAINT booking_customer_id_foreign FOREIGN KEY (customer_id)
        REFERENCES public.customers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT booking_room_id_foreign FOREIGN KEY (room_id)
        REFERENCES public.room (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)


CREATE TABLE IF NOT EXISTS public.customers
(
    id character(15) COLLATE pg_catalog."default" NOT NULL,
    name character varying COLLATE pg_catalog."default",
    location character varying COLLATE pg_catalog."default",
    phone_number character varying COLLATE pg_catalog."default",
    CONSTRAINT customers_pkey PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS public.room
(
    id character(15) COLLATE pg_catalog."default" NOT NULL,
    type_room character varying COLLATE pg_catalog."default",
    maximun integer,
    price real,
    description text COLLATE pg_catalog."default",
    CONSTRAINT room_pkey PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS public.services
(
    id character(15) COLLATE pg_catalog."default" NOT NULL,
    name character varying COLLATE pg_catalog."default",
    units character varying COLLATE pg_catalog."default",
    price real,
    CONSTRAINT services_pkey PRIMARY KEY (id)
)


CREATE TABLE IF NOT EXISTS public.using_the_service
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    booking_room_id character(15) COLLATE pg_catalog."default",
    service_id character(15) COLLATE pg_catalog."default",
    quantity integer,
    CONSTRAINT using_the_service_pkey PRIMARY KEY (id),
    CONSTRAINT uts_booking_room_id_foreign FOREIGN KEY (booking_room_id)
        REFERENCES public.booking (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT uts_service_id_foreign FOREIGN KEY (service_id)
        REFERENCES public.services (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

INSERT INTO public.customers (id,name,location,phone_number)
VALUES ('KH0001','Nguyen Van A', 'Hoa xuan', '1111111111'),
		('KH0002','Nguyen Van B', 'Hoa hai', '1111111112'),
		('KH0003','Phan Van A', 'Cam le', '1111111113'),
		('KH0004','Phan Van A', 'Hoa xuan', '1111111114');
		
INSERT INTO public.room(id,type_room,maximun,price)
VALUES ('P0001','Loai 1', 20, 60000),
		('P0002','Loai 1', 25, 80000),
	   ('P0003','Loai 2', 15, 60000),
	   ('P0004','Loai 3', 20, 50000);
		
INSERT INTO public.services(id,name,units,price)
VALUES ('DV001','Berr', 'lon', 10000),
		('DV002','Nuoc ngot', 'lon', 8000),
		('DV003','Trai cay', 'dia', 35000),
		('DV004','Khan uot', 'cai', 2000);

INSERT INTO public.booking (id,room_id,customer_id,booking_date,start_time,end_time,deposits,status)
VALUES ('DP001','P0001','KH0002','2018-03-26','11:00', '13:30',100000, 'Da dat'),
 		('DP002','P0001' ,'KH0003','2018-03-27','17:15', '19:15',50000, 'Da huy'),
		 ('DP003','P0002','KH0002','2018-03-26','20:30', '22:15',100000, 'Da dat'),
		  ('DP004','P0003','KH0001','2018-04-01','19:30', '21:15',200000, 'Da dat');

INSERT INTO public.using_the_service(booking_room_id,service_id,quantity)
VALUES ('DP001','DV001',20),
		('DP001','DV003',3),
		('DP001','DV002',10),	
		('DP002','DV002',10),
		('DP002','DV003',1),
		('DP003','DV003',2),
		('DP003','DV004',10);

-- câu 1:
SELECT
    b.id AS "MaDatPhong",
    r.id AS "MaPhong",
    r.type_room AS "LoaiPhong",
    r.price AS "GiaPhong",
    c.name AS "TenKH",
    b.booking_date AS "NgayDat",
    (r.price * ((EXTRACT (EPOCH FROM b.end_time) - EXTRACT(EPOCH FROM b.start_time)) / 3600)) AS "TongTienHat",
    COALESCE(SUM(uts.quantity * s.price), 0) AS "TongTienSuDungDichVu",
    (r.price * ((EXTRACT (EPOCH FROM b.end_time) - EXTRACT(EPOCH FROM b.start_time)) / 3600) + COALESCE(SUM(uts.quantity * s.price), 0)) AS "TongTienThanhToan"
FROM
    booking AS b
INNER JOIN room AS r ON b.room_id = r.id
INNER JOIN customers AS c ON b.customer_id = c.id
LEFT JOIN using_the_service AS uts ON b.id = uts.booking_room_id
LEFT JOIN services AS s ON uts.service_id = s.id
GROUP BY
    b.id, r.id, c.name, b.booking_date, b.start_time, b.end_time, r.type_room, r.price
ORDER BY
    b.id;

-- Cau 2:
select c.*, b.status
from customers as c
inner join booking as b
on c.id = b.customer_id
where status = 'Da dat' and c.location = 'Hoa xuan'

-- cau 3: 
select r.id, r.type_room, r.maximun, r.price, count(b.room_id) as "so lan dat"
from room as r
inner join booking as b
on r.id = b.room_id
where b.status = 'Da dat'
group by b.room_id, r.id
having  count(b.room_id) >= 2
		
SELECT * FROM public.customers
SELECT * FROM public.room
SELECT * FROM public.services
SELECT * FROM public.booking
SELECT * FROM public.using_the_service