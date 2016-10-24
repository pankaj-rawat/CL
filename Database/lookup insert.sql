INSERT INTO Country (ID,name,abbr) VALUES(1,'India','IN');
INSERT INTO Country (ID,name,abbr) VALUES(2,'United States','US');

INSERT INTO STATE(ID,name,idCountry,abbr) VALUES(1,'Uttarakhand',1,'UK');
INSERT INTO state(name,idCountry,abbr) VALUES ('Delhi',1,'DL');

INSERT INTO state(name,idCountry,abbr) VALUES ('Uttar Pradesh',1,'UP');

INSERT INTO state(name,idCountry,abbr) VALUES ('Madhya Pradesh',1,'MP');

INSERT INTO state(name,idCountry,abbr) VALUES ('Haryana',1,'HR');


INSERT INTO state(name,idCountry,abbr) VALUES ('Andhra Pradesh',1,'AP');

INSERT INTO state(name,idCountry,abbr) VALUES ('Arunachal Pradesh',1,'AR');

INSERT INTO state(name,idCountry,abbr) VALUES ('Assam',1,'AS');

INSERT INTO state(name,idCountry,abbr) VALUES ('Bihar',1,'BR');

INSERT INTO state(name,idCountry,abbr) VALUES ('Chhattisgarh',1,'CG');

INSERT INTO state(name,idCountry,abbr) VALUES ('Goa',1,'GA');

INSERT INTO state(name,idCountry,abbr) VALUES ('Gujarat',1,'GJ');

INSERT INTO state(name,idCountry,abbr) VALUES ('Himachal Pradesh',1,'HP');

INSERT INTO state(name,idCountry,abbr) VALUES ('Jammu and Kashmir',1,'JK');

INSERT INTO state(name,idCountry,abbr) VALUES ('Jharkhand',1,'JH');

INSERT INTO state(name,idCountry,abbr) VALUES ('Karnataka',1,'KA');

INSERT INTO state(name,idCountry,abbr) VALUES ('Kerala',1,'KL');

INSERT INTO state(name,idCountry,abbr) VALUES ('Maharashtra',1,'MH');

INSERT INTO state(name,idCountry,abbr) VALUES ('Manipur',1,'MN');

INSERT INTO state(name,idCountry,abbr) VALUES ('Meghalaya',1,'ML');

INSERT INTO state(name,idCountry,abbr) VALUES ('Mizoram',1,'MZ');

INSERT INTO state(name,idCountry,abbr) VALUES ('Nagaland',1,'NL');

INSERT INTO state(name,idCountry,abbr) VALUES ('Orissa',1,'OR');

INSERT INTO state(name,idCountry,abbr) VALUES ('Punjab',1,'PB');

INSERT INTO state(name,idCountry,abbr) VALUES ('Rajasthan',1,'RJ');

INSERT INTO state(name,idCountry,abbr) VALUES ('Sikkim',1,'SK');

INSERT INTO state(name,idCountry,abbr) VALUES ('Tamil Nadu',1,'TN');

INSERT INTO state(name,idCountry,abbr) VALUES ('Tripura',1,'TR');

INSERT INTO state(name,idCountry,abbr) VALUES ('Uttarakhand',1,'UK');

INSERT INTO state(name,idCountry,abbr) VALUES ('West Bengal',1,'WB');

INSERT INTO state(name,idCountry,abbr) VALUES ('Tamil Nadu',1,'TN');

INSERT INTO state(name,idCountry,abbr) VALUES ('Tripura',1,'TR');

INSERT INTO state(name,idCountry,abbr) VALUES ('Andaman and Nicobar Islands',1,'AN');

INSERT INTO state(name,idCountry,abbr) VALUES ('Chandigarh',1,'CH');

INSERT INTO state(name,idCountry,abbr) VALUES ('Dadra and Nagar Haveli',1,'DH');

INSERT INTO state(name,idCountry,abbr) VALUES ('Daman and Diu',1,'DD');

INSERT INTO state(name,idCountry,abbr) VALUES ('Lakshadweep',1,'LD');

INSERT INTO state(name,idCountry,abbr) VALUES ('Pondicherry',1,'PY');

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

INSERT INTO activitytype(id,value)VALUES(1,'business');
INSERT INTO activitytype(id,value)VALUES(2,'offer');
INSERT INTO activitytype(id,value)VALUES(3,'userprofile');
INSERT INTO activitytype(id,value)VALUES(4,'search');
INSERT INTO activitytype(id,value)VALUES(5,'authentication');


INSERT INTO role(id,value) VALUES(1,'guest');
INSERT INTO role(id,value) VALUES(2,'admin');
INSERT INTO role(id,value) VALUES(3,'bussinessowner');
INSERT INTO role(id,value) VALUES(4,'registereduser');

INSERT INTO registrationplan(id,name,active,detail,createdOn,price) VALUES(1,'Promotion',1,'Promotional package',now(),0.0);
INSERT INTO registrationplan(id,name,active,detail,createdOn,price) VALUES(2,'Gold',1,'Gold package',now(),100.0);

INSERT INTO registrationplanfeature(idRegistrationPlan,feature,active,createdOn) VALUES(1,'1 Property',1,now());
INSERT INTO registrationplanfeature(idRegistrationPlan,feature,active,createdOn) VALUES(1,'1 Agent Profile',1,now());
INSERT INTO registrationplanfeature(idRegistrationPlan,feature,active,createdOn) VALUES(1,'Agency Profile',1,now());
INSERT INTO registrationplanfeature(idRegistrationPlan,feature,active,createdOn) VALUES(1,'Featured Property',1,now());
INSERT INTO registrationplanfeature(idRegistrationPlan,feature,active,createdOn) VALUES(2,'Unlimited Properties',1,now());
INSERT INTO registrationplanfeature(idRegistrationPlan,feature,active,createdOn) VALUES(2,'1 Agent Profile',1,now());
INSERT INTO registrationplanfeature(idRegistrationPlan,feature,active,createdOn) VALUES(2,'Agency Profile',1,now());
INSERT INTO registrationplanfeature(idRegistrationPlan,feature,active,createdOn) VALUES(2,'Featured Properties',1,now());

INSERT INTO category(id,value) VALUE(1,'Grocery');
INSERT INTO category(id,value) VALUE(2,'Baker');
INSERT INTO category(id,value) VALUE(3,'Home Services');
INSERT INTO category(id,value) VALUE(4,'General Store');
INSERT INTO category(id,value) VALUE(5,'Sports');
INSERT INTO category(id,value) VALUE(6,'Arts & Entertainment');
INSERT INTO category(id,value) VALUE(7,'Automotive');
INSERT INTO category(id,value) VALUE(8,'Beauty');
INSERT INTO category(id,value) VALUE(9,'Education');
INSERT INTO category(id,value) VALUE(10,'Event Planning & Services');
INSERT INTO category(id,value) VALUE(11,'Financial Services');
INSERT INTO category(id,value) VALUE(12,'Food');
INSERT INTO category(id,value) VALUE(13,'Health & Medical');
INSERT INTO category(id,value) VALUE(14,'Hotel & Travel');
INSERT INTO category(id,value) VALUE(15,'Nightlife');
INSERT INTO category(id,value) VALUE(16,'Pets');
INSERT INTO category(id,value) VALUE(17,'Professional Services');
INSERT INTO category(id,value) VALUE(18,'Publis Services & Government');
INSERT INTO category(id,value) VALUE(19,'Real Estate');
INSERT INTO category(id,value) VALUE(20,'Religious Organisation');
INSERT INTO category(id,value) VALUE(21,'Restaurent');
INSERT INTO category(id,value) VALUE(22,'Hotel & Travel');
INSERT INTO category(id,value) VALUE(23,'Handyman Services');
INSERT INTO category(id,value) VALUE(24,'Fuel & Gas');

INSERT INTO tag(id,value,idCategory,active) VALUES(1,'Flour',1,1);
INSERT INTO tag(id,value,idCategory,active) VALUES(2,'Besan',1,1);
INSERT INTO tag(id,value,idCategory,active) VALUES(3,'Cookie',2,1);
INSERT INTO tag(id,value,idCategory,active) VALUES(4,'Biscuit',2,1);
INSERT INTO tag(id,value,idCategory,active) VALUES(5,'Carpet cleaning',3,1);




