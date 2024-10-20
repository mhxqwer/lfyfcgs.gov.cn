AccessibleTools.allSelectorConfig = {};
AccessibleTools.allSelectorConfig.useOutSiteFunc = false;
AccessibleTools.allSelectorConfig.borderFocusTags = "*[tabindex]";
AccessibleTools.allSelectorConfig.borderColor = "#00B0F0";
AccessibleTools.allSelectorConfig.borderOutlinePX = "2px";
AccessibleTools.allSelectorConfig.borderOutlineStyle = "solid";
AccessibleTools.allSelectorConfig.borderOutlineOffsetPx = "-2px";
AccessibleTools.allSelectorConfig.getTopNavSelector = function(){
	return AccessibleTools.allSelectorConfig.navSelectors ;
}
AccessibleTools.allSelectorConfig.getBottomNavSelector = function(){
	var bottomNavSelector = "";
	if($AccessTool("").length==0){
		bottomNavSelector = "";
	}else{
		bottomNavSelector = "";
	}
	return bottomNavSelector;
}	
// 导航区
AccessibleTools.allSelectorConfig.navSelectors = {
    "topNavArr":[
        {
            "mainSelector":"#accessTool .nav > ul.nav-list",
            "content":"",
            "inIframe":false,
            "iframeSelector":"",
            "menuArr":[]
        },
        {
            "mainSelector":"#accessTool .main > .link > .link-list",
            "content":"友情链接",
            "inIframe":false,
            "iframeSelector":"",
            "menuArr":[]
        },
        {
            "mainSelector":"#accessTool > #serviceQQ",
            "content":"专题",
            "inIframe":false,
            "iframeSelector":"",
            "menuArr":[
                {
                    selector:"#accessTool > #serviceQQ",
                    tabShowEvent:"mouseover",
                    tabContentSelector:"#accessTool > #serviceQQ > .onlinebox "
                },
            ]
        },
        //
        {
            "mainSelector":"#accessTool > .zfxxgk-wrap #zzxxglNav",
            "content":"政府信息公开",
            "inIframe":false,
            "iframeSelector":"",
            "menuArr":[]
        },
        //
        {
            "mainSelector":"#accessTool .bsfw .bmrk .bmcx ul",
            "content":"办事服务",
            "inIframe":false,
            "iframeSelector":"",
            "menuArr":[]
        },
        //
        {
            "mainSelector":"#accessTool .main .news-wrap > div:nth(2)",
            "content":"广西会计管理系统",
            "inIframe":false,
            "iframeSelector":"",
            "menuArr":[]
        },
    ]
};

//服务区
AccessibleTools.allSelectorConfig.serviceSelectors = [
    {
        "selector":"#accessTool > .top > .wrap",
        "content":"头部"
    },
    {
        "selector":"#accessTool > .foot > .footer-top",
        "content":"底部"
    },
];

//视窗区
AccessibleTools.allSelectorConfig.allSelectors = [
    {
        "selector":"#accessTool > .main > .focus-news-wrap > .focus > .flexslider",
        "content":"轮播"
    },
    {
        "selector":"#accessTool > .main > .focus-news-wrap > .focus-news",
        "content":"要闻"
    },
    {
        "selector":"#accessTool > .main > .mb20",
        "content":"看，问，查"
    },
    {
        "selector":"#accessTool > .main > .mb10 > .kjzc",
        "content":"会计之窗"
    },
    {
        "selector":"#accessTool > .main > .container",
        "content":"专题"
    },
    //
    {
        "selector":"#accessTool > .main > .news-wrap",
        "content":"要闻"
    },
    //
    {
        "selector":"#accessTool > .zfxxgk-wrap  .zfxxgk-right .zfxxgk-more",
        "content":""
    },
    {
        "selector":"#accessTool > .wrap #morelist",
        "content":""
    },
    //
    {
        "selector":"#accessTool .bsfw .bsfw_select",
        "content":"办事服务"
    },
    //
    {
        "selector":"#accessTool .main-sub",
        "content":""
    },
    //
    {
        "selector":"#accessTool .main-sub .sub-txt:nth(0)",
        "content":"建议提案"
    },
    {
        "selector":"#accessTool .main-sub .sub-txt:nth(1)",
        "content":"财政资金直达基层"
    },
    {
        "selector":"#accessTool .main-sub .sub-txt:nth(2)",
        "content":"政府债务管理"
    },
    {
        "selector":"#accessTool .main-sub .sub-txt:nth(3)",
        "content":"减税降费"
    },
    {
        "selector":"#accessTool .main-sub .sub-txt:nth(3)",
        "content":"机关党建"
    },
    {
        "selector":"#accessTool .main-sub .main-sub-panel .fn-left",
        "content":"热点聚焦"
    },
    {
        "selector":"#accessTool .main-sub .main-sub-panel .fn-right",
        "content":"归档栏目"
    },
    //
    {
        "selector":"#accessTool .main .news-gird:nth(0)",
        "content":"工作动态"
    },
    {
        "selector":"#accessTool .main .news-gird:nth(1)",
        "content":"政策文件"
    },
    {
        "selector":"#accessTool .main .kjks >.kjks-tit",
        "content":"会计考试"
    },
    {
        "selector":"#accessTool .main .kjks >.kjks-tit",
        "content":"会计考试"
    },
    {
        "selector":"#accessTool .main .kjks >.tab-bd2",
        "content":"会计考试详情"
    },
    {
        "selector":"#accessTool .main .sub-txt:nth(0)",
        "content":"会计考试资讯"
    },
    {
        "selector":"#accessTool .main .sub-txt:nth(1)",
        "content":"注册会计"
    },
    {
        "selector":"#accessTool .main .sub-txt:nth(2)",
        "content":"各地会计人员服务联系方式"
    },
];

//交互区
AccessibleTools.allSelectorConfig.interactionSelectors = [
    {
        "selector":"#accessTool > .header > .wrap .search-wrap .search-form",
        "content":"搜索"
    },
    //https://czt.gxzf.gov.cn/zfxxgkzl
    {
        "selector":"#accessTool > .zfxxgk-wrap .zfxxgk-search-form",
        "content":"政府信息公开"
    },
    {
        "selector":"#accessTool > .wjk-search .searchTop:nth(0)",
        "content":"政府信息公开文件"
    },
    {
        "selector":"#accessTool > .wjk-search .main > .main-right",
        "content":"政策文件搜索"
    },
    {
        "selector":"#accessTool > .home_main .zfxxgk-main .gz-search",
        "content":""
    },
];
//列表区
AccessibleTools.allSelectorConfig.listAreaSelectors = [
    {
        "selector":"#accessTool > .main-sub > .more",
        "content":"新闻动态"
    },
    //
    {
        "selector":"#accessTool > .zfxxgk-wrap #zfxxgkZcwj",
        "content":"政策文件"
    },
    {
        "selector":"#accessTool > .wjk-search .main > .main-cont",
        "content":"政策文件"
    },
    {
        "selector":"#accessTool > .main-sub > .more",
        "content":"政策解读"
    },
    {
        "selector":"#accessTool > .home_main .zfxxgk-main .zcwj-box",
        "content":""
    },
    //
    {
        "selector":"#accessTool .bsfw .bsfw_list",
        "content":"办事服务"
    },
    {
        "selector":"#accessTool .bsfw .bmrk .czgc > .list > ul",
        "content":"办事服务"
    },
    {
        "selector":"#accessTool .bsfw .xzzq .sub_main",
        "content":"办事服务下载专区"
    },
];

//正文区
AccessibleTools.allSelectorConfig.articleAreaSelectors = [
    {
        "selector":"#accessTool > .wrap > .more > .article",
        "content":""
    },
    //
    {
        "selector":"#accessTool > .zfxxgk-wrap .zfxxgk-article",
        "content":"政府信息公开"
    },
    {
        "selector":"#accessTool > .wrap .people-desc",
        "content":"文件参数"
    },
    {
        "selector":"#accessTool > .wrap .more",
        "content":"文件"
    },
    //
    {
        "selector":"#accessTool .wrap .email-detail:nth(0)",
        "content":"互动交流来信"
    },
    {
        "selector":"#accessTool .wrap .email-detail:nth(1)",
        "content":"互动交流回复"
    },
];

AccessibleTools.pageReformSetBorder = function () {
	var focusTags, usedColor;
	if (AccessibleTools.allSelectorConfig.borderFocusTags == "") {
		focusTags = "*[tabindex]";
	} else {
		focusTags = AccessibleTools.allSelectorConfig.borderFocusTags;
	}
	if (AccessibleTools.allSelectorConfig.borderColor == "") {
		usedColor = "#00B0F0";
	} else {
		usedColor = AccessibleTools.allSelectorConfig.borderColor;
	}
	$AccessTool(focusTags).focus(function () {
		this.style.setProperty("outline", AccessibleTools.allSelectorConfig.borderOutlinePX+" "+AccessibleTools.allSelectorConfig.borderOutlineStyle+" "+usedColor, "important");
		this.style.setProperty("outline-offset", AccessibleTools.allSelectorConfig.borderOutlineOffsetPx, "important");
	});
	$AccessTool(focusTags).blur(function () {
		$AccessTool(this).css({
			"outline": "",
			"outline-offset": ""
		});
	});
}
AccessibleTools.pageReformAddOutSiteLinkClass = function () {
	var curWwwPathArray = window.document.location.href.split('/');
	$AccessTool('a:not([href^="javascript"])').each(function () {
		if (this.href != "" && this.href != "undefined") {
			var aHrefArray = this.href.split('/');
			if (curWwwPathArray[2] != aHrefArray[2]) {
				$AccessTool(this).addClass("gtJumpOut");
			}
		}
	});
};
AccessibleTools.skipNav = function(){
	if($AccessTool("#skipCrossNav").length==0){
		var gt_jumpNode = document.createElement("a");
		gt_jumpNode.setAttribute("id", "skipCrossNav");
		gt_jumpNode.setAttribute("href", "#gtMainContent");
		gt_jumpNode.setAttribute("aria-label", "按回车键跳过导航");
		gt_jumpCrossText='<span class="gtSkipFont" style="font-family:microsoft yahei !important">跳过导航</span><span class="gtSkipCrossNavEnter"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" aria-labelledby="returnIconTitle" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#2329D6"> <path d="M13,8 L13,11 13,13 L6,13"/> <polyline points="8 16 5 13 8 10"/></svg>按下回车</span>';
		gt_jumpNodeCss=document.createElement("style");
		gt_jumpNodeCssText='#skipCrossNav{ border:3px solid #184f87; padding:20px 20px; border-radius: 30px; float:left; width:auto; position:fixed; left:100px; top:125px; box-shadow: 5px 3px 4px 2px #136ef84d; outline: solid 0 #136ef8; background:#fff; opacity:0; line-height:24px; display:inline-flex; color:#184f87; font-weight:bold; text-decoration:none;  -webkit-transition: all .15s ease; -moz-transition: all .15s ease; -o-transition: all .15s ease; transition: all .15s ease; z-index:-9999;}#skipCrossNav:focus { top: 105px; opacity: 1; z-index: 99999;}#skipCrossNav .gtSkipFont{ width:100px; font-size:18px;}#skipCrossNav span.gtSkipCrossNavEnter{ padding: 0px 10px; border-radius: 50px; color: #fff; background-color: #2a6eb3; line-height:24px; font-size:16px;}#skipCrossNav span.gtSkipCrossNavEnter svg{ float:left;}'
		gt_jumpNode.innerHTML = gt_jumpCrossText;
		gt_jumpNodeCss.innerHTML=gt_jumpNodeCssText
		if(document.getElementById("accessTool")!=null){
			document.getElementById("accessTool").insertBefore(gt_jumpNode, document.getElementById("accessTool").childNodes[0]);
			document.getElementById("accessTool").insertBefore(gt_jumpNodeCss, document.getElementById("accessTool").childNodes[0]);
		}
	}
};
AccessibleTools.pageReformFunc = function (jqtt) {
	var $ = typeof (jQuery) == "function" ? window.$ : jqtt;
	AccessibleTools.pageReformSetBorder();
	if(AccessibleTools.allSelectorConfig.useOutSiteFunc){
		AccessibleTools.pageReformAddOutSiteLinkClass();
	}
	AccessibleTools.skipNav();
	AccessibleTools.pageReform($);
}
AccessibleTools.pageReform = function($){
	
}