package com.yw.platformwx.common;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.List;
import java.util.Set;

public class StringUtils {
	public static boolean checkFieldValueNull(Object bean) {
		boolean result = true;
		if (bean == null) {
			return true;
		}
		Class<?> cls = bean.getClass();
		Method[] methods = cls.getDeclaredMethods();
		Field[] fields = cls.getDeclaredFields();
		for (Field field : fields) {
			try {
				String fieldGetName = parGetName(field.getName());
				if (!checkGetMet(methods, fieldGetName)) {
					continue;
				}
				Method fieldGetMet = cls.getMethod(fieldGetName, new Class[] {});
				Object fieldVal = fieldGetMet.invoke(bean, new Object[] {});
				if (fieldVal != null) {
					if ("".equals(fieldVal)) {
						result = true;
					} else {
						result = false;
					}
				}
			} catch (Exception e) {
				continue;
			}
		}
		return result;
	}

	/**
	 * 拼接某属性的 get方法
	 *
	 * @param fieldName
	 * @return String
	 */
	public static String parGetName(String fieldName) {
		if (null == fieldName || "".equals(fieldName)) {
			return null;
		}
		int startIndex = 0;
		if (fieldName.charAt(0) == '_')
			startIndex = 1;
		return "get" + fieldName.substring(startIndex, startIndex + 1).toUpperCase()
				+ fieldName.substring(startIndex + 1);
	}

	/**
	 * 判断是否存在某属性的 get方法
	 *
	 * @param methods
	 * @param fieldGetMet
	 * @return boolean
	 */
	public static boolean checkGetMet(Method[] methods, String fieldGetMet) {
		for (Method met : methods) {
			if (fieldGetMet.equals(met.getName())) {
				return true;
			}
		}
		return false;
	}
	
	/**
	 * <pre>
	 * 说   明: 只要其中一个为空，就返回TRUE
	 * @param objects
	 * @return
	 * 创建者: 陈    林(Vickey)
	 * 日   期: 2014-6-25下午4:02:48
	 * </pre>
	 */
	public static boolean isBlankOr(Object... objects) {
		for (Object obj : objects) {
			if (isBlank(obj)) {
				return true;
			}
		}
		return false;
	}
	
	/**
	 * 空字符串检验
	 * 
	 * @param str
	 * @return
	 */
	public static boolean isBlank(final Object obj) {
		if (obj == null) {
			return true;
		} else if (obj instanceof String) {
			String data = obj.toString();
			if (data == null || data.trim().equals("")
					|| data.trim().equalsIgnoreCase("null")) {
				return true;
			} else {
				return false;
			}
		} else if (obj instanceof List) {
			List data = (List) obj;
			if (data == null || data.size() == 0) {
				return true;
			} else {
				return false;
			}
		} else if (obj instanceof Set) {
			Set data = (Set) obj;
			if (data == null || data.size() == 0) {
				return true;
			} else {
				return false;
			}
		} else if (obj instanceof Integer) {
			Integer data = (Integer) obj;
			if (data == null) {
				return true;
			} else {
				return false;
			}
		} else if (obj instanceof String[]) {
			String[] data = (String[]) obj;
			if (data == null || data.length == 0) {
				return true;
			} else {
				return false;
			}
		} else if (obj instanceof Double) {
			Double data = (Double) obj;
			if (data == null) {
				return true;
			} else {
				return false;
			}
		} else if (obj instanceof StringBuffer) {
			StringBuffer data = (StringBuffer) obj;
			if (data == null || data.length() == 0) {
				return true;
			} else {
				return false;
			}
		} else if (obj instanceof StringBuilder) {
			StringBuilder data = (StringBuilder) obj;
			if (data == null || data.length() == 0) {
				return true;
			} else {
				return false;
			}
		}
		return false;
	}
}
