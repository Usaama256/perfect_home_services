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
-- Table structure for table `Services`
--

DROP TABLE IF EXISTS `Services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Services` (
  `Sid` int(11) NOT NULL AUTO_INCREMENT,
  `Sname` varchar(100) NOT NULL,
  `desc` varchar(200) DEFAULT NULL,
  `imgs` text,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `active` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`Sid`),
  UNIQUE KEY `Sname` (`Sname`),
  UNIQUE KEY `Sid_UNIQUE` (`Sid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Services`
--

LOCK TABLES `Services` WRITE;
/*!40000 ALTER TABLE `Services` DISABLE KEYS */;
INSERT INTO `Services` VALUES (1,'Laundry ','A laundry service is a type of business offering the services of washing and cleaning clothes, uniforms, and different types of fabric.','[{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/laundry1.jpg\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/laundry2.jpg\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/laundry3.webp\",\"desc\":\"\"}]','2023-05-07 10:16:50','2023-07-04 05:03:57',1),(2,'Security','Home security service includes installation of CCTV cameras,network of devices that detect entry in the home and also provides a security officer to take care of the home.','[{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/security1.jpg\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/security2.jpeg\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/security3.jpg\",\"desc\":\"\"}]','2023-05-07 10:36:45','2023-07-04 05:03:59',1),(3,'Cleaning','Cleaning services include cleaning floors, walls, windows, and more in kitchens, bathrooms, bedrooms, and other rooms.','[{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/cleaning1.jpg\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/cleaning2.jpg\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/cleaning3.jpg\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/cleaning4.jpg\",\"desc\":\"\"}]','2023-05-07 10:45:01','2023-07-04 05:04:00',1),(4,'Painting','Painting service involves use of paint of any brand to improve the appearance of a building and to protect it from damage by water, corrosion, insects and mould.','[{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/painting1.jpg\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/painting2.jpg\",\"desc\":\"\"}]','2023-05-07 10:52:40','2023-06-20 09:38:56',1),(5,'Fumigation','Fumigation is a method of using a lethal gas to exterminate pests within an enclosed space. It involves the use of poisonous gas to remove harmful insects, bacteria from the house of anywhere.','[{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/fumigation1.jpg\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/fumigation2.png\",\"desc\":\"\"}]','2023-05-07 10:57:46','2023-06-20 09:38:56',1),(6,'Home Decoration','Home decoration is clearing and creating living spaces that are visually appealing and more attractive to the human eye.','[{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/decoration1.webp\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/decoration2.jpg\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/decoration3.jpg\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/landscaping2.jpg\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/interior_design.jpg\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/interior_design2.webp\",\"desc\":\"\"}]','2023-05-07 11:00:10','2023-06-20 10:36:14',1),(7,'Renovation','Home Building and Re-construction involves renovation and remodeling of the old building to restore a better former state. It includes cleaning and transforming the layout of a structure.','[{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/renovation1.jpg\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/renovation2.png\",\"desc\":\"\"}]','2023-05-07 11:05:33','2023-06-20 09:38:56',1),(8,'Electrical and Solar Services','Solar installation services include setup of solar panels on roofs and structures on land,to convert solar power into renewable energy. Electrical services includes repair of underground distribution ','[{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/electrical1.jpeg\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/electricals1.webp\",\"desc\":\"\"}]','2023-05-09 21:22:07','2023-06-20 09:38:56',1),(11,'Test Service','This is a test one','[{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/Test-Service_1.png\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/Test-Service_2.png\",\"desc\":\"\"},{\"title\":\"\",\"src\":\"http://localhost:5427/images/services/Test-Service_3.png\",\"desc\":\"\"}]','2023-07-04 05:29:22','2023-07-04 05:38:34',0);
/*!40000 ALTER TABLE `Services` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-04 14:46:27
