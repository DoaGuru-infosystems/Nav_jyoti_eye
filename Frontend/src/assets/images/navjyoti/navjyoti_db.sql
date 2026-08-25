-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2026 at 07:40 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `navjyoti_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `email`, `password`, `created_at`) VALUES
(1, 'admin', 'navjyotihospital00@gmail.com', '$2b$10$xiC85ggjZduDR1CGpzq3ueQ04GN2oRu7LpP8NaBSbpm.2lGW4lIMG', '2026-08-21 10:03:05');

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `problem` text DEFAULT NULL,
  `appointment_date` date NOT NULL,
  `source` enum('home','appointment_page') NOT NULL DEFAULT 'appointment_page',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `name`, `email`, `phone`, `problem`, `appointment_date`, `source`, `created_at`) VALUES
(1, 'Ashish Dubey', 'ashish9039062705@gmail.com', '09302300834', 'na', '2026-08-29', 'home', '2026-08-21 10:21:13'),
(2, 'Ashish Dubey', 'ashish9039062705@gmail.com', '09302300834', 'hthfghfghfgh', '2026-08-29', 'appointment_page', '2026-08-21 10:21:40'),
(3, 'Ashish Dubey', 'ashish9039062705@gmail.com', '09302300834', 'na', '2026-08-29', 'home', '2026-08-21 11:05:58'),
(4, 'Ashish Dubey', 'ashish9039062705@gmail.com', '09302300834', 'dsdasd', '2026-08-29', 'appointment_page', '2026-08-21 11:46:56'),
(5, 'Ashish Dubey', 'ashish9039062705@gmail.com', '09302300834', NULL, '2026-08-29', 'appointment_page', '2026-08-21 12:17:44'),
(6, 'Ashish Dubey', 'ashish9039062705@gmail.com', '09302300834', NULL, '2026-08-28', 'appointment_page', '2026-08-21 12:18:04'),
(7, 'Ashish Dubey', 'ashish9039062705@gmail.com', '09302300834', 'na', '2026-08-29', 'home', '2026-08-22 07:44:49');

-- --------------------------------------------------------

--
-- Table structure for table `leads`
--

CREATE TABLE `leads` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `message` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leads`
--

INSERT INTO `leads` (`id`, `name`, `email`, `phone`, `message`, `created_at`) VALUES
(1, 'Ashish Dubey', 'ashish9039062705@gmail.com', '09302300834', 'xcvxvxcv', '2026-08-21 10:22:01'),
(2, 'Ashish Dubey', 'ashish9039062705@gmail.com', '09302300834', 'asas', '2026-08-21 11:46:25'),
(3, 'Ashish Dubey', 'ashish9039062705@gmail.com', '09302300834', 'ffgfdgdfg', '2026-08-22 08:04:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leads`
--
ALTER TABLE `leads`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `leads`
--
ALTER TABLE `leads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
