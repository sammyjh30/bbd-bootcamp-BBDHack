
// //////////////////////////////////////////////////////////////////////////////


const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
});


connection.connect(function (err) {
	if (err) throw err;

	console.log('Recreating Facial_RecogDB database...')
	connection.query('DROP DATABASE IF EXISTS Facial_RecogDB');
	connection.query('CREATE DATABASE Facial_RecogDB');

	connection.changeUser({database : 'Facial_RecogDB'}, function(err) {
		if (err) throw err;
	});

	console.log('Deleting old tables...')
	connection.query('DROP TABLE IF EXISTS Users');
	connection.query('DROP TABLE IF EXISTS Reference_images');

	console.log('Initiating tables...')
	connection.query("CREATE TABLE `Users`(\
        `userID` int unsigned NOT NULL,\
        `firstName` varchar(50) NULL,\
        `lastName` varchar(50) NULL,\
        `position` varchar(50) NULL,\
        CONSTRAINT PK_userID PRIMARY KEY(UserID))");

	connection.query("CREATE TABLE `Reference_images`(\
        `imageID` int unsigned NOT NULL,\
        `userID` int unsigned NOT NULL,\
        `front_side` varchar(255),\
        `right_side` varchar(255),\
        `left_side` varchar(255),\
        CONSTRAINT PK_imageId PRIMARY KEY (`ImageID`),\
        FOREIGN KEY FK_Ref_images_userID (`userID`) REFERENCES Users (`userID`))");

	


	console.log('Creating fake profiles...')

	connection.query(`INSERT INTO Users (userID, firstname, lastname, position)\
    VALUES (2004, 'Sam', 'Hillebrand', 'Intern')`);

	// adds extra needed columns to user table
	// connection.query('ALTER TABLE `users`\
	// ADD COLUMN `fame` INT(9) unsigned NULL AFTER `pref`,\
	// ADD COLUMN `online` DATETIME AFTER `bio`,\
	// ADD COLUMN `veri_code` VARCHAR(100) AFTER `bio`,\
	// ADD COLUMN `verified` INT(2) NULL AFTER `veri_code`,\
	// ADD COLUMN `profile_pic_id` INT AFTER `birth_date`\
	// ');

	// //creates prepopulated interests table
	// connection.query("\
	// INSERT INTO `interests` VALUES ('1','potatoes'), ('2','horses'), ('3','picnics'), ('5','bicycles'), ('6','toenails'), ('7','computers'), ('8','gaming'), ('9','airsoft'), ('10','gambling'), ('11','fishing'), ('12','reading'), ('13','aquascaping'), ('14','footskating'), ('15','mansplaining'), ('16','darts'), ('17','fun'), ('18','whiskey'), ('19','hiking'), ('20','dillydallying'), ('21','carpentry'), ('22','furniture'), ('23','jazz'), ('24','wine'), ('4','surfing')\
	// ");

	// //assigns random interests to random users
	// connection.query("\
	// INSERT INTO `user_interests` VALUES\
	// ('124','11'), ('116','11'), ('101','1'), ('101','3'), ('102','3'), ('103','3'), ('104','3'), ('104','4'), ('102','4'), ('132','14'), ('174','18'), ('180','6'), ('128','1'), ('107','1'), ('181','14'), ('119','10'), ('135','1'), ('171','22'), ('173','15'),('174','2'), ('186','1'), ('158','16'), ('127','12'), ('108','13'), ('127','4'), ('105','10'), ('136','5'), ('159','7'), ('193','18'), ('163','19'), ('110','1'), ('133','24'), ('125','11'), ('167','7'), ('191','17'), ('120','16'), ('162','15'), ('184','13'), ('171','7'), ('131','8'), ('127','9'), ('196','21'), ('163','15'), ('192','14'), ('140','6'), ('128','12'), ('106','18'), ('150','8'), ('191','7'), ('112','16'), ('189','12'), ('172','1'), ('129','20'), ('173','22'), ('159','14'), ('133','2'), ('163','19'), ('175','5'), ('120','23'), ('129','13'), ('200','13'), ('108','12'), ('136','9'), ('109','21'), ('198','4'), ('135','13'), ('189','24'), ('162','6'), ('159','18'), ('123','8'), ('171','19'), ('152','8'), ('149','21'), ('197','19'), ('121','23'), ('190','3'), ('110','5'), ('200','7'), ('175','22'), ('109','19'), ('158','24'), ('157','16'), ('177','21'), ('182','9'), ('140','6'), ('123','16'), ('129','21'), ('194','3'), ('177','23'), ('113','9'), ('115','23'), ('106','13'), ('112','15'), ('117','10'), ('154','24'), ('125','7'), ('140','15'), ('109','11'), ('114','7'), ('168','17'), ('158','8'), ('159','13'), ('162','23'), ('178','20'), ('179','16'), ('178','11'), ('199','15'), ('157','4'), ('163','17'), ('126','24'), ('104','4'), ('176','20'), ('140','11'), ('106','11'), ('184','1'), ('167','7'), ('106','14'), ('148','14'), ('141','17'), ('128','11'), ('176','8'), ('152','2'), ('168','9'), ('171','21'), ('156','22'), ('148','22'), ('144','15'), ('152','9'), ('157','10'), ('114','13'), ('119','21'), ('135','13'), ('111','4'), ('163','19'), ('192','24'), ('141','20'), ('181','21'), ('195','23'), ('131','24'), ('191','9'), ('166','10'), ('163','18'), ('179','14'), ('192','23'), ('122','13'), ('138','21'), ('103','5'), ('122','6'), ('165','10'), ('105','18'), ('112','3'), ('189','10'), ('103','9'), ('187','7'), ('129','22'), ('142','4'), ('168','13'), ('109','14'), ('185','20'), ('172','17'), ('190','5'), ('196','5'), ('183','17'), ('109','1'), ('125','16'), ('160','2'), ('134','6'), ('193','6'), ('185','4'), ('119','1'), ('159','7'), ('177','16'), ('169','9'), ('107','21'), ('182','16'), ('128','6'), ('145','6'), ('172','22'), ('109','16'), ('166','13'), ('102','8'), ('148','4'), ('122','8'), ('177','21'), ('147','5'), ('154','16'), ('101','2'), ('140','14'), ('190','1'), ('161','5'), ('102','1'), ('113','19'), ('123','3'), ('166','19'), ('128','15'), ('149','22'), ('121','5'), ('171','15'), ('155','12'), ('108','9'), ('106','7'), ('142','2'), ('133','14'), ('164','16'), ('101','7'), ('162','8'), ('200','8'), ('117','21'), ('176','16'), ('103','10'), ('119','12'), ('126','23'), ('167','5'), ('115','3'), ('197','9'), ('164','17'), ('101','22'), ('198','1'), ('119','6'), ('150','10'), ('188','10'), ('174','12'), ('165','13'), ('103','12'), ('113','2'), ('130','5'), ('170','12'), ('121','23'), ('174','19'), ('119','13'), ('187','11'), ('186','2'), ('183','16'), ('199','11'), ('168','1'), ('191','17'), ('148','12'), ('166','18'), ('133','11'), ('199','13'), ('158','14'), ('160','22'), ('106','9'), ('130','15'), ('115','2'), ('183','10'), ('171','22'), ('119','23'), ('194','9'), ('147','12'), ('118','14'), ('120','24'), ('119','1'), ('163','2'), ('109','9'), ('143','15'), ('149','14'), ('194','14')\
	// ");

	// //sets up links between some users
	// connection.query("\
	// INSERT INTO `likes` VALUES ('102','200','0'), ('102','198','1')\
	// ");

	// //puts pictures in for people
	// connection.query("\
	// INSERT INTO `pictures` VALUES ('1','http://lorempixel.com/400/300/people/','181'), ('2','http://lorempixel.com/400/300/people/','106'), ('3','http://lorempixel.com/400/300/people/','189'), ('4','http://lorempixel.com/400/300/people/','167'), ('5','http://lorempixel.com/400/300/people/','128'), ('6','http://lorempixel.com/400/300/people/','132'), ('7','http://lorempixel.com/400/300/people/','125'), ('8','http://lorempixel.com/400/300/people/','200'), ('9','http://lorempixel.com/400/300/people/','184'), ('10','http://lorempixel.com/400/300/people/','186'), ('11','http://lorempixel.com/400/300/people/','198'), ('12','http://lorempixel.com/400/300/people/','120'), ('13','http://lorempixel.com/400/300/people/','101'), ('14','http://lorempixel.com/400/300/people/','177'), ('15','http://lorempixel.com/400/300/people/','197'), ('16','http://lorempixel.com/400/300/people/','138'), ('17','http://lorempixel.com/400/300/people/','126'), ('18','http://lorempixel.com/400/300/people/','114'), ('19','http://lorempixel.com/400/300/people/','191'), ('20','http://lorempixel.com/400/300/people/','133'), ('21','http://lorempixel.com/400/300/people/','187'), ('22','http://lorempixel.com/400/300/people/','171'), ('23','http://lorempixel.com/400/300/people/','121'), ('24','http://lorempixel.com/400/300/people/','119'), ('25','http://lorempixel.com/400/300/people/','199'), ('26','http://lorempixel.com/400/300/people/','105'), ('27','http://lorempixel.com/400/300/people/','124'), ('28','http://lorempixel.com/400/300/people/','115'), ('29','http://lorempixel.com/400/300/people/','116'), ('30','http://lorempixel.com/400/300/people/','188'), ('31','http://lorempixel.com/400/300/people/','193'), ('32','http://lorempixel.com/400/300/people/','150'), ('33','http://lorempixel.com/400/300/people/','165'), ('34','http://lorempixel.com/400/300/people/','153'), ('35','http://lorempixel.com/400/300/people/','190'), ('36','http://lorempixel.com/400/300/people/','104'), ('37','http://lorempixel.com/400/300/people/','156'), ('38','http://lorempixel.com/400/300/people/','192'), ('39','http://lorempixel.com/400/300/people/','182'), ('40','http://lorempixel.com/400/300/people/','137'), ('41','http://lorempixel.com/400/300/people/','180'), ('42','http://lorempixel.com/400/300/people/','129'), ('43','http://lorempixel.com/400/300/people/','176'), ('44','http://lorempixel.com/400/300/people/','134'), ('45','http://lorempixel.com/400/300/people/','178'), ('46','http://lorempixel.com/400/300/people/','147'), ('47','http://lorempixel.com/400/300/people/','136'), ('48','http://lorempixel.com/400/300/people/','131'), ('49','http://lorempixel.com/400/300/people/','145'), ('50','http://lorempixel.com/400/300/people/','155'), ('51','http://lorempixel.com/400/300/people/','183'), ('52','http://lorempixel.com/400/300/people/','144'), ('53','http://lorempixel.com/400/300/people/','122'), ('54','http://lorempixel.com/400/300/people/','164'), ('55','http://lorempixel.com/400/300/people/','173'), ('56','http://lorempixel.com/400/300/people/','117'), ('57','http://lorempixel.com/400/300/people/','163'), ('58','http://lorempixel.com/400/300/people/','127'), ('59','http://lorempixel.com/400/300/people/','107'), ('60','http://lorempixel.com/400/300/people/','135'), ('61','http://lorempixel.com/400/300/people/','159'), ('62','http://lorempixel.com/400/300/people/','175'), ('63','http://lorempixel.com/400/300/people/','109'), ('64','http://lorempixel.com/400/300/people/','103'), ('65','http://lorempixel.com/400/300/people/','139'), ('66','http://lorempixel.com/400/300/people/','157'), ('67','http://lorempixel.com/400/300/people/','111'), ('68','http://lorempixel.com/400/300/people/','172'), ('69','http://lorempixel.com/400/300/people/','146'), ('70','http://lorempixel.com/400/300/people/','194'), ('71','http://lorempixel.com/400/300/people/','174'), ('72','http://lorempixel.com/400/300/people/','151'), ('73','http://lorempixel.com/400/300/people/','179'), ('74','http://lorempixel.com/400/300/people/','112'), ('75','http://lorempixel.com/400/300/people/','185'), ('76','http://lorempixel.com/400/300/people/','162'), ('77','http://lorempixel.com/400/300/people/','196'), ('78','http://lorempixel.com/400/300/people/','141'), ('79','http://lorempixel.com/400/300/people/','161'), ('80','http://lorempixel.com/400/300/people/','154'), ('81','http://lorempixel.com/400/300/people/','113'), ('82','http://lorempixel.com/400/300/people/','195'), ('83','http://lorempixel.com/400/300/people/','152'), ('84','http://lorempixel.com/400/300/people/','166'), ('85','http://lorempixel.com/400/300/people/','108'), ('86','http://lorempixel.com/400/300/people/','142'), ('87','http://lorempixel.com/400/300/people/','170'), ('88','http://lorempixel.com/400/300/people/','118'), ('89','http://lorempixel.com/400/300/people/','158'), ('90','http://lorempixel.com/400/300/people/','102'), ('91','http://lorempixel.com/400/300/people/','149'), ('92','http://lorempixel.com/400/300/people/','148'), ('93','http://lorempixel.com/400/300/people/','130'), ('94','http://lorempixel.com/400/300/people/','160'), ('95','http://lorempixel.com/400/300/people/','168'), ('96','http://lorempixel.com/400/300/people/','143'), ('97','http://lorempixel.com/400/300/people/','123'), ('98','http://lorempixel.com/400/300/people/','110'), ('99','http://lorempixel.com/400/300/people/','140'), ('100','http://lorempixel.com/400/300/people/','169'),('101','https://www.eurekalert.org/multimedia/pub/web/37173_web.jpg','162'),('102','https://imaging.broadway.com/images/regular-43/w400/105136-11.png','114'),('103','https://static5.businessinsider.com/image/4f75cdb869bedd2a53000046/the-infamous-alabama-face-guy-wants-to-be-president-of-the-university-of-alabama-now.jpg','144')\
	// ");

	// //sets all test users' profile pic to be the first picture in the database
	// connection.query("\
	// UPDATE users SET profile_pic_id = 1\
	// ");

	// connection.query("\
	// UPDATE users SET profile_pic_id = 101\
	// WHERE id = 162\
	// ");

	// connection.query("\
	// UPDATE users SET profile_pic_id = 102\
	// WHERE id = 114\
	// ");

	// connection.query("\
	// UPDATE users SET profile_pic_id = 103\
	// WHERE id = 144\
	// ");

	// connection.query("\
	// UPDATE users SET profile_pic_id = NULL\
	// WHERE id = 111\
	// ");

	// connection.query("\
	// UPDATE users SET verified = 1\
	// ");

	// connection.query("\
	// INSERT INTO conversations (user1, user2) VALUES(1, 1)\
	// ");

	// for (var i = 101; i <= 200; i++){
	// 	var fame = Math.floor(Math.random() * 21);
	// 	connection.query(`UPDATE users SET fame = ${fame} WHERE id = ${i}`);
	// 	connection.query(`INSERT INTO history (viewer_id, viewed_id) VALUES (${i},${i})`);
	// }


	console.log('Sucess!');
	console.log('Exiting...');
	connection.end();
})