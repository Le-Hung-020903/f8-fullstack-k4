--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: devices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.devices (
    id integer NOT NULL,
    name character varying(50),
    browsers character varying(50),
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    user_id integer,
    ip character varying(50)
);


ALTER TABLE public.devices OWNER TO postgres;

--
-- Name: Devices_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.devices ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Devices_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying,
    email character varying,
    status boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    password character varying
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: devices; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.devices (id, name, browsers, created_at, updated_at, user_id, ip) FROM stdin;
4	Android	Chrome Mobile	2024-01-27 15:12:48.497+07	2024-01-27 15:12:48.497+07	23	::ffff:192.168.1.128
6	Windows	Chrome	2024-01-27 21:07:53.575+07	2024-01-27 21:39:46.116+07	23	::ffff:192.168.88.106
5	Windows	Chrome	2024-01-27 15:17:31.594+07	2024-01-27 22:36:42.654+07	23	::1
7	Windows	Chrome	2024-01-27 23:21:21.341+07	2024-01-27 23:21:21.341+07	26	::1
8	Windows	Chrome	2024-01-27 23:32:21.511+07	2024-01-27 23:32:21.511+07	27	::1
9	Windows	Chrome	2024-01-27 23:38:20.821+07	2024-01-27 23:38:20.821+07	24	::1
10	Windows	Microsoft Edge	2024-01-27 23:44:52.341+07	2024-01-27 23:46:53.126+07	28	::1
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, status, created_at, updated_at, password) FROM stdin;
19	user 1	user1@gmail.com	\N	2024-01-23 21:41:36.761+07	2024-01-23 21:41:36.761+07	hung
20	user 2	user2@gmail.com	\N	2024-01-23 21:55:25.211+07	2024-01-23 21:55:25.211+07	$2b$10$wXAHru.eDH8F6almIBwuYuO7ZCuZ7TBmVscBZpJG/r9gZtRoLfbti
21	lê đình hùng	lehung020903@gmail.com	\N	2024-01-23 22:40:49.648+07	2024-01-23 22:40:49.648+07	$2b$10$aA3uyr2fD.Z8qGRw4NirHuYUlKEtWUYovNU1OTkKzR12onYhKy9J2
22	admin	admin@gmail.com	\N	2024-01-26 15:40:03.153+07	2024-01-26 22:54:54.865+07	$2b$10$U45I3J.seI475L65Wl0z6eKhgVbRF4e.RNXMnaM39fputmIQ6n5Q.
23	user 5	user5@gmail.com	f	2024-01-27 14:53:51.263+07	2024-01-27 21:40:39.436+07	$2b$10$iODyCspu91M4Y1l6T7HVI.lgUCydZk3mfLvYR8R3cP.ixkBJ1HYRm
24	user 6	user6@gmail.com	\N	2024-01-27 22:21:00.413+07	2024-01-27 22:21:00.413+07	$2b$10$kMd5dTghTYrfuka77djBjORAcdQcV0r7sb3n2wyhUonZGBCV2dGyi
27	Liu Tiu Diu 2	liutiudiu2@gmail.com	f	2024-01-27 23:32:07.385+07	2024-01-27 23:33:11.617+07	$2b$10$Nu5J50q6LNqcUt4DpHp/oeUs7AebyEWyuq0DoptP8SXdy4AqAlNn2
26	Liu Tiu Diu	liutiudiu@gmail.com	f	2024-01-27 23:16:57.012+07	2024-01-27 23:36:57.149+07	$2b$10$3/Piqar/OTi7pwIYZuwtRObX122mW0rMl24n0CdIob6CUdOhy3R46
28	hung	hung@gmail.com	f	2024-01-27 23:44:43.54+07	2024-01-27 23:49:05.219+07	$2b$10$J8C7JWLujAjIJmK1SAHVtOa2mJ1K2mb881out7F0C2hLL8y5sxFzG
\.


--
-- Name: Devices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Devices_id_seq"', 10, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 28, true);


--
-- Name: devices Devices_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "Devices_pkey" PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: devices devices_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT devices_user_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE SET NULL NOT VALID;


--
-- PostgreSQL database dump complete
--

