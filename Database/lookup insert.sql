INSERT INTO country (ID,name,abbr) VALUES(1,'India','IN');
INSERT INTO country (ID,name,abbr) VALUES(2,'United States','US');

INSERT INTO state(ID,name,idCountry,abbr) VALUES(1,'Uttarakhand',1,'UK');
INSERT INTO state(id,name,idCountry,abbr) VALUES (2,'Delhi',1,'DL');
INSERT INTO state(id,name,idCountry,abbr) VALUES (3,'Uttar Pradesh',1,'UP');
INSERT INTO state(id,name,idCountry,abbr) VALUES (4,'Madhya Pradesh',1,'MP');
INSERT INTO state(id,name,idCountry,abbr) VALUES (5,'Haryana',1,'HR');
INSERT INTO state(id,name,idCountry,abbr) VALUES (6,'Andhra Pradesh',1,'AP');
INSERT INTO state(id,name,idCountry,abbr) VALUES (7,'Arunachal Pradesh',1,'AR');
INSERT INTO state(id,name,idCountry,abbr) VALUES (8,'Assam',1,'AS');
INSERT INTO state(id,name,idCountry,abbr) VALUES (9,'Bihar',1,'BR');
INSERT INTO state(id,name,idCountry,abbr) VALUES (10,'Chhattisgarh',1,'CG');
INSERT INTO state(id,name,idCountry,abbr) VALUES (11,'Goa',1,'GA');
INSERT INTO state(id,name,idCountry,abbr) VALUES (12,'Gujarat',1,'GJ');
INSERT INTO state(id,name,idCountry,abbr) VALUES (13,'Himachal Pradesh',1,'HP');
INSERT INTO state(id,name,idCountry,abbr) VALUES (14,'Jammu and Kashmir',1,'JK');
INSERT INTO state(id,name,idCountry,abbr) VALUES (15,'Jharkhand',1,'JH');
INSERT INTO state(id,name,idCountry,abbr) VALUES (16,'Karnataka',1,'KA');
INSERT INTO state(id,name,idCountry,abbr) VALUES (17,'Kerala',1,'KL');
INSERT INTO state(id,name,idCountry,abbr) VALUES (18,'Maharashtra',1,'MH');
INSERT INTO state(id,name,idCountry,abbr) VALUES (19,'Manipur',1,'MN');
INSERT INTO state(id,name,idCountry,abbr) VALUES (20,'Meghalaya',1,'ML');
INSERT INTO state(id,name,idCountry,abbr) VALUES (21,'Mizoram',1,'MZ');
INSERT INTO state(id,name,idCountry,abbr) VALUES (22,'Nagaland',1,'NL');
INSERT INTO state(id,name,idCountry,abbr) VALUES (23,'Orissa',1,'OR');
INSERT INTO state(id,name,idCountry,abbr) VALUES (24,'Punjab',1,'PB');
INSERT INTO state(id,name,idCountry,abbr) VALUES (25,'Rajasthan',1,'RJ');
INSERT INTO state(id,name,idCountry,abbr) VALUES (26,'Sikkim',1,'SK');
INSERT INTO state(id,name,idCountry,abbr) VALUES (27,'Tamil Nadu',1,'TN');
INSERT INTO state(id,name,idCountry,abbr) VALUES (28,'Tripura',1,'TR');
INSERT INTO state(id,name,idCountry,abbr) VALUES (29,'West Bengal',1,'WB');
INSERT INTO state(id,name,idCountry,abbr) VALUES (30,'Tamil Nadu',1,'TN');
INSERT INTO state(id,name,idCountry,abbr) VALUES (31,'Tripura',1,'TR');
INSERT INTO state(id,name,idCountry,abbr) VALUES (32,'Andaman and Nicobar Islands',1,'AN');
INSERT INTO state(id,name,idCountry,abbr) VALUES (33,'Chandigarh',1,'CH');
INSERT INTO state(id,name,idCountry,abbr) VALUES (34,'Dadra and Nagar Haveli',1,'DH');
INSERT INTO state(id,name,idCountry,abbr) VALUES (35,'Daman and Diu',1,'DD');
INSERT INTO state(id,name,idCountry,abbr) VALUES (36,'Lakshadweep',1,'LD');
INSERT INTO state(id,name,idCountry,abbr) VALUES (37,'Pondicherry',1,'PY');

INSERT INTO city(ID,name,idState) VALUES(1,'Haldwani',1);
INSERT INTO city(ID,name,idState) VALUES(2,'Nainital',1);
INSERT INTO city(ID,name,idState) VALUES(3,'Hapur',3);

INSERT INTO status(id,value) VALUES(1,'Active');
INSERT INTO status(id,value) VALUES(2,'In-active');
INSERT INTO status(id,value) VALUES(3,'Verified');
INSERT INTO status(id,value) VALUES(4,'Verification Pending');
INSERT INTO status(id,value) VALUES(5,'Reported data incorrect');
INSERT INTO status(id,value) VALUES(6,'Blocked');

INSERT INTO acceptance_type(id,value) VALUES(1,'Like');
INSERT INTO acceptance_type(id,value) VALUES(2,'Dislike');
INSERT INTO acceptance_type(id,value) VALUES(3,'Average');

INSERT INTO activity_type(id,value)VALUES(1,'business');
INSERT INTO activity_type(id,value)VALUES(2,'offer');
INSERT INTO activity_type(id,value)VALUES(3,'userprofile');
INSERT INTO activity_type(id,value)VALUES(4,'authentication');
INSERT INTO activity_type(id,value)VALUES(5,'password change');
INSERT INTO activity_type(id,value)VALUES(6,'password reset request');
INSERT INTO activity_type(id,value)VALUES(7,'password reset');


INSERT INTO role(id,value) VALUES(1,'guest');
INSERT INTO role(id,value) VALUES(2,'admin');
INSERT INTO role(id,value) VALUES(3,'registereduser');

INSERT INTO registration_plan(id,name,active,detail,createDate,price) VALUES(1,'Promotion',1,'Promotional package',now(),0.0);
INSERT INTO registration_plan(id,name,active,detail,createDate,price) VALUES(2,'Gold',1,'Gold package',now(),100.0);

INSERT INTO registration_plan_feature(idRegistrationPlan,feature,active,createDate) VALUES(1,'1 Property',1,now());
INSERT INTO registration_plan_feature(idRegistrationPlan,feature,active,createDate) VALUES(1,'1 Agent Profile',1,now());
INSERT INTO registration_plan_feature(idRegistrationPlan,feature,active,createDate) VALUES(1,'Agency Profile',1,now());
INSERT INTO registration_plan_feature(idRegistrationPlan,feature,active,createDate) VALUES(1,'Featured Property',1,now());
INSERT INTO registration_plan_feature(idRegistrationPlan,feature,active,createDate) VALUES(2,'Unlimited Properties',1,now());
INSERT INTO registration_plan_feature(idRegistrationPlan,feature,active,createDate) VALUES(2,'1 Agent Profile',1,now());
INSERT INTO registration_plan_feature(idRegistrationPlan,feature,active,createDate) VALUES(2,'Agency Profile',1,now());
INSERT INTO registration_plan_feature(idRegistrationPlan,feature,active,createDate) VALUES(2,'Featured Properties',1,now());

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

insert into action(id,name,value) VALUES(1,'Get Any',1);
insert into action(id,name,value) VALUES(2,'Get Owned',2);
insert into action(id,name,value) VALUES(3,'Put Any',4);
insert into action(id,name,value) VALUES(4,'Put Owned',8);
insert into action(id,name,value) VALUES(5,'Post',16);
insert into action(id,name,value) VALUES(7,'Delete Any',32);
insert into action(id,name,value) VALUES(8,'Delete Owned',64);

insert into resource(id,name)VALUES(1,'Auth');
insert into resource(id,name)VALUES(2,'Businesses');
insert into resource(id,name)VALUES(3,'Categories');
insert into resource(id,name)VALUES(4,'Cities');
insert into resource(id,name)VALUES(5,'Countries');
insert into resource(id,name)VALUES(6,'RegistrationPlans');
insert into resource(id,name)VALUES(7,'States');
insert into resource(id,name)VALUES(8,'Tags');
insert into resource(id,name)VALUES(9,'Users');
insert into resource(id,name)VALUES(10,'Reviews');

/*1	guest*/
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('1', '1', '16');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('1', '2', '17');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('1', '3', '1');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('1', '4', '1');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('1', '5', '1');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('1', '6', '1');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('1', '7', '1');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('1', '8', '17');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('1', '9', '16');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('1', '10', '1');

/*2	admin*/
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('2', '1', '85');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('2', '2', '85');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('2', '3', '85');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('2', '4', '85');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('2', '5', '85');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('2', '6', '85');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('2', '7', '85');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('2', '8', '85');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('2', '9', '85');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('2', '10', '53');

/*3	registereduser*/
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('3', '1', '16');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('3', '2', '153');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('3', '3', '1');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('3', '4', '1');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('3', '5', '1');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('3', '6', '1');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('3', '7', '1');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('3', '8', '17');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('3', '9', '154');
INSERT INTO `resource_role_access` (`idRole`, `idResource`, `actionMask`) VALUES ('3', '10', '89');

INSERT INTO result_code(id,remark) VALUES(1,'success');
INSERT INTO result_code(id,remark) VALUES(2,'Email not exists.');
INSERT INTO result_code(id,remark) VALUES(3,'Either the code or business\user id do not match or exists.');
INSERT INTO result_code(id,remark) VALUES(4,'Either the business do not exists or user is already assigned to the business .');

#Transaction DATA

#admin user.

INSERT INTO user(id,email,password,phoneLandLine,createDate,idStatus,idCity,subscriptionOptin,subscriptionOptinDate)
VALUES(1,'admin@citylocal.biz','$2a$10$/llSw0BT80H1aPV.22Q92u/QdrJ3oTv2LesL7JexyA2x3PW.7l4iy','7021111111',utc_date(),3,1,1,utc_date());

INSERT INTO user_role(idUser,idRole)	VALUES(1,2 /*admin user*/);
