-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dnas_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dnas_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dnas_db` ;
USE `dnas_db` ;

-- -----------------------------------------------------
-- Table `dnas_db`.`dna`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dnas_db`.`dna` ;

CREATE TABLE IF NOT EXISTS `dnas_db`.`dna` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sequence` VARCHAR(500) NULL,
  `type` ENUM("human", "sigman") NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `sequence_UNIQUE` (`sequence` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
