CREATE DATABASE  IF NOT EXISTS `housework_mgt` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `housework_mgt`;
-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: housework_mgt
-- ------------------------------------------------------
-- Server version	5.6.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ServiceProviders`
--

DROP TABLE IF EXISTS `ServiceProviders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ServiceProviders` (
  `SPid` int(11) NOT NULL AUTO_INCREMENT,
  `SPname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `logoImg` tinytext,
  `hash` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'suspended',
  `contact` varchar(45) NOT NULL,
  `location` varchar(100) NOT NULL,
  `approved` int(1) NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Sid` int(11) NOT NULL,
  PRIMARY KEY (`SPid`),
  UNIQUE KEY `SPemail_UNIQUE` (`email`),
  UNIQUE KEY `contact_UNIQUE` (`contact`),
  UNIQUE KEY `SPname_UNIQUE` (`SPname`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ServiceProviders`
--

LOCK TABLES `ServiceProviders` WRITE;
/*!40000 ALTER TABLE `ServiceProviders` DISABLE KEYS */;
INSERT INTO `ServiceProviders` VALUES (9,'Test Inc Ltd','test@test.com','http://localhost:5427/images/SPlogo/Test-Inc-Ltd_logo.png','$2a$10$fJRXjddO5.4F5j2.WvBMl.odyBcaKsa0yIYLkVhkLmd7h38FdLWQu','This is a test one','active','0307632001','Test Site',1,'2023-07-04 06:37:46','2023-07-04 10:09:29',4);
/*!40000 ALTER TABLE `ServiceProviders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-04 14:46:28
