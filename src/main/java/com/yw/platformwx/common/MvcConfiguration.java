package com.yw.platformwx.common;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class MvcConfiguration extends WebMvcConfigurerAdapter {

	/**
	 * <pre>
	 * 说       明: 配置静态资源
	 * 涉及版本: V1.0.0  
	 * 创  建  者: zhangyu
	 * 日       期: 2017年8月16日 下午2:02:18
	 * Q     Q: 982234234
	 * </pre>
	 */
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
		super.addResourceHandlers(registry);
	}

	/**
     * <pre>
     * 说       明: 跳转页面
     * 涉及版本: V1.0.0  
     * 创  建  者: zhangyu
     * 日       期: 2017年7月18日 下午1:53:36
     * Q     Q: 982234234
     * </pre>
     */
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
    	registry.addViewController("/mail/mailDetail").setViewName("mailDetail");
    	registry.addViewController("/mail/us").setViewName("us");
    	registry.addViewController("/mail/openPlatform").setViewName("openPlatform");
    	registry.addViewController("/mail/platformService").setViewName("platformService");
    	registry.addViewController("/mail/label").setViewName("label");
    	
    	registry.addViewController("/mail/baby").setViewName("baby");
    	registry.addViewController("/mail/personnel").setViewName("personnel");
    	registry.addViewController("/mail/ambient").setViewName("ambient");
    	
    	registry.addViewController("/mail/coldChain").setViewName("coldChain");
    	registry.addViewController("/mail/temperature").setViewName("temperature");
    	registry.addViewController("/mail/intellectualCareBed").setViewName("intellectualCareBed");
    	
    	registry.addViewController("/mail/infusion").setViewName("infusion");
	}
    
}
