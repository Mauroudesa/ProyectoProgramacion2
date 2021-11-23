-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2021 a las 22:41:42
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `basededatos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentario` int(11) NOT NULL,
  `id_post` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id_comentario`, `id_post`, `id_usuario`, `contenido`, `created_at`, `updated_at`) VALUES
(22, 1, 14, 'Muy buen NFT', '2021-11-15 19:21:53', '2021-11-15 19:21:53'),
(23, 1, 14, 'hola', '2021-11-15 19:22:56', '2021-11-15 19:22:56'),
(24, 2, 14, 'asdlljadl', '2021-11-15 19:35:22', '2021-11-15 19:35:22'),
(25, 2, 14, 'dkaskdma', '2021-11-15 19:35:25', '2021-11-15 19:35:25'),
(26, 1, 14, 'genial', '2021-11-16 23:17:57', '2021-11-16 23:17:57'),
(27, 1, 15, 'Esta muy bueno!!!!', '2021-11-22 12:05:31', '2021-11-22 12:05:31'),
(28, 1, 15, 'nuevo comentario', '2021-11-22 13:01:07', '2021-11-22 13:01:07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posteos`
--

CREATE TABLE `posteos` (
  `id_post` int(11) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `fecha_registro` datetime DEFAULT NULL,
  `id_usuario_creo` int(11) NOT NULL,
  `precio_sol` int(11) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `fotoPerfil` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `posteos`
--

INSERT INTO `posteos` (`id_post`, `imagen`, `fecha_registro`, `id_usuario_creo`, `precio_sol`, `likes`, `created_at`, `updated_at`, `fotoPerfil`) VALUES
(1, '/images/3a87cb6d99d0e8d81a63a5c7712ab5b5', '2021-10-21 20:42:49', 1, 1, 9, '2021-11-08 19:16:03', '2021-11-08 16:16:03', '/images/perfil1.jpg'),
(2, '/images/nft1.2.png', NULL, 2, 2, 2, NULL, NULL, '/images/perfil17.jpg'),
(24, '/images/172d6eed91f4a035671606fe77700ca8', NULL, 14, 3, NULL, NULL, NULL, NULL),
(25, '/images/ed5b1b0fdc77236a7cab70405e13f0d1', NULL, 15, 2, NULL, NULL, NULL, NULL),
(26, '/images/7cf774916fb33ad16b6f3bf1162d37fb', NULL, 15, 4, NULL, NULL, NULL, NULL),
(27, '/images/5d6c7b85445bad0cb30e75eda0b4db51', NULL, 15, 4, NULL, NULL, NULL, NULL),
(28, '/images/b4c8429fa249886cd1ae97fe2a7051de', NULL, 15, 1, NULL, NULL, NULL, NULL),
(29, '/images/edb9141af10ee5e48e0b5ecd74f1dd29', NULL, 15, 4, NULL, NULL, NULL, NULL),
(30, '/images/a3936cd1e8becfb47f314711f1bce7b1', NULL, 15, 3, NULL, NULL, NULL, NULL),
(32, '/images/8100e535f0c211b5dd8a573cad74ed5a', NULL, 16, 3, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `foto_perfil` varchar(255) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre_usuario` varchar(255) DEFAULT NULL,
  `seguidos` varchar(255) DEFAULT NULL,
  `seguidores` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido`, `email`, `contrasena`, `foto_perfil`, `fecha`, `descripcion`, `nombre_usuario`, `seguidos`, `seguidores`, `created_at`, `updated_at`) VALUES
(1, 'Alan', 'Geie', 'aaa@gmail.com', '$2a$10$J1DhbOpuR5Rh7Zbyg.Z0leSVa0AiRZgXmtoyRicWMK111ERmN0beq', '/images/perfil1.jpg', '2021-10-28 20:53:20', 'Este es mi perfil', 'AlanGeier', '18', '50', '2021-11-08 19:16:49', '2021-11-08 16:16:49'),
(2, 'ja', 'ja', 'ha', '', '/images/perfil17.jpg', NULL, NULL, 'Usuario2', NULL, NULL, NULL, NULL),
(14, 'pepe', 'pepe', 'pepe123@gmail.com', '$2a$10$WE.YZ.QjSde.g2vE6CCoU.x04dBPUh0J85uNQkkDDpEOsCp2Yx0K.', NULL, NULL, NULL, 'pepe123', NULL, NULL, NULL, NULL),
(15, 'Mauro', 'Proto', 'mprotocassina15@gmail.com', '$2a$10$k7tNbCnXNF/wkR2OOFVxy.GeERaMvpasOYlrDRSvH4KCgv3p221Ua', NULL, NULL, NULL, 'Maurex', NULL, NULL, NULL, NULL),
(16, 'victoria', '', 'victoria@gmail.com', '$2a$10$MT26DDsU6SoEKNYJ46V6AO1hOmsOEAs2i0PTR2utayfEp4hMdnnjS', 'perfil11.jpg', NULL, NULL, 'victoria2021', NULL, NULL, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentario`);

--
-- Indices de la tabla `posteos`
--
ALTER TABLE `posteos`
  ADD PRIMARY KEY (`id_post`),
  ADD KEY `id_usuario_creo` (`id_usuario_creo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `posteos`
--
ALTER TABLE `posteos`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `posteos`
--
ALTER TABLE `posteos`
  ADD CONSTRAINT `posteos_ibfk_1` FOREIGN KEY (`id_usuario_creo`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
