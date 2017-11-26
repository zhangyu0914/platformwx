/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50718
Source Host           : 127.0.0.1:3306
Source Database       : platformwx

Target Server Type    : MYSQL
Target Server Version : 50699
File Encoding         : 65001

Date: 2017-11-26 21:48:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_mail_details
-- ----------------------------
DROP TABLE IF EXISTS `t_mail_details`;
CREATE TABLE `t_mail_details` (
`tid`  varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '主键' ,
`user_name`  varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '姓名/职位' ,
`corporate_name`  varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '公司名称' ,
`email`  varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '联系邮箱' ,
`phone`  varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '电话' ,
`content`  varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '内容' ,
`create_time`  datetime NOT NULL COMMENT '创建时间' ,
`update_time`  datetime NULL DEFAULT NULL COMMENT '更新时间' ,
PRIMARY KEY (`tid`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_unicode_ci
COMMENT='邮件详情表'

;

-- ----------------------------
-- Records of t_mail_details
-- ----------------------------
BEGIN;
COMMIT;
