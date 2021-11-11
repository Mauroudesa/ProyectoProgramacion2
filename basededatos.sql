-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2021 at 09:48 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `basededatos`
--

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
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
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id_comentario`, `id_post`, `id_usuario`, `contenido`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Que buen nft que me mande', '2021-10-28 20:39:43', '2021-10-28 17:39:43'),
(2, NULL, NULL, 'asd', '2021-10-28 20:39:43', '2021-10-28 17:39:43'),
(3, NULL, NULL, 'Muy buenoooo', '2021-10-28 20:39:43', '2021-10-28 17:39:43'),
(4, NULL, NULL, 'excelente', '2021-10-28 20:39:43', '2021-10-28 17:39:43'),
(5, 1, NULL, 'muy bueno', '2021-10-28 20:39:43', '2021-10-28 17:39:43');

-- --------------------------------------------------------

--
-- Table structure for table `posteos`
--

CREATE TABLE `posteos` (
  `id_post` int(11) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `fecha_registro` datetime DEFAULT NULL,
  `id_usuario_creo` int(11) NOT NULL,
  `precio_sol` int(11) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posteos`
--

INSERT INTO `posteos` (`id_post`, `imagen`, `fecha_registro`, `id_usuario_creo`, `precio_sol`, `likes`, `created_at`, `updated_at`) VALUES
(1, 'https://cdn.mos.cms.futurecdn.net/UGrWvurmbR7EzmyM2aRnyn.jpg', '2021-10-21 20:42:49', 1, 50, 9, '2021-11-08 19:16:03', '2021-11-08 16:16:03'),
(4, '', '0000-00-00 00:00:00', 4, 0, 0, '2021-11-08 19:16:03', '2021-11-08 16:16:03');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
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
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido`, `email`, `contrasena`, `foto_perfil`, `fecha`, `descripcion`, `nombre_usuario`, `seguidos`, `seguidores`, `created_at`, `updated_at`) VALUES
(1, 'Alan', 'Geie', 'aaa@gmail.com', '$2a$10$J1DhbOpuR5Rh7Zbyg.Z0leSVa0AiRZgXmtoyRicWMK111ERmN0beq', 'https://cdn.mos.cms.futur', '2021-10-28 20:53:20', 'Este es mi perfil', 'AlanGeier', '18', '50', '2021-11-08 19:16:49', '2021-11-08 16:16:49'),
(2, 'asd', 'asd', 'asdas@gmail.com', '$2a$10$J1DhbOpuR5Rh7Zbyg.Z0leSVa0AiRZgXmtoyRicWMK111ERmN0beq', 'https://cdn.mos.cms.futur', '2021-10-28 20:53:20', 'asdasd', 'AALEMQ', '188', '3218', '2021-11-08 19:16:49', '2021-11-08 16:16:49'),
(3, 'asd', 'srf', 'asdrg@gmail.com', '$2a$10$J1DhbOpuR5Rh7Zbyg.Z0leSVa0AiRZgXmtoyRicWMK111ERmN0beq', 'https://cdn.mos.cms.futur', '2021-10-28 20:53:20', 'El mejor perfil', 'sfga', '3486', '6634151', '2021-11-08 19:16:49', '2021-11-08 16:16:49'),
(4, 'asd', 'asd', 'asdas@gmail.com', '$2a$10$J1DhbOpuR5Rh7Zbyg.Z0leSVa0AiRZgXmtoyRicWMK111ERmN0beq', 'https://cdn.mos.cms.futur', '2021-10-28 20:53:20', 'asdasd', 'argtr', '188', '3218', '2021-11-08 19:16:49', '2021-11-08 16:16:49'),
(5, 'Ernesto', 'AA', 'aa@gmail.com', '$2a$10$J1DhbOpuR5Rh7Zbyg.Z0leSVa0AiRZgXmtoyRicWMK111ERmN0beq', 'https://cdn.mos.cms.futur', '2021-10-28 20:53:20', 'Hago los mejores nft', 'ErneFT', '200', '400', '2021-11-08 19:16:49', '2021-11-08 16:16:49'),
(6, 'sdfdsfg', 'adf', 'ageiersigal@gmail.com', '$2a$10$J1DhbOpuR5Rh7Zbyg.Z0leSVa0AiRZgXmtoyRicWMK111ERmN0beq', NULL, '2021-10-28 20:53:20', NULL, 'sdfdsfg', NULL, NULL, '2021-11-08 19:16:49', '2021-11-08 16:16:49'),
(7, 'FacuTorrez', 'Torres', 'facu@gmail.com', '$2a$10$J1DhbOpuR5Rh7Zbyg.Z0leSVa0AiRZgXmtoyRicWMK111ERmN0beq', NULL, '2021-10-28 20:53:20', NULL, 'FacuTorrez', NULL, NULL, '2021-11-08 19:16:49', '2021-11-08 16:16:49'),
(8, 'prueba', 'Prueba', 'prueba@gmail.com', '$2a$10$J1DhbOpuR5Rh7Zbyg.Z0leSVa0AiRZgXmtoyRicWMK111ERmN0beq', NULL, '2021-10-28 20:53:20', NULL, 'prueba', NULL, NULL, '2021-11-08 19:16:49', '2021-11-08 16:16:49'),
(9, 'Pehuen', 'Pehuen', 'pehuen@gmail.com', '$2a$10$J1DhbOpuR5Rh7Zbyg.Z0leSVa0AiRZgXmtoyRicWMK111ERmN0beq', NULL, '2021-10-28 20:51:46', NULL, 'Pehuen', NULL, NULL, '2021-11-08 19:16:49', '2021-11-08 16:16:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentario`);

--
-- Indexes for table `posteos`
--
ALTER TABLE `posteos`
  ADD PRIMARY KEY (`id_post`),
  ADD KEY `id_usuario_creo` (`id_usuario_creo`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `posteos`
--
ALTER TABLE `posteos`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posteos`
--
ALTER TABLE `posteos`
  ADD CONSTRAINT `posteos_ibfk_1` FOREIGN KEY (`id_usuario_creo`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
