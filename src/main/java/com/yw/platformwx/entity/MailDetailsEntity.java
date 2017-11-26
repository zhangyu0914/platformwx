package com.yw.platformwx.entity;

import java.io.Serializable;
import java.sql.Timestamp;

/**<pre>
 * 功       能: 邮件详情表
 * 涉及版本: V1.0.0 
 * 创  建  者: zhangyu
 * 日       期: 2017年8月15日 上午10:27:41
 * Q     Q: 982234234
 * </pre>
 */
public class MailDetailsEntity implements Serializable{

	private static final long serialVersionUID = -4207134245558626902L;
	
	private String tid;//主键
	private String userName;//姓名/职位
	private String corporateName;//公司名称
	private String email;//联系邮箱
	private String phone;//电话
	private String content;//内容
	private Timestamp createTime;//创建时间
	private Timestamp updateTime;//更新时间
	
	public MailDetailsEntity() {
		super();
	}
	public String getTid() {
		return tid;
	}
	public void setTid(String tid) {
		this.tid = tid;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getCorporateName() {
		return corporateName;
	}
	public void setCorporateName(String corporateName) {
		this.corporateName = corporateName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Timestamp getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Timestamp createTime) {
		this.createTime = createTime;
	}
	public Timestamp getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(Timestamp updateTime) {
		this.updateTime = updateTime;
	}
	
}
