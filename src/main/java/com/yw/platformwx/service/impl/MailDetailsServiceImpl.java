package com.yw.platformwx.service.impl;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yw.platformwx.common.StringUtils;
import com.yw.platformwx.entity.MailDetailsEntity;
import com.yw.platformwx.mapper.MailDetailsEntityMapper;
import com.yw.platformwx.service.IMailDetailsService;

@Service
public class MailDetailsServiceImpl implements IMailDetailsService {
	
	@Autowired
	private MailDetailsEntityMapper mailDetailsEntityMapper;
	
	@Transactional(noRollbackFor=Exception.class)
	@Override
	public boolean insert(MailDetailsEntity entity) throws Exception {
		//判断实体是否为空
		if(StringUtils.checkFieldValueNull(entity)) {
			return false;
		}
		if(StringUtils.isBlankOr(entity.getUserName(),entity.getEmail(),entity.getPhone(),entity.getCorporateName(),entity.getContent())) {
			return false;
		}
		entity.setTid(UUID.randomUUID().toString());
		if(this.mailDetailsEntityMapper.insert(entity)>0) {
			return true;
		}
		return false;
	}

}
