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
-- Name: links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.links (
    id integer NOT NULL,
    "shortLink" character varying,
    "originalLink" character varying,
    password character varying(50),
    "websiteTraffic" integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.links OWNER TO postgres;

--
-- Name: links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.links ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.links_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.links (id, "shortLink", "originalLink", password, "websiteTraffic", created_at, updated_at) FROM stdin;
12	http://localhost:3000/_WLWNvQ9T	https://google.com		\N	2024-02-24 22:02:39.253+07	2024-02-24 22:02:39.253+07
13	http://localhost:3000/uPegDHqIF	https://youtube.com	12345	\N	2024-02-24 22:09:47.578+07	2024-02-24 22:09:47.578+07
14	http://localhost:3000/-VvMoo1XJ	https://www.npmjs.com/package/qrcode	12345	\N	2024-02-24 23:45:51.232+07	2024-02-24 23:45:51.232+07
\.


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.links_id_seq', 14, true);


--
-- Name: links links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

