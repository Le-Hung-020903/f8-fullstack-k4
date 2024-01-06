CREATE DATABASE " database_01_hungdinh"

-- Tạo bảng courses
CREATE TABLE IF NOT EXISTS public.courses
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "Tên khóa học" character varying COLLATE pg_catalog."default" NOT NULL,
    "Giá khóa học" real,
    content text COLLATE pg_catalog."default" NOT NULL,
    teacher_id integer NOT NULL,
    active integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone,
    description text COLLATE pg_catalog."default",
    CONSTRAINT courses_pkey PRIMARY KEY (id),
    CONSTRAINT courses_teacher_id_foreign FOREIGN KEY (teacher_id)
        REFERENCES public.teacher (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

-- Tạo bảng teacher
CREATE TABLE IF NOT EXISTS public.teacher
(
    id integer NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    bio text COLLATE pg_catalog."default",
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT teacher_pkey PRIMARY KEY (id)
)
-- Thêm trường description trước trường detail với kiểu dữ liệu và ràng buộc sau:
-- Kiểu text
-- NULL
-- Đổi tên trường detail thành content và ràng buộc chuyển thành NOT NULL
ALTER TABLE courses ADD COLUMN description text
ALTER TABLE courses RENAME COLUMN detail to content 
ALTER TABLE courses ALTER COLUMN content SET NOT NULL

-- Sửa tên và giá từng khóa học thành tên mới và giá mới 
-- (Tên khóa học, giá khóa học các khóa học không được giống nhau)
ALTER TABLE courses RENAME COLUMN name TO "Tên khóa học"
ALTER TABLE courses RENAME COLUMN price TO "Giá khóa học"

-- Thêm 3 giảng viên vào bảng teacher, mỗi giảng viên thêm 3 khóa học

INSERT INTO teacher (id, name,bio)
VALUES (1,'Tạ Hoàng An','Anh An number one'),
		(2,'Đặng Ngọc Sơn','Anh Sơn number two'),
		(3,'Lưu Anh Quân','Anh Quân number one');
		
INSERT INTO courses ("Tên khóa học", "Giá khóa học", content, teacher_id, active,updated_at)
VALUES 
    ('JS', 1000,'học lập trình để đi làm',1,1,NOW()),
    ('SCSS', 2000,'học lập trình để đi làm',1,1,NOW()),
    ('REACTJS', 3000,'học lập trình để đi làm',1,1,NOW()),
    ('NEXTJS', 1000,'học lập trình để đi làm',2,1,NOW()),
    ('C', 2000,'học lập trình để đi làm',2,1,NOW()),
    ('C++', 3000,'học lập trình để đi làm',2,1,NOW()),
    ('JAVA', 1000,'học lập trình để đi làm',3,1,NOW()),
    ('C#', 2000,'học lập trình để đi làm',3,1,NOW()),
    ('PHP', 3000,'học lập trình để đi làm',3,1,NOW());

-- Lưu lại thời gian sửa sau cùng
UPDATE courses
SET "Tên khóa học" = 'new js',  "Giá khóa học" = 5000, updated_at=NOW()
WHERE id =10


SELECT * FROM courses
SELECT * FROM teacher
SELECT id, "Tên khóa học" FROM courses
SELECT id, name FROM teacher


