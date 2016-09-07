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

INSERT INTO registrationplan(name,active,detail,createdOn,price) VALUES('Promotion',1,'Promotional package',now(),0.0);
INSERT INTO registrationplan(name,active,detail,createdOn,price) VALUES('Gold',1,'Gold package',now(),100.0);

INSERT INTO registrationplanfeature(idRegistrationPlan,feature,active,createdOn) VALUES(1,'1 Property',1,now());
INSERT INTO registrationplanfeature(idRegistrationPlan,feature,active,createdOn) VALUES(1,'1 Agent Profile',1,now());
INSERT INTO registrationplanfeature(idRegistrationPlan,feature,active,createdOn) VALUES(1,'Agency Profile',1,now());
INSERT INTO registrationplanfeature(idRegistrationPlan,feature,active,createdOn) VALUES(1,'Featured Property',1,now());
INSERT INTO registrationplanfeature(idRegistrationPlan,feature,active,createdOn) VALUES(2,'Unlimited Properties',1,now());
INSERT INTO registrationplanfeature(idRegistrationPlan,feature,active,createdOn) VALUES(2,'1 Agent Profile',1,now());
INSERT INTO registrationplanfeature(idRegistrationPlan,feature,active,createdOn) VALUES(2,'Agency Profile',1,now());
INSERT INTO registrationplanfeature(idRegistrationPlan,feature,active,createdOn) VALUES(2,'Featured Properties',1,now());

INSERT INTO category(value) VALUE('Grocery');
INSERT INTO category(value) VALUE('Baker');
INSERT INTO category(value) VALUE('Home Services');
INSERT INTO category(value) VALUE('General Store');
INSERT INTO category(value) VALUE('Sports');
INSERT INTO category(value) VALUE('Arts & Entertainment');
INSERT INTO category(value) VALUE('Automotive');
INSERT INTO category(value) VALUE('Beauty');
INSERT INTO category(value) VALUE('Education');
INSERT INTO category(value) VALUE('Event Planning & Services');
INSERT INTO category(value) VALUE('Financial Services');
INSERT INTO category(value) VALUE('Food');
INSERT INTO category(value) VALUE('Health & Medical');
INSERT INTO category(value) VALUE('Hotel & Travel');
INSERT INTO category(value) VALUE('Nightlife');
INSERT INTO category(value) VALUE('Pets');
INSERT INTO category(value) VALUE('Professional Services');
INSERT INTO category(value) VALUE('Publis Services & Government');
INSERT INTO category(value) VALUE('Real Estate');
INSERT INTO category(value) VALUE('Religious Organisation');
INSERT INTO category(value) VALUE('Restaurent');
INSERT INTO category(value) VALUE('Hotel & Travel');
INSERT INTO category(value) VALUE('Handyman Services');
INSERT INTO category(value) VALUE('Fuel & Gas');


