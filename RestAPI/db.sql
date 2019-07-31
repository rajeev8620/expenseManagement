--
-- Database: `ExpenseManagement`
--

CREATE TABLE `ConsumerDetails` (
  `ConsumerId` bigint(21) NOT NULL,
  `FirstName` varchar(100) NOT NULL,
  `LastName` varchar(100) DEFAULT NULL,
  `Email` varchar(150) NOT NULL,
  `Password` varchar(120) NOT NULL,
  `UserType` int(1) NOT NULL DEFAULT '1' COMMENT '1: Normal User',
  `Status` int(1) NOT NULL DEFAULT '1' COMMENT '0:Inactive,1:Newly Register,2: Active',
  `LastModified` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ConsumerDetails`
--
ALTER TABLE `ConsumerDetails`
  ADD PRIMARY KEY (`ConsumerId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ConsumerDetails`
--
ALTER TABLE `ConsumerDetails`
  MODIFY `ConsumerId` bigint(21) NOT NULL AUTO_INCREMENT;
