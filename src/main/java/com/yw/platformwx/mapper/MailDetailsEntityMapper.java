package com.yw.platformwx.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import com.yw.platformwx.entity.MailDetailsEntity;

@Mapper
public interface MailDetailsEntityMapper {

	@Insert("INSERT INTO T_MAIL_DETAILS(TID,USER_NAME,CORPORATE_NAME,EMAIL,PHONE,CONTENT,CREATE_TIME,UPDATE_TIME) VALUES(#{tid},#{userName},#{corporateName},#{email},#{phone},#{content},DATE_FORMAT(SYSDATE(), '%Y%m%d%H%i%s'),DATE_FORMAT(SYSDATE(), '%Y%m%d%H%i%s'))")
	public Integer insert(MailDetailsEntity entity) throws Exception; 
}
