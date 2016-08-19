INSERT INTO Country (ID,name,abbr) VALUES(1,'India','IN');
INSERT INTO Country (ID,name,abbr) VALUES(2,'United States','US');

INSERT INTO STATE(ID,name,idCountry,abbr) VALUES(1,'Uttarakhand',1,'UK');

INSERT INTO CITY(ID,name,idState) VALUES(1,'Haldwani',1);
INSERT INTO CITY(ID,name,idState) VALUES(2,'Nainital',1);

INSERT INTO Status(id,value) VALUES(1,'Active');
INSERT INTO Status(id,value) VALUES(2,'In-active');
INSERT INTO Status(id,value) VALUES(3,'Verified');
INSERT INTO Status(id,value) VALUES(4,'Verification Pending');
INSERT INTO Status(id,value) VALUES(5,'Reported data incorrect');
INSERT INTO Status(id,value) VALUES(6,'Blocked');

INSERT INTO acceptanceType(id,value) VALUES(1,'Like');
INSERT INTO acceptanceType(id,value) VALUES(2,'Dislike');
INSERT INTO acceptanceType(id,value) VALUES(3,'Average');

INSERT INTO role(id,value) VALUES(1,'guest');
INSERT INTO role(id,value) VALUES(2,'admin');
INSERT INTO role(id,value) VALUES(3,'bussinessowner');
INSERT INTO role(id,value) VALUES(4,'registereduser');

