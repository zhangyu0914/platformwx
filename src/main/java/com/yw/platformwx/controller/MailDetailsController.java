package com.yw.platformwx.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yw.platformwx.entity.MailDetailsEntity;
import com.yw.platformwx.service.IMailDetailsService;

@RestController
@RequestMapping("mail")
public class MailDetailsController {
	
	@Autowired
	private IMailDetailsService mailDetailsService;
	
	@RequestMapping("mailInsert")
	public Map<String,String> mailInsert(MailDetailsEntity entity){
		Map<String,String> map=new HashMap<String,String>();
		try {
			boolean result=this.mailDetailsService.insert(entity);
			if(result) {
				map.put("result", "true");
			}else {
				map.put("result", "faslse");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return map;
		
	}
}
