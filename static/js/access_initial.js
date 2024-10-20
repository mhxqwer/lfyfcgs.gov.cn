
if (top == self && typeof (accessInitial) == "undefined") {
    var accessInitial = {}; 
    accessInitial.path = "/accessTool/";
     accessInitial.toolbarOpenStatus = null; 
     accessInitial.cookieDoamin = ""; 
     try {
        var gttemp = document.createElement("style"); 
        gttemp.setAttribute("type", "text/css"); 
        gttemp.id = "acToolsStyle"; 
        gttemp.textContent = ".gt-tools {background: transparent;font-size:16px;color: #000000;left: 0;padding: 10px;position: absolute;top: -104.2rem;-webkit-transition: all 0.2s ease-in-out;transition: all 0.2s ease-in-out;z-index: 7001;}.gt-tools:focus {background: white;left: 0;outline: 0;position: absolute;top: 0;-webkit-transition: all 0.2s ease-in-out;transition: all 0.2s ease-in-out;}"
        document.getElementsByTagName("head")[0].appendChild(gttemp); 
        var gtTipLink1 = document.createElement("a"); 
        gtTipLink1.setAttribute("href", "javascript:void(0);"); 
        gtTipLink1.setAttribute("aria-label", "按回车键打开无障碍说明页面,按Shift + 1键打开导盲模式。"); 
        gtTipLink1.appendChild(document.createTextNode("按回车键打开无障碍说明页面,按Shift + 1键打开导盲模式。")); 
        gtTipLink1.tabIndex = "7"
        gtTipLink1.id = "gtTipLink1"; 
        gtTipLink1.className = "gt-tools";
        document.getElementsByTagName("BODY")[0].appendChild(gtTipLink1); 
        gtTipLink1.onclick = function () { 
            window.open(accessInitial.path + "help.html", "_blank"); 
        }
    } catch (e) { }
    accessInitial.loadScript = function (func) { 
        var gt_jquery_js = document.createElement('script'); 
        gt_jquery_js.setAttribute('type', 'text/javascript'); 
        gt_jquery_js.setAttribute('src', accessInitial.path + 'jquery.js');
        gt_jquery_js.setAttribute('charset', 'utf-8'); 
        gt_jquery_js.onload = function () { 
                var gt_soundmanager2_js = document.createElement('script'); 
                gt_soundmanager2_js.setAttribute('type', 'text/javascript'); 
                gt_soundmanager2_js.setAttribute('src', accessInitial.path + 'soundmanager2.js'); 
                gt_soundmanager2_js.setAttribute('charset', 'utf-8'); 
                gt_soundmanager2_js.onload = function () { 
                    var gt_pinyin_js = document.createElement('script'); 
                    gt_pinyin_js.setAttribute('type', 'text/javascript'); 
                    gt_pinyin_js.setAttribute('src', accessInitial.path + 'pinyin.js'); 
                    gt_pinyin_js.setAttribute('charset', 'utf-8'); 
                    gt_pinyin_js.onload = function () { 
                        var gt_handleInnerIframe_js = document.createElement('script'); 
                        gt_handleInnerIframe_js.setAttribute('type', 'text/javascript'); 
                        gt_handleInnerIframe_js.setAttribute('src', accessInitial.path + 'iframes.js'); 
                        gt_handleInnerIframe_js.setAttribute('charset', 'utf-8'); 
                        gt_handleInnerIframe_js.onload = function () { 
                            var gt_toolbar_js = document.createElement('script'); 
                            gt_toolbar_js.setAttribute('type', 'text/javascript'); 
                            gt_toolbar_js.setAttribute('src', accessInitial.path + 'Access_main.js'); 
                            gt_toolbar_js.setAttribute('charset', 'utf-8'); 
                            gt_toolbar_js.setAttribute('id', 'Access_main'); 
                            document.head.appendChild(gt_toolbar_js); 
                            gt_toolbar_js.onload = function () { 
                                if (func != null) { func(); } 
                        }; 
                    }; 
                    document.head.appendChild(gt_handleInnerIframe_js);
                }; 
                document.head.appendChild(gt_pinyin_js); 
        }; 
        document.head.appendChild(gt_soundmanager2_js); 
    }; 
    document.head.appendChild(gt_jquery_js); 
}; 
accessInitial.getCookie = function (name) {
        var nameEQ = "ac_" + name + "=";
        var ca = document.cookie.split(';'); 
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i]; while (c.charAt(0) == ' ')
                c = c.substring(1, c.length); if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
}; 
    accessInitial.setCookie = function (name, value, days) {
        name = "ac_" + name; 
        if (days) { 
            var date = new Date(); date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); 
            var expires = "; expires=" + date.toGMTString(); 
        } else { 
            var expires = ""; 
        }
        document.cookie = name + "=" + value + "; path=/" + accessInitial.cookieDoamin;
    }; 
    accessInitial.gtTabIndex = 0; 
    accessInitial.init = function () {
        accessInitial.insertDoms(); 
        accessInitial.toolbarOpenStatus = accessInitial.getCookie("isAccessToolShow"); 
        var readScreenStatus = accessInitial.getCookie("readScreen"); 
        if (accessInitial.toolbarOpenStatus == "true" || accessInitial.toolbarOpenStatus == true || window.location.search.indexOf("ewt=1") > -1) {
            if (accessInitial.checkUsePC()) {
                if (typeof (jQuery) == 'function') { 
                    if (readScreenStatus == "true" || readScreenStatus == true) { 
                        jQuery("#accessToolBar_normal").hide(); 
                        jQuery("#toolbarPage2").show(); 
                        jQuery("#accessToolBar").show("fast", function () { 
                            jQuery("body").css("padding-top", "98px"); 
                        }); 
                    }else { 
                        jQuery("#accessToolBar_normal").show(); 
                        jQuery("#toolbarPage2").hide(); 
                        jQuery("#accessToolBar").show("fast", function () { 
                            jQuery("body").css("padding-top", "98px"); 
                        }); 
                    } 
                } else { 
                    if (readScreenStatus == "true" || readScreenStatus == true) {
                        document.body.style.paddingTop = "98px";  
                        document.getElementById("accessToolBar_normal").style.display = "none"; 
                        document.getElementById("toolbarPage2").style.display = "block"; 
                        document.getElementById("accessToolBar").style.display = "block"; 
                    } else { 
                        document.body.style.paddingTop = "98px"; 
                        document.getElementById("accessToolBar_normal").style.display = "block"; 
                        document.getElementById("toolbarPage2").style.display = "none"; 
                        document.getElementById("accessToolBar").style.display = "block"; 
                    } 
                }
                accessInitial.loadScript(null);
            } else { 
                accessInitial.loadScript(function () { 
                    $AccessTool("#accessToolBar_normal").show(); 
                    $AccessTool("#toolbarPage2").hide(); 
                    $AccessTool("#accessToolBar").show("fast"); 
                }); 
            }
        } else {
            if (accessInitial.checkUsePC()) { 
                accessInitial.openFunc_pc(readScreenStatus); 
            } else { 
                accessInitial.openFunc_mobile(); 
            }
            document.onkeydown = function (e) {
                if (e.shiftKey) {
                    if (typeof (AccessibleTools) == "undefined") {
                        if (e.keyCode == 49) {
                            if (navigator.userAgent.toLowerCase().indexOf("msie 8.0") > -1 || navigator.userAgent.toLowerCase().indexOf("msie 7.0") > -1) { 
                                alert("当前浏览器版本过低,辅助工具无法正常使用!\r\n请使用更高版本的浏览器!"); 
                                return false; 
                            }
                            if (document.getElementById("gt_btn") != null) { 
                                document.getElementById("gt_btn").onclick = null; 
                                document.getElementById("gt_btn").onkeydown = null 
                            }
                            accessInitial.setCookie("isAccessToolShow", "true", 10); 
                            accessInitial.setCookie("readScreen", false, 10); 
                            accessInitial.setCookie("speakVolume", 100, 10); 
                            if (typeof (jQuery) == 'function') { 
                                jQuery("#accessToolBar").show("fast", function () { 
                                    console.log("1")
                                    if(accessInitial.checkUsePC()){
                                        jQuery("body").css("padding-top", "98px");
                                    } else{
                                        jQuery("body").css("padding-top", "0");
                                    }
                                }); 
                                jQuery("#accessToolBar_normal").show(); 
                                jQuery("#toolbarPage2").hide();
                            } else { 
                                console.log("2")
                                if(accessInitial.checkUsePC()){
                                    document.body.style.paddingTop = "98px";
                                }else{
                                    document.body.style.paddingTop = "0";
                                } 
                                document.getElementById("accessToolBar_normal").style.display = "block"; 
                                document.getElementById("toolbarPage2").style.display = "none";
                                document.getElementById("accessToolBar").style.display = "block"; 
                            }
                            accessInitial.loadScript(function () { 
                                console.log("3")
                                if(accessInitial.checkUsePC()){
                                    jQuery("body").css("padding-top", "98px");
                                } else{
                                    jQuery("body").css("padding-top", "0");
                                }
                                $AccessTool("#accessToolBar_normal").show(); 
                                $AccessTool("#accessToolBar").show("fast", function () { 
                                    $AccessTool("#toolbarPage2").hide(); 
                                }); 
                                AccessibleTools.rebuild(); 
                                AccessibleTools.isOpen = true; 
                            });
                        }
                    } else if (AccessibleTools.isOpen) { 
                        if (e.keyCode == 49) { 
                            AccessibleTools.close();
                        } 
                    }
                }
            }
        }
    }
    accessInitial.mobileHtml = '' +
        '<div class="mobileHtml_div" id="mobileHtml_color">' +
            '<img src="/accessTool/img/color.png" width="35"/>'+
            '<div class="mobileHtml_title">配色</div>' +
        '</div>' +
        '<div class="mobileHtml_div" id="mobileHtml_read">' +
        '<img src="/accessTool/img/reader.png" width="35"/>' +
            '<div class="mobileHtml_title">阅读</div>' +
        '</div>' +
        '<div class="mobileHtml_div" id="mobileHtml_setting" >' +
        '<img src="/accessTool/img/setting.png" width="35"/>' +
            '<div class="mobileHtml_title">设置</div>' +
        '</div>' +
        '<div class="mobileHtml_div" id="mobileHtml_exit">' +
        '<img src="/accessTool/img/exit.png" width="35"/>' +
            '<div class="mobileHtml_title">退出</div>' +
        '</div>' + 
        '<div id="mobileHtml_setting_container">'+
            '<div class="mHtml_setting_head">'+
                '<div class="mHtml_setting_head_title">设置</div>'+
                '<div id="settingClose"><svg t="1696901152937" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2309" width="35" height="35"><path d="M511.936 559.104l-169.344 169.344a32 32 0 0 1-22.4 9.6 32 32 0 0 1-22.72-54.72l169.344-169.344-169.344-169.344a32 32 0 0 1 45.12-45.12l169.344 169.312L681.6 299.2a32 32 0 1 1 45.12 45.12l-169.632 169.664 169.632 169.664a32 32 0 0 1-22.4 54.4 32 32 0 0 1-22.72-9.28l-169.664-169.664z" fill="#0073ff" p-id="2310"></path></svg></div>'+
            '</div>'+
            '<div class="mHtml_setting_body">'+
                '<ul class="setting_body_tab">'+
                    '<li class="tab_li active" data-target="0">主题</li>'+
                    '<li class="tab_li" data-target="1">字体</li>'+
                    '<li class="tab_li" data-target="2">语速</li>'+
                    '<li class="tab_li" data-target="3">护眼</li>'+
                '</ul>'+
                '<div class="setting_body">'+
                    '<div class="setting_body_panel active">'+
                        '<ul class="panel_list">'+
                            '<li class="panel_list_item active" data-color-theme="defaltMode">'+
                                '<div class="panel_list_item_title">原始色</div>'+
                                '<div class="panel_list_item_btn">'+
                                    '<div class="panel_list_item_checkBox"></div>'+
                                '</div>'+
                            '</li>'+
                            '<li class="panel_list_item" data-color-theme="whiteBlackMode">'+
                                '<div class="panel_list_item_title">白底黑字</div>'+
                                '<div class="panel_list_item_btn">'+
                                    '<div class="panel_list_item_checkBox"></div>'+
                                '</div>'+
                            '</li>'+
                            '<li class="panel_list_item" data-color-theme="blueYellowMode">'+
                                '<div class="panel_list_item_title">蓝底黄字</div>'+
                                '<div class="panel_list_item_btn">'+
                                    '<div class="panel_list_item_checkBox"></div>'+
                                '</div>'+
                            '</li>'+
                            '<li class="panel_list_item" data-color-theme="yellowBlackMode">'+
                                '<div class="panel_list_item_title">黄底黑字</div>'+
                                '<div class="panel_list_item_btn">'+
                                    '<div class="panel_list_item_checkBox"></div>'+
                                '</div>'+
                            '</li>'+
                            '<li class="panel_list_item" data-color-theme="yellowMode">'+
                                '<div class="panel_list_item_title">黑底黄字</div>'+
                                '<div class="panel_list_item_btn">'+
                                    '<div class="panel_list_item_checkBox"></div>'+
                                '</div>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                    '<div class="setting_body_panel">'+
                        '<ul class="panel_list">'+
                            '<li class="panel_list_item" data-font-theme="xlarge">'+
                                '<div class="panel_list_item_title">特大</div>'+
                                '<div class="panel_list_item_btn">'+
                                    '<div class="panel_list_item_checkBox"></div>'+
                                '</div>'+
                            '</li>'+
                            '<li class="panel_list_item" data-font-theme="large">'+
                                '<div class="panel_list_item_title">较大</div>'+
                                '<div class="panel_list_item_btn">'+
                                    '<div class="panel_list_item_checkBox"></div>'+
                                '</div>'+
                            '</li>'+
                            '<li class="panel_list_item active" data-font-theme="defalt">'+
                                '<div class="panel_list_item_title">适中</div>'+
                                '<div class="panel_list_item_btn">'+
                                    '<div class="panel_list_item_checkBox"></div>'+
                                '</div>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                    '<div class="setting_body_panel">'+
                        '<ul class="panel_list">'+
                            '<li class="panel_list_item" data-speek-speech="fast">'+
                                '<div class="panel_list_item_title">快速</div>'+
                                '<div class="panel_list_item_btn">'+
                                    '<div class="panel_list_item_checkBox"></div>'+
                                '</div>'+
                            '</li>'+
                            '<li class="panel_list_item active" data-speek-speech="defalt">'+
                                '<div class="panel_list_item_title">适中</div>'+
                                '<div class="panel_list_item_btn">'+
                                    '<div class="panel_list_item_checkBox"></div>'+
                                '</div>'+
                            '</li>'+
                            '<li class="panel_list_item" data-speek-speech="slow">'+
                                '<div class="panel_list_item_title">缓慢</div>'+
                                '<div class="panel_list_item_btn">'+
                                    '<div class="panel_list_item_checkBox"></div>'+
                                '</div>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                    '<div class="setting_body_panel">'+
                        '<ul class="panel_list panel_list_huyan">'+
                            '<li class="panel_list_item panel_list_huyan_item active" data-huyan-mode="defalt">'+
                                '<div class="panel_list_item_title">默认</div>'+
                                '<div class="panel_list_item_btn">'+
                                    '<div class="panel_list_item_checkBox"></div>'+
                                '</div>'+
                            '</li>'+
                            '<li class="panel_list_item panel_list_huyan_item" data-huyan-mode="dark">'+
                                '<div class="panel_list_item_title">黑暗</div>'+
                                '<div class="panel_list_item_btn">'+
                                    '<div class="panel_list_item_checkBox"></div>'+
                                '</div>'+
                            '</li>'+
                            '<li class="panel_list_item panel_list_huyan_item" data-huyan-mode="soft">'+
                                '<div class="panel_list_item_title">柔和</div>'+
                                '<div class="panel_list_item_btn">'+
                                    '<div class="panel_list_item_checkBox"></div>'+
                                '</div>'+
                            '</li>'+
                            '<li class="panel_list_item panel_list_huyan_item" data-huyan-mode="heightLight">'+
                                '<div class="panel_list_item_title">高亮</div>'+
                                '<div class="panel_list_item_btn">'+
                                    '<div class="panel_list_item_checkBox"></div>'+
                                '</div>'+
                            '</li>'+
                            '<li class="panel_list_item panel_list_huyan_item" data-huyan-mode="highContrast">'+
                                '<div class="panel_list_item_title">高对比</div>'+
                                '<div class="panel_list_item_btn">'+
                                    '<div class="panel_list_item_checkBox"></div>'+
                                '</div>'+
                            '</li>'+
                            '<li class="panel_list_item panel_list_huyan_item" data-huyan-mode="gray">'+
                                '<div class="panel_list_item_title">灰度</div>'+
                                '<div class="panel_list_item_btn">'+
                                    '<div class="panel_list_item_checkBox"></div>'+
                                '</div>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'
    accessInitial.helpMaskHtml = '' +
        '<div id="helpBox">' +
            '<div id="helpClose"><svg id="helpClose1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>f2.cls-1{fill:#000000;}</style></defs><path class="cls-1" d="M28.44,31.62,16.13,20a1.8,1.8,0,0,1,0-2.63l.21-.2a2,2,0,0,1,2.77,0L31.41,28.8a1.77,1.77,0,0,1,0,2.62l-.21.2A2,2,0,0,1,28.44,31.62Z"/><path class="cls-1" d="M31.22,19.66,19.42,31.8a2,2,0,0,1-2.76.1l-.22-.19a1.78,1.78,0,0,1-.11-2.62L28.12,17a2,2,0,0,1,2.77-.11l.22.2A1.79,1.79,0,0,1,31.22,19.66Z"/></svg></div>' +
            '<div class="helpContainer">' +
                '<div>' +
                    '<h2>语音网站无障碍声明及操作说明</h2>' +
                    '<div class="pages_content">' +
                        '<div class="pages_title1">' +
                            '<h3>第一部分：网站无障碍服务声明</h3>' +
                            '<p>本网站严格遵循W3C《WCAG2.0》国际标准和《网站设计无障碍技术要求》及《Web信息无障碍交流通用设计规范》国内标准进行设计，充分满足信息无障碍重点服务人群盲人用户的需求，并通过提供全程键盘和人机语音互动等替代操作方式，网页文本信息影音化和特大文字网页等推送方式，为行动障碍的残疾人，低弱视力的视障人士，文化认知有障碍人士，以及阅读能力下降的老年人提供更加便捷高效、更加智能友好的服务。</p>' +
                            '<p>计算机网站及客户端页面的所有内容可被键盘全程操作，移动网站及APP支持智能手势和人机语音互动替代操作。所有网页提供智能盲道和操作提示服务，所有图片和按钮控件均标示文字说明。为网页及文字提供色彩变化、大小设置、语音阅读服务。提供信息自定义和信息扁平化大字幕影音服务。</p>' +
                        '</div>' +
                        '<div class="pages_title2">' +
                            '<h3>第二部分：语音网站快捷键使用说明</h3>' +
                            '<p>' +
                                '<p>1. 无障碍功能：Shift + 1键，开启/关闭无障碍辅助工具。</p>' +
                                '<p>2. 区域指引：Shift + R键,开启/关闭区域指引功能。</p>' +
                                '<p>3. 声音开启：Shift + A键,开启/关闭声音读屏功能。</p>' +
                                '<p>4. 语速：Shift + S键，调节语速快或者慢功能。</p>' +
                                '<p>5. 阅读方式：Shift + D键，切换指读或者连读模式。</p>' +
                                '<p>6. 鼠标样式：Shift + F键，切换鼠标样式。</p>' +
                                '<p>7. 十字光标开启：Shift + G键，开启/关闭十字线模式。</p>' +
                                '<p>8. 网页放大：Shift + H键，网页文字放大功能。</p>' +
                                '<p>9. 网页缩小：Shift + J键，网页文字缩小功能。</p>' +
                                '<p>10. 变换颜色：Shift + K键，切换背景颜色模式。</p>' +
                                '<p>11. 开启大字幕：Shift + L键，开启/关闭底部大字幕功能。</p>' +
                                '<p>12. 重置功能：Shift + 0键，重置辅助工具设置。</p>' +
                                '<p>13. 固定：Shift + M键，固定或取消固定工具栏。</p>' +
                                '<p>14. 说明：Shift + 问号键，打开帮助说明页面。</p>' +
                                '<p>15. 退出服务：Shift + E键，退出服务还原当前网页原始状态。</p>' +
                                '<p>16.切换智能盲道： Alt+(1、2、3、4、5、6)键。</p>' +
                            '</p>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>'
    accessInitial.helpContentCss = '#helpBox{'
    accessInitial.helpContentCss += 'position: fixed;'
    accessInitial.helpContentCss += 'background: #FFF;'
    accessInitial.helpContentCss += 'width: 65%;'
    accessInitial.helpContentCss += 'padding: 50px 0 10px;'
    accessInitial.helpContentCss += 'height: 75%;'
    accessInitial.helpContentCss += 'top: 100px;'
    accessInitial.helpContentCss += 'margin-left: -32.5%;'
    accessInitial.helpContentCss += 'left: 50%;'
    accessInitial.helpContentCss += 'z-index: 100001;' +
                                    '}' +
                                    '#helpBox svg{' +
                                    'width:40px;' +
                                    '}' +
                                    '#helpBox #helpClose{' +
                                    'text-align: right;' +
                                    'width: 40px;' +
                                    'right: 4px;' +
                                    'top: 4px;' +
                                    'border-radius: 50%;' +
                                    'display: block;' +
                                    'cursor: pointer;' +
                                    'position: absolute;' +
                                    '}'
    accessInitial.helpContentCss += '.helpContainer{'
    accessInitial.helpContentCss += 'padding: 0 40px;'
    accessInitial.helpContentCss += 'height: 100%;'
    accessInitial.helpContentCss += 'overflow-y: auto;'
    accessInitial.helpContentCss += 'color: #333;'
    accessInitial.helpContentCss += 'line-height: 1.8;'
    accessInitial.helpContentCss += 'font-size: 20px;}' +
                                    '.helpContainer h2{' +
                                    'font-size: 24px;' +
                                    'font-weight: 700;' +
                                    'text-align: center;' +
                                    'margin-bottom: 36px;' +
                                    '}' +
                                    '.helpContainer p {' +
                                    'line-height: 1.8;' +
                                    'font-size: 20px;' +
                                    'margin: 10px 0;' +
                                    '}' +
                                    '.pages_title1 p {'+
                                    'text-indent: 2em;' +
                                    '}'
    accessInitial.helpContentCss += '#maskBox{'
    accessInitial.helpContentCss += 'position: fixed;'
    accessInitial.helpContentCss += 'top: 0;'
    accessInitial.helpContentCss += 'left: 0;'
    accessInitial.helpContentCss += 'right: 0;'
    accessInitial.helpContentCss += 'bottom: 0;'
    accessInitial.helpContentCss += 'z-index: 100000;'
    accessInitial.helpContentCss += 'background: #000;'
    accessInitial.helpContentCss += 'opacity: .8;'
    accessInitial.helpContentCss += ''
            

    accessInitial.imgs = {}; 
    accessInitial.imgs.color1 = '<div class="iconStyle" style="background-color:#ffffff"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39.17008972167969" height="39.17003154754639" viewBox="0 0 39.17008972167969 39.17003154754639" fill="none"><path id="Combined Shape" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M22.5201,0.00003c9.19,0 16.65,7.45 16.65,16.64997c0,5.02 -3.55,9.34 -8.47,10.32l-10.29,2.06l2.55,3.06c1.01,1.22 1.38,2.84 1,4.38c-0.4,1.61 -1.8,2.7 -3.4,2.7h-0.98c-10.81,0 -19.58,-8.77 -19.58,-19.59c0,-10.80997 8.77,-19.57997 19.58,-19.57997zM19.5784,1.95833c-9.73,0 -17.62,7.89 -17.62,17.61997c0,9.74 7.89,17.63 17.62,17.63h0.98c0.71,0 1.32,-0.48 1.49,-1.16c0.25,-0.98 0.02,-1.97 -0.59,-2.7l-3.61,-4.33c-0.47,-0.57 -0.16,-1.44 0.56,-1.58l11.91,-2.38c4,-0.8 6.89,-4.33 6.89,-8.41c0,-8.11997 -6.57,-14.68997 -14.69,-14.68997zM23.5017,5.87503c1.08,0 1.96,0.88 1.96,1.96c0,1.08 -0.88,1.96 -1.96,1.96c-1.08,0 -1.96,-0.88 -1.96,-1.96c0,-1.08 0.88,-1.96 1.96,-1.96zM13.71,11.7533c-1.08,0 -1.96,-0.88 -1.96,-1.95997c0,-1.08 0.88,-1.96 1.96,-1.96c1.08,0 1.96,0.88 1.96,1.96c0,1.07997 -0.88,1.95997 -1.96,1.95997zM31.335,15.67c-1.08,0 -1.96,-0.88 -1.96,-1.96c0,-1.08 0.88,-1.96 1.96,-1.96c1.08,0 1.96,0.88 1.96,1.96c0,1.08 -0.88,1.96 -1.96,1.96zM7.835,19.5866c-1.08,0 -1.96,-0.88 -1.96,-1.96c0,-1.08 0.88,-1.96 1.96,-1.96c1.08,0 1.96,0.88 1.96,1.96c0,1.08 -0.88,1.96 -1.96,1.96z"></path></svg></div>'
    accessInitial.imgs.continuous_stop1 = '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39" height="39" viewBox="0 0 39 39" fill="none"><path id="并集" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M4.88,35.34c-2.58,-0.83 -4.88,-2.18 -4.88,-4.87v-25.59c0,-2.7 2.18,-4.88 4.88,-4.88c0,0 7.25,2.02 13.36,3.66c0.2659,0 0.533,0.00332 0.8007,0.00664c0.5378,0.00668 1.0786,0.01339 1.6193,-0.00664c6.41,-1.72 13.47,-3.66 13.47,-3.66c2.69,0 4.87,2.18 4.87,4.88v25.59c0,2.69 -2.37,4.23 -4.87,4.87c0,0 -6.57,1.83 -13.42,3.66h-2.47c-6.79,-1.83 -13.36,-3.66 -13.36,-3.66zM2.4375,30.4677c0,1.35 1.05,2.06 2.44,2.44c0,0 6.75,1.86 13.4,3.65v-30.46l-13.4,-3.66c-1.35,0 -2.44,1.09 -2.44,2.44zM34.1288,32.9077c1.3,-0.42 2.43,-1.09 2.43,-2.44v-25.59c0,-1.35 -1.09,-2.44 -2.43,-2.44l-13.41,3.66v30.44c6.77,-1.79 13.41,-3.63 13.41,-3.63zM6.2873,8.0422l9.9997,2.9995l-0.5746,1.9156l-9.9997,-2.9995zM34.2873,9.9578l-9.9997,2.9995l-0.5746,-1.9156l9.9997,-2.9995zM6.2873,14.0422l9.9997,2.9995l-0.5746,1.9156l-9.9997,-2.9995zM34.2873,15.9578l-9.9997,2.9995l-0.5746,-1.9156l9.9997,-2.9995zM6.2873,20.0422l9.9997,2.9995l-0.5746,1.9156l-9.9997,-2.9995zM34.2873,21.9578l-9.9997,2.9995l-0.5746,-1.9156l9.9997,-2.9995zM6.2873,26.0422l9.9997,2.9995l-0.5746,1.9156l-9.9997,-2.9995zM23.713,29.0417l9.9997,-2.9995l0.5746,1.9156l-9.9997,2.9995z"></path></svg></div>'
    accessInitial.imgs.cursor1 = '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39" height="39" viewBox="0 0 39 39" fill="none"><path id="并集" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M7,3h-4v6h-3v-6h1v-3h6zM17,0v3h-6v-3zM27,0v3h-6v-3zM39,8h-3v-5h-5v-3h6v2h2zM20.5,18.5h9.5v3h-9.5v9.5h-3v-9.5h-9.5v-3h9.5v-10.5h3zM39,18h-3v-6h3zM0,13h3v6h-3zM39,28h-3v-6h3zM0,23h3v6h-3zM30,39v-3h6v-4h3v6h-3v1zM6,39h-6v-6h3v3h3zM10,39v-3h6v3zM20,39v-3h6v3z"></path></svg></div>'
    accessInitial.imgs.enlarge1 = '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38.25" height="38.249999046325684" viewBox="0 0 38.25 38.249999046325684" fill="none"><path id="Combined Shape" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M9.56,0c0.59,0 1.06,0.48 1.06,1.06c0,0.59 -0.47,1.06 -1.06,1.06h-5.93l6.68,6.69c0.42,0.42 0.42,1.09 0,1.5c-0.41,0.42 -1.08,0.42 -1.5,0l-6.69,-6.68v5.93c0,0.59 -0.47,1.06 -1.06,1.06c-0.58,0 -1.06,-0.47 -1.06,-1.06v-8.5c0,-0.58 0.48,-1.06 1.06,-1.06zM28.685,0h8.5c0.59,0 1.06,0.48 1.06,1.06v8.57c0,0.58 -0.47,1.06 -1.06,1.06c-0.58,0 -1.06,-0.48 -1.06,-1.06v-6l-6.69,6.68c-0.41,0.42 -1.08,0.42 -1.5,0c-0.41,-0.41 -0.41,-1.09 0,-1.5l6.69,-6.69h-5.94c-0.58,0 -1.06,-0.47 -1.06,-1.06c0,-0.58 0.48,-1.06 1.06,-1.06zM15.935,27.6237c-2.93,0 -5.31,-2.38 -5.31,-5.31v-6.38c0,-2.93 2.37,-5.31 5.3,-5.31l6.37,-0.02c2.95,0 5.33,2.38 5.33,5.31v6.4c0,2.93 -2.38,5.31 -5.31,5.31zM22.31,25.4988c1.76,0 3.19,-1.43 3.19,-3.19v-6.39c0,-1.76 -1.43,-3.19 -3.19,-3.19l-6.38,0.02c-1.76,0 -3.18,1.43 -3.18,3.18v6.38c0,1.76 1.43,3.19 3.19,3.19zM3.63,36.125h5.93c0.59,0 1.06,0.48 1.06,1.06c0,0.59 -0.47,1.06 -1.06,1.06h-8.5c-0.58,0 -1.06,-0.47 -1.06,-1.06v-8.5c0,-0.58 0.48,-1.06 1.06,-1.06c0.59,0 1.06,0.48 1.06,1.06v5.94l6.69,-6.69c0.42,-0.41 1.09,-0.41 1.5,0c0.42,0.42 0.42,1.09 0,1.5zM36.125,28.685c0,-0.58 0.48,-1.06 1.06,-1.06c0.59,0 1.06,0.48 1.06,1.06v8.5c0,0.59 -0.47,1.06 -1.06,1.06h-8.5c-0.58,0 -1.06,-0.47 -1.06,-1.06c0,-0.58 0.48,-1.06 1.06,-1.06h5.94l-6.69,-6.69c-0.41,-0.41 -0.41,-1.08 0,-1.5c0.42,-0.41 1.09,-0.41 1.5,0l6.69,6.69z"></path></svg></div>'
    accessInitial.imgs.exit1 = '<div class="iconStyle" style="background-color:#D43030"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35" height="39.005001068115234" viewBox="0 0 35 39.005001068115234" fill="none"><path id="POWER" fill-rule="evenodd" style="fill:#FFFFFF" opacity="1" d="M17.5003,20.11c-1,0 -1.81,-0.82 -1.81,-1.83v-16.45c0,-1.01 0.81,-1.83 1.81,-1.83c1,0 1.81,0.82 1.81,1.83v16.45c0,1.01 -0.81,1.83 -1.81,1.83zM17.5,39.005c-9.66,0 -17.5,-7.92 -17.5,-17.68c0,-7.38 4.49,-13.71 10.86,-16.35c0.19,-0.06 0.39,-0.1 0.61,-0.1c1,0 1.81,0.82 1.81,1.83c0,0.79 -0.51,1.47 -1.21,1.72c-4.97,2.14 -8.45,7.11 -8.45,12.9c0,7.74 6.21,14.02 13.88,14.02c7.67,0 13.88,-6.28 13.88,-14.02c0,-5.79 -3.48,-10.76 -8.45,-12.9c-0.7,-0.25 -1.21,-0.93 -1.21,-1.72c0,-1.01 0.81,-1.83 1.81,-1.83c0.22,0 0.42,0.04 0.61,0.1c6.37,2.64 10.86,8.97 10.86,16.35c0,9.76 -7.84,17.68 -17.5,17.68z"></path></svg></div>'
    accessInitial.imgs.help1 = '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39" height="39" viewBox="0 0 39 39" fill="none"><path id="并集" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M0,19.5c0,-10.77 8.73,-19.5 19.5,-19.5c10.77,0 19.5,8.73 19.5,19.5c0,10.77 -8.73,19.5 -19.5,19.5c-10.77,0 -19.5,-8.73 -19.5,-19.5zM19.5,36.5c9.3888,0 17,-7.6112 17,-17c0,-9.3888 -7.6112,-17 -17,-17c-9.3888,0 -17,7.6112 -17,17c0,9.3888 7.6112,17 17,17zM17.57,23.588c-0.29467,-1.612 0.37267,-3.20667 2.002,-4.784c1.73333,-1.69867 2.6,-2.94667 2.6,-3.744c0,-0.90133 -0.26,-1.62067 -0.78,-2.158c-0.572,-0.572 -1.38667,-0.858 -2.444,-0.858c-1.49067,0 -2.886,0.71933 -4.186,2.158l-1.404,-1.3c1.78533,-1.872 3.73533,-2.808 5.85,-2.808c1.612,0 2.89467,0.42467 3.848,1.274c0.95333,0.86667 1.43,2.028 1.43,3.484c0,1.28267 -0.884,2.74733 -2.652,4.394c-1.664,1.54267 -2.37467,2.99 -2.132,4.342zM16.582,27.956c0,-0.60667 0.208,-1.10067 0.624,-1.482c0.39867,-0.364 0.89267,-0.546 1.482,-0.546c0.58933,0 1.08333,0.182 1.482,0.546c0.39867,0.38133 0.598,0.87533 0.598,1.482c0,0.60667 -0.19933,1.10067 -0.598,1.482c-0.39867,0.38133 -0.89267,0.572 -1.482,0.572c-0.58933,0 -1.08333,-0.19067 -1.482,-0.572c-0.416,-0.38133 -0.624,-0.87533 -0.624,-1.482z"></path></svg></div>'
    accessInitial.imgs.left_img2 = '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="44" height="39" viewBox="0 0 44 39" fill="none"><path id="拼合图形" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M13.2,37.78c0,-0.67 0.49,-1.22 1.1,-1.22h1.52l1.09,-2.41h-11.41c-3.03,0 -5.5,-2.73 -5.5,-6.09v-21.95c0.04,-3.41 2.48,-6.09 5.5,-6.09l33,-0.02c3.04,0 5.5,2.73 5.5,6.09v21.97c0,3.36 -2.46,6.09 -5.5,6.09h-11.41l1.09,2.41h1.52c0.61,0 1.1,0.55 1.1,1.22c0,0.68 -0.49,1.22 -1.1,1.22h-15.4c-0.61,0 -1.1,-0.54 -1.1,-1.22zM41.8,6.09c0,-2.02 -1.48,-3.65 -3.3,-3.65l-33,0.01c-1.82,0 -3.3,1.64 -3.3,3.66v15.84h39.6zM25.41,19.53c2.08,-1.96 3.1,-4.12 3.1,-6.54c0,-2.41 -1.02,-4.58 -3.1,-6.54c-0.33,-0.31 -0.33,-0.81 0,-1.11c0.33,-0.31 0.85,-0.31 1.18,0c2.39,2.24 3.6,4.81 3.6,7.65c0,2.85 -1.21,5.41 -3.6,7.66c-0.33,0.31 -0.85,0.31 -1.18,0c-0.33,-0.31 -0.33,-0.81 0,-1.12zM11.94,15.92v-6.13c0,-0.44 0.41,-0.79 0.92,-0.79h2.47l2.53,-1.44c0.15,-0.09 0.33,-0.14 0.51,-0.14h1.83c0.51,0 0.92,0.36 0.92,0.79v9.28c0,0.44 -0.41,0.79 -0.92,0.79h-1.83c-0.18,0 -0.36,-0.04 -0.51,-0.13l-2.53,-1.45h-2.47c-0.51,0 -0.92,-0.35 -0.92,-0.78zM24.92,8.58c1.27,1.21 1.92,2.72 1.92,4.51c0,1.78 -0.65,3.29 -1.92,4.5c-0.33,0.31 -0.86,0.31 -1.19,0c-0.33,-0.31 -0.33,-0.81 0,-1.12c0.96,-0.9 1.43,-2.01 1.43,-3.38c0,-1.38 -0.47,-2.49 -1.43,-3.39c-0.33,-0.31 -0.33,-0.81 0,-1.12c0.33,-0.31 0.86,-0.31 1.19,0zM19.28,16.7v-7.7h-0.64l-2.52,1.45c-0.15,0.08 -0.33,0.13 -0.51,0.13h-1.84v4.55h1.84c0.18,0 0.36,0.04 0.51,0.13l2.52,1.44zM41.8,24.39h-39.6v3.67c0,2.02 1.48,3.66 3.3,3.66h33c1.82,0 3.3,-1.64 3.3,-3.66zM24.2,28.04c0,0.67 -0.49,1.22 -1.1,1.22h-2.2c-0.61,0 -1.1,-0.55 -1.1,-1.22c0,-0.67 0.49,-1.22 1.1,-1.22h2.2c0.61,0 1.1,0.55 1.1,1.22zM19.37,34.15l-1.09,2.42h7.44l-1.09,-2.42z"></path></svg></div>'
    accessInitial.imgs.point3 = '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="29.649993896484375" height="39.5" viewBox="0 0 29.649993896484375 39.5" fill="none"><path id="并集" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M26.3,11.16l-8.94,-8.13c-0.47,-0.43 -1.09,-0.67 -1.73,-0.67h-10.7c-1.41,0 -2.56,1.12 -2.56,2.53v29.72c0,1.4 1.16,2.53 2.56,2.53h10.29c0.14,0 0.25,0.11 0.25,0.25v1.86c0,0.14 -0.11,0.25 -0.25,0.25h-10.29c-2.72,0 -4.93,-2.17 -4.93,-4.89v-29.72c0,-2.7 2.23,-4.89 4.93,-4.89h10.7c1.23,0 2.42,0.46 3.33,1.29l8.94,8.13c1.07,0.96 1.6,2.24 1.6,3.83c0,0.08 -0.03,0.14 -0.05,0.16h-0.01c-0.05,0.06 -0.13,0.1 -0.22,0.09l-1.87,-0.22c-0.13,-0.02 -0.22,-0.12 -0.22,-0.25c0,-0.71 -0.3,-1.39 -0.83,-1.86zM17.34,11.55c0.48,-0.47 1.05,-0.7 1.72,-0.7c1.35,0 2.43,1.06 2.43,2.4v4.28c0.1,-0.01 0.19,-0.01 0.29,-0.01c1.09,0 1.83,0.46 2.21,1.38c0.17,-0.03 0.34,-0.05 0.51,-0.05c1.09,0 1.83,0.46 2.21,1.38c0.16,-0.03 0.33,-0.05 0.5,-0.05c1.62,0 2.44,0.8 2.44,2.4v5.34c0,4.27 -3.6,7.73 -7.87,7.73c-2.04,0 -3.97,-0.88 -5.28,-2.43l-6,-7.1c-0.71,-0.84 -0.85,-2.02 -0.37,-3v-0.01l0.05,-0.09c0.45,-0.92 1.4,-1.5 2.43,-1.5c0.9,0 1.78,0.31 2.49,0.88l1.25,1.03c0.09,0.07 0.17,0.06 0.24,-0.02c0.02,-0.03 0.04,-0.06 0.04,-0.1v-3.31c0,-0.03 -0.01,-0.05 -0.01,-0.08v-6.67c0,-0.66 0.24,-1.23 0.72,-1.7zM19.06,11.25c-1.13,0 -2.04,0.9 -2.04,2v6.67c0,0.01 0,0.02 0.01,0.03c0,-0.01 -0.01,-0.02 -0.01,-0.03v-6.67c0,-1.1 0.91,-2 2.04,-2zM25.17,22.58c0,-0.06 0,-0.13 0.01,-0.19v-1.14c0,-0.37 -0.31,-0.67 -0.68,-0.67c-0.38,0 -0.68,0.3 -0.68,0.67c0,0.03 0,0.06 -0.01,0.09v2.58c0,0.37 -0.3,0.67 -0.67,0.67c-0.38,0 -0.68,-0.3 -0.68,-0.67v-2.6c0,-0.02 0,-0.05 0,-0.07c0,-0.04 0,-0.08 0,-0.12v-1.21c0,-0.37 -0.31,-0.67 -0.68,-0.67c-0.38,0 -0.68,0.3 -0.68,0.67c0,0.03 0,0.06 -0.01,0.09v3.91c0,0.36 -0.3,0.66 -0.67,0.66c-0.38,0 -0.68,-0.3 -0.68,-0.66v-3.93c0,-0.03 0,-0.05 0,-0.07c0,-0.04 0,-0.09 0,-0.13v-6.54c0,-0.37 -0.31,-0.67 -0.68,-0.67c-0.38,0 -0.68,0.3 -0.68,0.67v6.67c0,0.03 0,0.06 0,0.09v3.3c0,0.44 -0.15,0.87 -0.44,1.21c-0.68,0.8 -1.89,0.91 -2.71,0.24l-1.25,-1.02c-0.38,-0.32 -0.87,-0.49 -1.37,-0.49c-0.36,0 -0.69,0.2 -0.85,0.52l-0.05,0.1c-0.18,0.38 -0.12,0.82 0.15,1.14l5.99,7.1c0.97,1.14 2.41,1.81 3.93,1.81c3.38,0 6.11,-2.69 6.11,-6v-5.34c0,-0.37 -0.3,-0.66 -0.68,-0.66c-0.37,0 -0.68,0.29 -0.68,0.66c0,0.01 0,0.02 0,0.03v1.31c0,0.36 -0.3,0.66 -0.67,0.66c-0.38,0 -0.68,-0.3 -0.68,-0.66v-1.23c-0.01,-0.04 -0.01,-0.07 -0.01,-0.11zM21.09,18.03c0.06,-0.02 0.12,-0.03 0.17,-0.05c-0.06,0.02 -0.11,0.03 -0.17,0.05zM23.74,19.39c0.18,-0.07 0.38,-0.12 0.58,-0.13c-0.21,0.01 -0.4,0.06 -0.58,0.13c-0.15,-0.55 -0.53,-1 -1.04,-1.26c0.5,0.26 0.89,0.71 1.04,1.26zM24.5,19.25c0.16,0 0.31,0.02 0.46,0.05c-0.15,-0.03 -0.3,-0.05 -0.46,-0.05zM25.97,19.87c0.23,0.24 0.4,0.53 0.49,0.85c0.2,-0.08 0.41,-0.12 0.63,-0.14c-0.22,0.02 -0.44,0.06 -0.63,0.14c-0.09,-0.32 -0.26,-0.61 -0.49,-0.85zM29.25,22.58v5.34c0,4 -3.25,7.24 -7.31,7.33c4.06,-0.09 7.31,-3.33 7.31,-7.33v-5.34c0,-1.1 -0.91,-2 -2.04,-2c1.13,0 2.04,0.9 2.04,2zM16.1,23.74l-1.25,-1.03c-0.63,-0.51 -1.42,-0.79 -2.24,-0.79c0.82,0 1.61,0.28 2.24,0.79l1.25,1.03c0.1,0.08 0.23,0.13 0.36,0.12c-0.13,0 -0.25,-0.04 -0.36,-0.12z"></path></svg></div>'
    accessInitial.imgs.reflash1 = '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38.248809814453125" height="38.18648052215576" viewBox="0 0 38.248809814453125 38.18648052215576" fill="none"><path id="Combined Shape" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M38.2488,19.0915c0,5.86 -2.67,11.28 -7.1,14.87h6.04c0.59,0 1.06,0.47 1.06,1.06c0,0.59 -0.47,1.06 -1.06,1.06h-8.5c-0.58,0 -1.06,-0.47 -1.06,-1.06v-8.5c0,-0.58 0.48,-1.06 1.06,-1.06c0.59,0 1.07,0.48 1.07,1.06v5.84c3.97,-3.19 6.37,-8.03 6.37,-13.27c0,-9 -7.01,-16.42 -15.94,-16.97c-0.59,-0.03 -1.03,-0.54 -1,-1.12c0.04,-0.59 0.54,-1.03 1.13,-1c10.05,0.62 17.93,8.97 17.93,19.09zM18.14,36.064c0.59,0.03 1.04,0.54 1,1.12c-0.03,0.59 -0.53,1.04 -1.12,1c-10.09,-0.57 -18.02,-8.94 -18.02,-19.1c0,-5.87 2.67,-11.29 7.1,-14.87h-6.04c-0.59,0 -1.06,-0.48 -1.06,-1.07c0,-0.58 0.47,-1.06 1.06,-1.06h8.5c0.59,0 1.06,0.48 1.06,1.06v8.5c0,0.59 -0.47,1.07 -1.06,1.07c-0.59,0 -1.06,-0.48 -1.06,-1.07v-5.83c-3.98,3.19 -6.37,8.03 -6.37,13.27c0,9.03 7.05,16.47 16.01,16.98z"></path></svg></div>' 
    accessInitial.imgs.reflash2 = '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42.582763671875" height="41.94389724731445" viewBox="0 0 42.582763671875 41.94389724731445" fill="none"><path id="Path 992" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M11.1664,32.8106c-0.6277,0.3101 -1.37963,-0.157 -1.37697,-0.8401l0.14787,-30.82399c0.00872,-0.7337 0.8634,-1.15887 1.4887,-0.72266l25.8669,18.11745c0.5809,0.4112 0.5223,1.2653 -0.1023,1.5659l-8.6295,4.2142l5.6933,10.8289c0.2301,0.4542 0.0497,1.0054 -0.4014,1.226l-7.0998,3.4628c-0.4636,0.227 -1.0339,0.0404 -1.2735,-0.4169l-5.6838,-10.8258zM26.8531,23.0784l8.0807,-3.952l-23.1212,-16.18732l-0.1369,27.54462l8.0807,-3.952c0.4605,-0.2175 1.0307,-0.0308 1.2734,0.4169l5.6933,10.829l5.4219,-2.6443l-5.6933,-10.829c-0.2396,-0.4572 -0.0592,-1.0084 0.4014,-1.2259z"></path></svg></div>'
    accessInitial.imgs.screen1 = '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38.2550048828125" height="38.2550048828125" viewBox="0 0 38.2550048828125 38.2550048828125" fill="none"><path id="Combined Shape" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M6.37,1.06c0,0.59 -0.47,1.06 -1.06,1.06c-1.76,0 -3.19,1.43 -3.19,3.19c0,0.59 -0.47,1.06 -1.06,1.06c-0.58,0 -1.06,-0.47 -1.06,-1.06c0,-2.93 2.38,-5.31 5.31,-5.31c0.59,0 1.06,0.48 1.06,1.06zM11.685,2.13c-0.58,0 -1.06,-0.48 -1.06,-1.07c0,-0.58 0.48,-1.06 1.06,-1.06h4.25c0.59,0 1.06,0.48 1.06,1.06c0,0.59 -0.47,1.07 -1.06,1.07zM26.56,0c0.59,0 1.07,0.48 1.07,1.06c0,0.59 -0.48,1.07 -1.07,1.07h-4.25c-0.58,0 -1.06,-0.48 -1.06,-1.07c0,-0.58 0.48,-1.06 1.06,-1.06zM37.185,6.37c-0.58,0 -1.06,-0.47 -1.06,-1.06c0,-1.76 -1.43,-3.19 -3.19,-3.19c-0.58,0 -1.06,-0.47 -1.06,-1.06c0,-0.58 0.48,-1.06 1.06,-1.06c2.94,0 5.32,2.38 5.32,5.31c0,0.59 -0.48,1.06 -1.07,1.06zM6.06,12.435c-0.41,0.42 -1.08,0.42 -1.5,0c-0.41,-0.41 -0.41,-1.08 0,-1.5l4.25,-4.25c0.42,-0.41 1.09,-0.41 1.5,0l4.25,4.25c0.42,0.42 0.42,1.09 0,1.5c-0.41,0.42 -1.08,0.42 -1.5,0l-2.44,-2.43v5.93c0,0.59 -0.47,1.06 -1.06,1.06c-0.58,0 -1.06,-0.47 -1.06,-1.06v-5.93zM0,11.685c0,-0.58 0.48,-1.06 1.06,-1.06c0.59,0 1.07,0.48 1.07,1.06v4.25c0,0.59 -0.48,1.06 -1.07,1.06c-0.58,0 -1.06,-0.47 -1.06,-1.06zM36.125,11.685c0,-0.58 0.48,-1.06 1.06,-1.06c0.59,0 1.07,0.48 1.07,1.06v4.25c0,0.59 -0.48,1.06 -1.07,1.06c-0.58,0 -1.06,-0.47 -1.06,-1.06zM0,24.435c0,-2.93 2.38,-5.31 5.31,-5.31h8.5c2.94,0 5.31,2.38 5.31,5.31v8.5c0,2.94 -2.37,5.31 -5.31,5.31h-8.5c-2.93,0 -5.31,-2.37 -5.31,-5.31zM2.125,32.94c0,1.76 1.43,3.19 3.19,3.19h8.5c1.76,0 3.18,-1.43 3.18,-3.19v-8.5c0,-1.76 -1.42,-3.19 -3.18,-3.19h-8.5c-1.76,0 -3.19,1.43 -3.19,3.19zM36.125,22.31c0,-0.58 0.48,-1.06 1.06,-1.06c0.59,0 1.07,0.48 1.07,1.06v4.25c0,0.59 -0.48,1.07 -1.07,1.07c-0.58,0 -1.06,-0.48 -1.06,-1.07zM27.31,33.685c-0.41,0.42 -1.08,0.42 -1.5,0c-0.41,-0.41 -0.41,-1.08 0,-1.5l2.44,-2.43h-5.94c-0.58,0 -1.06,-0.48 -1.06,-1.07c0,-0.58 0.48,-1.06 1.06,-1.06h5.94l-2.44,-2.44c-0.41,-0.41 -0.41,-1.08 0,-1.5c0.42,-0.41 1.09,-0.41 1.5,0l4.25,4.25c0.42,0.42 0.42,1.09 0,1.5zM31.875,37.185c0,-0.58 0.48,-1.06 1.06,-1.06c1.76,0 3.19,-1.43 3.19,-3.19c0,-0.58 0.48,-1.06 1.06,-1.06c0.59,0 1.07,0.48 1.07,1.06c0,2.94 -2.38,5.32 -5.32,5.32c-0.58,0 -1.06,-0.48 -1.06,-1.07zM26.56,36.125c0.59,0 1.07,0.48 1.07,1.06c0,0.59 -0.48,1.07 -1.07,1.07h-4.25c-0.58,0 -1.06,-0.48 -1.06,-1.07c0,-0.58 0.48,-1.06 1.06,-1.06z"></path></svg></div>'
    accessInitial.imgs.small1 = '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42.50000762939453" height="39.16339826583862" viewBox="0 0 42.50000762939453 39.16339826583862" fill="none"><path id="Combined Shape" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M6.37,5.87v-4.89c0,-0.54 0.48,-0.98 1.07,-0.98c0.58,0 1.06,0.44 1.06,0.98v5.87c0,0.54 -0.48,0.98 -1.06,0.98h-6.38c-0.58,0 -1.06,-0.44 -1.06,-0.98c0,-0.54 0.48,-0.98 1.06,-0.98zM36.12,5.87h5.32c0.58,0 1.06,0.44 1.06,0.98c0,0.54 -0.48,0.98 -1.06,0.98h-6.38c-0.58,0 -1.06,-0.44 -1.06,-0.98v-5.87c0,-0.54 0.48,-0.98 1.06,-0.98c0.59,0 1.06,0.44 1.06,0.98zM8.5,12.7334c0,-2.71 2.38,-4.9 5.31,-4.9h14.88c2.93,0 5.31,2.19 5.31,4.9v13.7c0,2.71 -2.38,4.9 -5.31,4.9h-14.88c-2.93,0 -5.31,-2.19 -5.31,-4.9zM10.625,26.4417c0,1.62 1.43,2.93 3.19,2.93h14.87c1.76,0 3.19,-1.31 3.19,-2.93v-13.71c0,-1.62 -1.43,-2.94 -3.19,-2.94h-14.87c-1.76,0 -3.19,1.32 -3.19,2.94zM0,32.3134c0,-0.54 0.48,-0.98 1.06,-0.98h6.38c0.58,0 1.06,0.44 1.06,0.98v5.87c0,0.54 -0.48,0.98 -1.06,0.98c-0.59,0 -1.07,-0.44 -1.07,-0.98v-4.89h-5.31c-0.58,0 -1.06,-0.44 -1.06,-0.98zM41.44,33.2934h-5.32v4.89c0,0.54 -0.47,0.98 -1.06,0.98c-0.58,0 -1.06,-0.44 -1.06,-0.98v-5.87c0,-0.54 0.48,-0.98 1.06,-0.98h6.38c0.58,0 1.06,0.44 1.06,0.98c0,0.54 -0.48,0.98 -1.06,0.98z"></path></svg></div>'
    accessInitial.imgs.sound_big = '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39" height="39.00391387939453" viewBox="0 0 39 39.00391387939453" fill="none"><g opacity="1"  transform="translate(0 0)  rotate(0)"><path id="并集" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M0.95,10.26h8.86l10.37,-10c0.27,-0.27 0.67,-0.33 1.01,-0.17c0.34,0.17 0.56,0.53 0.56,0.94v36.94c0,0.41 -0.22,0.77 -0.56,0.94c-0.34,0.16 -0.74,0.1 -1.01,-0.17l-10.37,-10h-8.86c-0.52,0 -0.95,-0.46 -0.95,-1.03v-16.42c0,-0.57 0.43,-1.03 0.95,-1.03zM19.86,3.31l-9.06,8.74c-0.18,0.17 -0.41,0.27 -0.63,0.27h-8.27v7.18v7.18h8.27c0.22,0 0.45,0.1 0.63,0.27l9.06,8.74zM29.19,26.11l-1.7,-0.91l0.72,-1.57c1.2,-2.6 1.2,-5.66 0,-8.26l-0.72,-1.57l1.7,-0.92l0.72,1.57c1.45,3.18 1.45,6.92 0,10.1z"></path></g></svg></div>'
    accessInitial.imgs.sound3 =    '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39" height="39.00391387939453" viewBox="0 0 39 39.00391387939453" fill="none"><g opacity="1"  transform="translate(0 0.00196075439453125)  rotate(0)"><path id="并集" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M0.95,10.26h8.86l10.37,-10c0.27,-0.27 0.67,-0.33 1.01,-0.17c0.34,0.17 0.56,0.53 0.56,0.94v36.94c0,0.41 -0.22,0.77 -0.56,0.94c-0.34,0.16 -0.74,0.1 -1.01,-0.17l-10.37,-10h-8.86c-0.52,0 -0.95,-0.46 -0.95,-1.03v-16.42c0,-0.57 0.43,-1.03 0.95,-1.03zM19.86,3.31l-9.06,8.74c-0.18,0.17 -0.41,0.27 -0.63,0.27h-8.27v7.18v7.18h8.27c0.22,0 0.45,0.1 0.63,0.27l9.06,8.74z"></path><path id="并集" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M0,11.29c0,-0.57 0.43,-1.03 0.98,-1.03h8.21l10.78,-9.99c0.28,-0.27 0.69,-0.35 1.06,-0.19c0.33,0.19 0.57,0.54 0.57,0.95v36.94c0,0.41 -0.24,0.76 -0.57,0.95c-0.37,0.16 -0.78,0.08 -1.06,-0.19l-10.78,-9.99h-8.21c-0.55,0 -0.98,-0.46 -0.98,-1.03zM10.23,12.05c0,0 -0.41,0.27 -0.65,0.27h-7.62v14.36h7.62c0.24,0 0.65,0.27 0.65,0.27l9.41,8.74v-32.38zM32.28,20.05l-4.33,4.53l-1.39,-1.45l4.33,-4.53l-4.33,-4.53l1.39,-1.45l4.33,4.53l4.33,-4.53l1.39,1.45l-4.33,4.53l4.33,4.52l-1.39,1.46z"></path></g></svg></div>'
    accessInitial.imgs.vol_normal = '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38" height="38" viewBox="0 0 38 38" fill="none"><g opacity="1"  transform="translate(1 1)  rotate(0)"><path  id="圆形 1" style="fill:#000000; opacity:1;" d="M18,1c-9.38884,0 -17,7.61116 -17,17c0,9.3888 7.61116,17 17,17c9.3888,0 17,-7.6112 17,-17c0,-9.38884 -7.6112,-17 -17,-17zM18,-1c10.4934,0 19,8.50659 19,19c0,10.4934 -8.5066,19 -19,19c-10.49341,0 -19,-8.5066 -19,-19c0,-10.49341 8.50659,-19 19,-19z"></path><path id="拼合图形" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M27.34 19.76C27.49 20.06 27.79 20.25 28.13 20.25L35.13 20.25C35.62 20.25 36 19.87 36 19.38C36 18.89 35.62 18.5 35.13 18.5L28.67 18.5L23.66 8.49C23.33 7.83 22.38 7.84 22.07 8.51L14.02 26.26L9.63 18.92C9.47 18.66 8.87 18.5 8.87 18.5L1.87 18.5C1.38 18.5 1 18.89 1 19.38C1 19.87 1.38 20.25 1.87 20.25L8.39 20.25L13.37 28.58C13.74 29.18 14.63 29.13 14.93 28.5L22.91 10.91L27.34 19.76Z"></path><path  id="拼合图形" style="fill:#000000; opacity:1;" d="M27.7872,19.5364c0.0649,0.1298 0.1976,0.2136 0.3428,0.2136h7c0.2043,0 0.37,-0.1657 0.37,-0.37c0,-0.2043 -0.1657,-0.38 -0.37,-0.38h-6.7689l-5.1482,-10.28621c-0.1416,-0.28324 -0.5562,-0.28104 -0.6891,0.00617l-8.4428,18.61614l-4.88011,-8.1595c-0.03485,-0.05653 -0.18809,-0.12103 -0.45972,-0.1935l0.12883,-0.4831v0.5h-7c-0.20987,0 -0.37,0.1701 -0.37,0.38c0,0.2043 0.16565,0.37 0.37,0.37h6.80362l5.12558,8.5734c0.1563,0.2535 0.5484,0.2367 0.6794,-0.0384l8.4092,-18.53634l4.8993,9.78754zM26.8929,19.9838l-4.43,-8.85l0.4471,-0.2238l0.4553,0.2066l-7.9839,17.5984c-0.4716,0.9904 -1.8612,1.0612 -2.4406,0.1216l-4.97996,-8.33l0.42916,-0.2566v0.5h-6.52c-0.75663,0 -1.37,-0.6134 -1.37,-1.37c0,-0.7622 0.60785,-1.38 1.37,-1.38h7.06552l0.06331,0.0169c0.52837,0.14087 0.88179,0.35637 1.06027,0.6465l4.39,7.34l-0.4291,0.2566l-0.4554,-0.2065l8.0516,-17.75346c0.4848,-1.04781 1.9747,-1.06629 2.4909,-0.03383l5.01,10.00999l-0.4471,0.2238v-0.5h6.46c0.7566,0 1.37,0.6234 1.37,1.38c0,0.7566 -0.6134,1.37 -1.37,1.37h-7c-0.5239,0 -1.0029,-0.2978 -1.2372,-0.7664z"></path></g></svg></div>'
    accessInitial.imgs.vol_quick = '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38" height="38" viewBox="0 0 38 38" fill="none"><g opacity="1"  transform="translate(1 1)  rotate(0)"><path  id="圆形 1" style="fill:#000000; opacity:1;" d="M18,1c-9.38884,0 -17,7.61116 -17,17c0,9.3888 7.61116,17 17,17c9.3888,0 17,-7.6112 17,-17c0,-9.38884 -7.6112,-17 -17,-17zM18,-1c10.4934,0 19,8.50659 19,19c0,10.4934 -8.5066,19 -19,19c-10.49341,0 -19,-8.5066 -19,-19c0,-10.49341 8.50659,-19 19,-19z"></path><path id="并集" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M19.7,29h-2.27v-21h2.27zM12.91,27.2h-2.26v-16.8h2.26zM25.35,27.2h-2.26v-16.8h2.26zM7.26,24.8h-2.26v-12h2.26zM31,24.8h-2.26v-12h2.26z"></path></g></svg></div>'
    accessInitial.imgs.vol_slow = '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38" height="38" viewBox="0 0 38 38" fill="none"><g opacity="1"  transform="translate(1 1)  rotate(0)"><path  id="圆形 1" style="fill:#000000; opacity:1;" d="M18,1c-9.38884,0 -17,7.61116 -17,17c0,9.3888 7.61116,17 17,17c9.3888,0 17,-7.6112 17,-17c0,-9.38884 -7.6112,-17 -17,-17zM18,-1c10.4934,0 19,8.50659 19,19c0,10.4934 -8.5066,19 -19,19c-10.49341,0 -19,-8.5066 -19,-19c0,-10.49341 8.50659,-19 19,-19z"></path><path id="并集" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M4,14h11.28l2.72,7.92l1.36,-3.96l1.36,-3.96h11.28v2h-9.86l-4.14,12.08l-4.14,-12.08h-9.86z"></path><path  id="并集" style="fill:#000000; opacity:1;" d="M4,15.5h10.2172l4.2558,12.4179l-0.473,0.1621l-0.473,-0.1621l4.2558,-12.4179h10.2172v0.5h-0.5v-2h0.5v0.5h-11.28v-0.5l0.4729,0.1624l-1.36,3.96l-1.8329,5.3369l-3.1929,-9.2969l0.4729,-0.1624v0.5h-11.28v-0.5h0.5v2h-0.5zM3.5,16.5v-3h12.1369l2.836,8.2576l-0.4729,0.1624l-0.4729,-0.1624l1.36,-3.96l1.476,-4.2976h12.1369v3h-10.36v-0.5l0.473,0.1621l-4.613,13.4601l-4.613,-13.4601l0.473,-0.1621v0.5h-9.86z"></path></g></svg></div>'
    accessInitial.imgs.pinned = '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39" height="39" viewBox="0 0 39 39" fill="none"><path id="2" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M39,37.95l-1.05,1.05l-10.56,-9.18l-6.59,6.59v-3.9l-14.31,-14.31l-6.49,-0.4l17.8,-17.8l0.4,6.49l14.31,14.31h3.9l-6.6,6.59zM22.6696,30.6395l7.97,-7.97l-14.31,-14.31l-7.97,7.97z"></path></svg></div>'
    accessInitial.imgs.grave = '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 40 40" fill="none"><path id="并集" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M0.5,20c0,-10.77 8.73,-19.5 19.5,-19.5c10.77,0 19.5,8.73 19.5,19.5c0,10.77 -8.73,19.5 -19.5,19.5c-10.77,0 -19.5,-8.73 -19.5,-19.5zM1.5,20c0,10.22 8.28,18.5 18.5,18.5v-37c-10.22,0 -18.5,8.28 -18.5,18.5z"></path><path  id="并集" style="fill:#000000; opacity:1;" d="M20,39c10.4934,0 19,-8.5066 19,-19c0,-10.49341 -8.5066,-19 -19,-19c-10.49341,0 -19,8.50659 -19,19c0,10.4934 8.50659,19 19,19zM20,40c-11.04569,0 -20,-8.9543 -20,-20c0,-11.04569 8.95431,-20 20,-20c11.0457,0 20,8.95431 20,20c0,11.0457 -8.9543,20 -20,20zM2,20c0,9.9411 8.0589,18 18,18v0.5h-0.5v-37h0.5v0.5c-9.9411,0 -18,8.0589 -18,18zM1,20c0,-10.49341 8.50659,-19 19,-19h0.5v38h-0.5c-10.49341,0 -19,-8.5066 -19,-19z"></path></svg></div>'
    accessInitial.imgs.plainText = '<div class="iconStyle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38.25" height="38.249999046325684" viewBox="0 0 38.25 38.249999046325684" fill="none"><path id="Combined Shape" fill-rule="evenodd" style="fill:#000000" opacity="1" d="M4.25,0c1.17,0 2.13,0.95 2.13,2.13h25.49c0,-1.18 0.96,-2.13 2.13,-2.13h2.12c1.18,0 2.13,0.95 2.13,2.13v2.12c0,1.17 -0.95,2.13 -2.13,2.13v25.49c1.18,0 2.13,0.96 2.13,2.13v2.12c0,1.18 -0.95,2.13 -2.13,2.13h-2.12c-1.17,0 -2.13,-0.95 -2.13,-2.13h-25.49c0,1.18 -0.96,2.13 -2.13,2.13h-2.12c-1.18,0 -2.13,-0.95 -2.13,-2.13v-2.12c0,-1.17 0.95,-2.13 2.13,-2.13v-25.49c-1.18,0 -2.13,-0.96 -2.13,-2.13v-2.12c0,-1.18 0.95,-2.13 2.13,-2.13zM2.125,4.255h2.13v-2.13h-2.13zM34,4.255h2.13v-2.13h-2.13zM4.25,31.88c1.17,0 2.12,0.95 2.12,2.12h25.51c0,-1.17 0.95,-2.12 2.12,-2.12v-25.51c-1.17,0 -2.12,-0.95 -2.12,-2.12h-25.51c0,1.17 -0.95,2.12 -2.12,2.12zM14.88,10.63v7.43c0,0.59 -0.48,1.07 -1.07,1.07c-0.58,0 -1.06,-0.48 -1.06,-1.07v-7.43h-3.19c-0.58,0 -1.06,-0.48 -1.06,-1.07c0,-0.58 0.48,-1.06 1.06,-1.06h8.5c0.59,0 1.07,0.48 1.07,1.06c0,0.59 -0.48,1.07 -1.07,1.07zM22.31,10.63c-0.58,0 -1.06,-0.48 -1.06,-1.07c0,-0.58 0.48,-1.06 1.06,-1.06h6.38c0.58,0 1.06,0.48 1.06,1.06c0,0.59 -0.48,1.07 -1.06,1.07zM29.75,15.935c0,0.59 -0.48,1.07 -1.06,1.07h-6.38c-0.58,0 -1.06,-0.48 -1.06,-1.07c0,-0.58 0.48,-1.06 1.06,-1.06h6.38c0.58,0 1.06,0.48 1.06,1.06zM29.75,22.31c0,0.59 -0.48,1.07 -1.06,1.07h-19.13c-0.58,0 -1.06,-0.48 -1.06,-1.07c0,-0.58 0.48,-1.06 1.06,-1.06h19.13c0.58,0 1.06,0.48 1.06,1.06zM9.56,29.755c-0.58,0 -1.06,-0.48 -1.06,-1.07c0,-0.58 0.48,-1.06 1.06,-1.06h19.13c0.58,0 1.06,0.48 1.06,1.06c0,0.59 -0.48,1.07 -1.06,1.07zM4.255,36.13v-2.13h-2.13v2.13zM34,36.13h2.13v-2.13h-2.13z"></path></svg></div>'
    accessInitial.toolbarHtmlStr = "" 
                                 +  '<div id="accessToolBar" style="display: none;">'
                                + ' <div id="accessToolBar_normal">'
                                + '  <div id="canyou_toolbar_div">'
                                + '   <div class="cy_toolbar_bg_table">'
                                + '    <ul>'
                                + '     <li id="cy_move" class="li_1"  style="border-left:none;"><a href="javascript:void(0);" id="toNav" class="ul_li_a_1"  title="区域指引：快捷键Shift+R，可通过Shift+A开启声音获取语音提示"><span class="exap ul_li_a_1" href="javascript:void(0);" title="区域指引：快捷键Shift+R，可通过Shift+A开启声音获取语音提示">区域指引</span>'
                                + accessInitial.imgs.left_img2
                                + '     </a> </li>'
                                + '     <li id="cy_playSpeech" class="li_2"><a href="javascript:void(0);" id="toolbar_speakVolume"  class="ul_li_a_1" title="声音"><span class="a_p_3 ul_li_a_1" href="javascript:void(0);" title="声音">声音</span>'
                                + accessInitial.imgs.sound_big
                                + '     </a></li>'
                                + '     <li id="cy_pointerRead" class="li_1"><a href="javascript:void(0);" id="toolbar_speakSpeed"  class="ul_li_a_1" title="语速"><span class="exap ul_li_a_1" href="javascript:void(0);" title="语速">语速</span>'
                                + accessInitial.imgs.vol_normal
                                + '     </a> </li>'
                                + '     <li id="cy_pointerRead" class="li_1"><a href="javascript:void(0);" id="toolbar_readChange"  class="ul_li_a_1" title="阅读方式"><span class="exap ul_li_a_1" href="javascript:void(0);" title="阅读方式">阅读方式</span>'
                                + accessInitial.imgs.point3
                                + '     </a> </li>'
                                + '     <li id="cy_arrow" class="li_2">'
                                + '      <a href="javascript:void(0);" id="toolbar_refresh1" class="ul_li_a_1"  title="切换鼠标样式Shift+8" ><span class="exap ul_li_a_1" href="javascript:void(0);" title="鼠标">鼠标</span>'
                                + accessInitial.imgs.reflash2
                                + '      </a>'+
                                '<div id="bigMouse">'+
                                '<img id="shubiao_black" src="/accessTool/img/shubiao_black.ico" width="50"/>'+
                                '<img id="shubiao_yellow" src="/accessTool/img/shubiao_yellow.ico" width="50"/>'+
                                '<img id="shubiao_blue" src="/accessTool/img/shubiao_blue.ico" width="50"/>'+
                                '<img id="shubiao_green" src="/accessTool/img/shubiao_green.ico" width="50"/>'+
                                '<img id="shubiao_normal" src="/accessTool/img/shubiao_bai.ico" width="50"/>'+
                                '</div>'
                                + '     </li>'
                                + '     <li id="cy_ruler" class="li_1"><a href="javascript:void(0);" id="toolbar_guides"  class="ul_li_a_1" title="十字光标"><span class="exap ul_li_a_1" href="javascript:void(0);" title="十字光标">光标</span>'
                                + accessInitial.imgs.cursor1
                                + '     </a> </li>'
                                + '     <li id="cy_bigword" class="li_1"><a href="javascript:void(0);" id="toolbar_pageZoomIc"  class="ul_li_a_1" title="网页放大Shift+H"><span class="exap ul_li_a_1" href="javascript:void(0);" title="网页放大Shift+H">放大</span>'
                                + accessInitial.imgs.enlarge1
                                + '     </a> </li>'
                                + '     <li id="cy_smallword" class="li_1"><a href="javascript:void(0);" id="toolbar_pageZoomDc"  class="ul_li_a_1" title="网页缩小Shift+J"><span class="exap ul_li_a_1" href="javascript:void(0);" title="网页缩小Shift+J">缩小</span>'
                                + accessInitial.imgs.small1
                                + '     </a> </li>'
                                + '     <li id="cy_color" class="li_2"><a href="javascript:void(0);" class="ul_li_a_1" title="切换配色Shift+k,当前为原始色,下一配色白底黑字"  id="toolbar_colorChange"><span class="exap ul_li_a_1" href="javascript:void(0);" title="调整配色">配色</span>'
                                + accessInitial.imgs.color1
                                + '     </a> </li>'
                                + '     <li id="cy_displayScreen" class="li_2"><a href="javascript:void(0);" id="toolbar_magnifier"  class="ul_li_a_1" title="切换大字幕Shift+L"><span class="a_p_2 ul_li_a_1" href="javascript:void(0);" title="大字幕">大字幕</span>'
                                + accessInitial.imgs.screen1
                                + '     </a> </li>'
                                + '     <li id="cy_plainText" class="li_2">'
                                + '      <a href="javascript:void(0);" id="toolbar_plainText" class="ul_li_a_1"  title="切换纯文本shift+Z键" ><span class="exap ul_li_a_1" href="javascript:void(0);" title="纯文本">纯文本</span>'
                                + accessInitial.imgs.plainText
                                + '      </a>'
                                + '     </li>'
                                + '     <li id="cy_grayScale" class="li_2">' 
                                + '      <a href="javascript:void(0);" id="toolbar_grayScale" class="ul_li_a_1"  title="切换灰度设置shift+X键" ><span class="exap ul_li_a_1" href="javascript:void(0);" title="灰度">灰度</span>' 
                                + accessInitial.imgs.grave 
                                + '      </a>'
                                + '     </li>'
                                + '     <li id="cy_refrash" class="li_1"><a href="javascript:void(0);" id="toolbar_refresh"  class="ul_li_a_1" title="重新设置Shift+0"><span class="exap ul_li_a_1" href="javascript:void(0);" title="重新设置Shift+0">重置</span>'
                                + accessInitial.imgs.reflash1
                                + '     </a> </li>'
                                + '     <li id="cy_help" class="li_1"><a href="javascript:void(0);" id="toolbar_help" class="ul_li_a_1" title="开启帮助Shift+问号键"><span class="exap ul_li_a_1" href="javascript:void(0);" title="开启帮助Shift+问号键">帮助</span>'
                                + accessInitial.imgs.help1
                                + '     </a> </li>'
                                + '     <li id="cy_pinned" class="li_1"><a href="javascript:void(0);" id="toolbar_pinned" class="ul_li_a_1" title="固定或者隐藏工具栏，请按 Shift+M"><span class="exap ul_li_a_1" href="javascript:void(0);" title="固定或者隐藏工具栏，请按 Shift+M">固定</span>'
                                + accessInitial.imgs.pinned
                                + '     </a> </li>'
                                + '     <li id="cy_close" class="li_1"><a href="javascript:void(0);" id="toolbar_exit" class="ul_li_a_1"  title="关闭辅助工具Shift+E"><span class="exap ul_li_a_1" href="javascript:void(0);" title="关闭辅助工具Shift+E">退出</span>'
                                + accessInitial.imgs.exit1
                                + '     </a> </li>'
                                + '     <li id="botn" style="clear:both;"></li>'
                                + '    </ul>'
                                + '   </div>'
                                + '  </div>'
                                + ' </div>'
                                + ' <div id="toolbarPage2" class="btn-hide">'
                                + '  <div id="toolbarPage2content">'
                                + '  <!--  -->'
                                + '   <div id="transform_dp">'
                                + '    <div id="navNumDiv" class="toolbarTexts">'
                                + '         <span class="textSpan textShow">'
                                + '              <p class="textShow">'
                                + '                  <span class="textStr textShow">导航区</span>'
                                + '                  <span class="textNum">(<span id="navNum" class="textNum">0</span>)</span>'
                                + '              </p>' 
                                + '              <p class="textKey textShow">ALT+1</p>'
                                + '          </span>'
                                + '      </div>'
                                +     '<div id="infoWinDiv" class="toolbarTexts">'
                                +      '<span class="textSpan textShow">' 
                                +         '<p class="textShow">' 
                                +             '<span class="textStr textShow">视窗区</span>' 
                                +             '<span class="textNum">(<span id="infoWinNum" class="textNum">0</span>)</span>' 
                                +         '</p>'
                                +         '<p class="textKey textShow">ALT+2</p>'
                                +       '</span>'
                                +     '</div>'
                                +     '<div id="interactionWinDiv" class="toolbarTexts">'
                                +           '<span class="textSpan textShow">'
                                +                 '<p class="textShow"> '
                                +                 '<span class="textStr textShow">交互区</span> '
                                +                 '<span class="textNum">(<span id="interactionWinNum" class="textNum">0</span>)</span>'
                                +                 '</p>'
                                +                 '<p class="textKey textShow">ALT+3</p>'
                                +           '</span>'
                                +      '</div>'
                                +     '<div id="serviceWinDiv" class="toolbarTexts">'
                                +           '<span class="textSpan textShow">'
                                +                  '<p class="textShow"> '
                                +                      '<span class="textStr textShow">服务区</span> '
                                +                      '<span class="textNum">(<span id="serviceWinNum" class="textNum">0</span>)</span>'
                                +                  '</p>'
                                +                  '<p class="textKey textShow">ALT+4</p>'
                                +            '</span>'
                                +      '</div>'
                                +    '<div id="listAreaWinDiv" class="toolbarTexts">'
                                +          '<span class="textSpan textShow">'
                                +                 '<p class="textShow"> '
                                +                     '<span class="textStr textShow">列表区</span> '
                                +                     '<span class="textNum">(<span id="listAreaWinNum" class="textNum">0</span>)</span>'
                                +                 '</p>'
                                +                '<p class="textKey textShow">ALT+5</p>' 
                                +           '</span>' 
                                +    '</div>' 
                                +     '<div id="articleAreaWinDiv" class="toolbarTexts">' 
                                +           '<span class="textSpan textShow">' 
                                +           '<p class="textShow"> ' 
                                +           '<span class="textStr textShow">正文区</span> ' 
                                +           '<span class="textNum">(<span id="articleAreaWinNum" class="textNum">0</span>)</span>' 
                                +           '</p>' 
                                +           '<p class="textKey textShow">ALT+6</p>' 
                                +           '</span>' 
                                +    '</div>' 
                                + '   <!--  --> ' 
                                + '  <div id="otherBtns">' 
                                + '   <div class="readDiv">' 
                                + '   <a href="javascript:void(0);" id="toFirstPage" title="区域指引：快捷键Shift+R，可通过Shift+A开启声音获取语音提示"  >'
                                +       '<span class="read-span" title="区域指引：快捷键Shift+R，可通过Shift+A开启声音获取语音提示">区域指引</span>' 
                                + accessInitial.imgs.left_img2 
                                + '    </a> '
                                + '   </div>' 
                                + '   <div class="readDiv" id="cy_playSpeech_2" style="border-left: none;">' 
                                + '    <a href="javascript:void(0);" id="toolbar_speakOnOff" title="声音开关"  ><span class="read-span" title="语音">语音</span>'
                                + accessInitial.imgs.sound_big
                                + '    </a> '
                                + '   </div>'
                                + '   <div class="readDiv">'
                                + '    <a href="javascript:void(0);" id="toolbar_magnifier_2" title="大字幕"  ><span class="read-span" title="大字幕">大字幕</span>'
                                + accessInitial.imgs.screen1
                                + '    </a> '
                                + '     '
                                + '   </div>'
                                + '   <div class="readDiv">'
                                + '    <a href="javascript:void(0);" id="toolbar_help_move" title="开启帮助Shift+问号键"><span class="read-span" title="开启帮助Shift+问号键">帮助</span>'
                                + accessInitial.imgs.help1
                                + '    </a> '
                                + '   </div>'
                                + '   <div class="readDiv">'
                                + '    <a href="javascript:void(0);" id="toolbar_exit2" title="关闭辅助工具Shift+E"  ><span class="read-span" title="关闭辅助工具Shift+E">退出</span>'
                                + accessInitial.imgs.exit1
                                + '    </a> '
                                + '   </div>'
                                + '  </div>'
                                + '  </div>'
                                + ' </div>'
                                + ' <div id="toolbar_prompt" style="display: none;">'
                                + '  <span>请按F11切换大界面模式</span>'
                                + ' </div>'
                                + ' <div id="zwlj_prompt" tabindex="-1" class="GTAssetsTextCon" style="display: none;" role="alertdialog" aria-label="提示：该链接属站外链接，将无法使用辅助浏览工具！是否继续访问？按tab键进行选择">'
                                + '  <br/>'
                                + '  <span class="GTAssetsTextCon" data-has-text="1">提示：该链接属站外链接，将无法使用辅助浏览工具！</span>'
                                + '  <br/>'
                                + '  <span class="GTAssetsTextCon" data-has-text="1">是否继续访问？</span><br/>'
                                + '  <div style="margin-top:15px">'
                                + '      <input id="zwlj_bt1" type="button" class="GTAssetsTextCon" aria-label="是,按回车键在新窗口打开链接" value="是" />'
                                + '      <input id="zwlj_bt2" type="button" class="GTAssetsTextCon" aria-label="否,按回车键关闭提示框" value="否" />'
                                + '      <input id="zwlj_href" type="hidden" value=""/>'
                                + '     </div>'
                                + ' </div>'
                                + ' <div id="zwbdtj_prompt" style="display: none;">'
                                + '  <span id="zwbdtj_span1">请注意，该操作链接到其他网站</span><br/>'
                                + '  <span id="zwbdtj_span12">该网站无法启动无障碍工具条！</span>'
                                + ' </div>'
                                + ' <div id="no_authorization_prompt" style="display: none;">'
                                + '  <span>当前访问页面超出辅助工具操作范围</span>'
                                + '  <br/>'
                                + '  <span>无障碍辅助工具无法正常工作！</span>'
                                + '  <br/>'
                                + '  <br/>'
                                + '  <input id="na_bt1" type="button" title="点击返回" value="点击返回" />'
                                + ' </div>'
                                + '</div>'
    accessInitial.toolbarCssStr = '#accessToolBar  {'
        + ' top:0;'
        + ' left:0;'
        + ' position:fixed;'
        + ' min-width: 100%;'
        + ' color: #666666;'
        + ' font-family: Microsoft YaHei;'
        + ' font-size: 12px;'
        + ' text-align: center;'
        + ' z-index: 20230905;'
        + '}'
        + '#accessToolBar *{'
        + ' font-family:Microsoft YaHei !important;'
        + '}'
        + '#ymd_magnifier_right span{'
        + '   font-family : Microsoft YaHei !important  '
        + '}'
        + '#accessToolBar h1, #accessToolBar h2, #accessToolBar h3, #accessToolBar h4, #accessToolBar h5, #accessToolBar h6 {'
        + ' font-size: 12px;'
        + ' font-weight: normal;'
        + '}'
        + '#accessToolBar li {'
        + ' list-style-type: none;'
        + '}'
        + '#accessToolBar a {'
        + ' color: #666666;'
        + ' text-decoration: none;'
        + '}'
        + '#accessToolBar a:not(#cy_playSpeech_dl a) {'
        + ' display: block;'
        + '}'
        + '#accessToolBar span {'
        + ' color: #666666;'
        + '}'
        + '#accessToolBar #canyou_toolbar_div {'
        + ' background-color:#505050!important;'
        + ' color:#fff;'
        + ' min-width: 103px;'
        + '}'
        + '#accessToolBar div.cy_toolbar_bg_table {'
        + ' height:98px;'
        + ' margin: 0px auto;'
        + ' align:centent;'
        + '}'
        + '#accessToolBar div.cy_toolbar_bg_table ul {'
        + ' font-size: 18px;'
        + ' line-height: 30px;'
        + ' text-align: center;'
        + ' display:inline-block;'
        + ' margin: 0 auto;'
        + '}'
        + '#accessToolBar #arrow_1 img, #accessToolBar #arrow_2 img, '
        + '#accessToolBar #arrow_3 img, #accessToolBar #arrow_4 img,'
        + '#accessToolBar #arrow_5 img {display: none;}'
        + 'div.cy_toolbar_bg_table ul li{position:relative;}'
        + '#accessToolBar div.cy_toolbar_bg_table ul li span.ul_li_a_1{color: #FFFFFF; display:block;}'
        + '#accessToolBar div.cy_toolbar_bg_table ul li.li_1 {float:left;}'
        + '#accessToolBar div.cy_toolbar_bg_table ul li.li_2 {float:left;}'
        + '#accessToolBar div.cy_toolbar_bg_table ul li.li_3 {float:left;}'
        + '#accessToolBar #bigMouse img{'
        + ' width: auto;'
        + ' height: 40px;'
        + 'padding: 10px 20px;'
        + '}'
        + '#accessToolBar .iconStyle{'
        + ' width: 48px;'
        + ' height: 48px;'
        + 'background-color: #c9c9c9;'
        + 'border-radius: 6px;'
        + 'border: #909090 1px solid;'
        + 'padding: 0 7px; box-sizing: content-box;'
        + 'display: flex;'
        + 'justify-content: center;'
        + 'align-items: center'
        + '}'
        + '#accessToolBar .iconStyle:hover, #toolbar_more .iconStyle:hover, #toolbarPage2 .iconStyle:hover{'
        + 'background-color:#f14545;'
        + '}'
        + '#accessToolBar div.cy_toolbar_bg_table ul li span.ul_li_a_1 {'
        + ' float:left;'
        + '}'
        + '/*                  底部文字显示框                           */'
        + '#ymd_magnifier{text-align:center;width:100%}'
        + '#ymd_magnifier{zoom:1!important; position:fixed;bottom:0;left:0;background:#484a4a;height:160px;overflow:hidden;}'
        + '#ymd_magnifier ul{list-style:none;margin:0;padding:0;overflow:hidden;height:160px}'
        + '#ymd_magnifier #ymd_magnifier_left{float:left;padding:12px 10px 0 10px;color:#fff;overflow:hidden;height:160px;width:100px;box-sizing:border-box;font-family: "微软雅黑";}'
        + '#ymd_magnifier #ymd_magnifierClose,#ymd_magnifier a{color:#ffffff;text-decoration:none;display:block;line-height:30px;font-size:18px;letter-spacing:5px;width:auto;border:1px solid rgba(255,255,255,.3);border-radius:5px;text-align:center;clear:left;margin:0 0 15px 0;cursor:pointer;font-style:normal;background:#505050!important}#ymd_magnifier #ymd_magnifierClose{margin:0}'
        + '#ymd_magnifier #ymd_magnifierClose:hover,#ymd_magnifier a:hover{color:#000000;background:#fff;}#ymd_magnifier #ymd_magnifier_right{font-family:"Microsoft YaHei";text-align:center;font-size:32pt!important;letter-spacing:5px;color:#000;overflow-y:auto;overflow-x:hidden;height:150px;background:#ffffff;border-radius:5px;margin:5px 5px 0 0}#ymd_magnifier #ymd_magnifier_right::-webkit-scrollbar{width:10px;height:1px}#ymd_magnifier #ymd_magnifier_right::-webkit-scrollbar-thumb{border-radius:10px;background-color:rgba(0,0,0,.2)!important;background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent)!important}#ymd_magnifier #ymd_magnifier_right::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:#ededed!important;border-radius:10px}'
        + '.pinyin{font-size: inherit !important;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:0!important;float:left;line-height:50%;color:#000;font-weight:600!important;margin-left:5px!important}'
        + '.pinyin b{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;flex-flow:column;font-weight:400;font-style:normal;padding:0 5px 0 0;position:relative;z-index:2}'
        + '.pinyin b::before{content:"";position:absolute;width:37px;height:1px;z-index:1;left:0;bottom:17.5px;border-top:dashed 1px #a9a9a9}'
        + '.pinyin b::after{content:"";position:absolute;width:1px;height:37px;z-index:1;left:19px;bottom:0;border-left:dashed 1px #a9a9a9}'
        + '.pinyin i{text-align:center;font-style:normal}'
        + '.pinyin b>i:first-child{letter-spacing:.5px;color:#000!important;font-size:14pt!important;font-weight:400;margin:10px 0 2px 0;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}'
        + '.pinyin b>i:last-child{width:37px;height:37px;line-height:37px;font-size:28pt!important;position:relative;z-index:2;border:solid 1px #a9a9a9!important;color:#000!important;font-family:"楷体",KT,"LiHei Pro Medium";font-weight:600}'
        + '.pinyin b>i:last-child::before{content:"";position:absolute;width:49..5px;height:49..5px;z-index:-1;left:0;bottom:0;transform-origin:left bottom;transform:rotate(45deg);border-left:dashed 1px #a9a9a9!important}'
        + '.pinyin b>i:last-child::after{content:"";position:absolute;width:49.5px;height:49..5px;z-index:-1;right:0;bottom:0;transform-origin:right bottom;transform:rotate(-45deg);border-right:dashed 1px #a9a9a9!important}'
        + '/*---------------页面加载效果---------------*/'
        + '#accessToolBar .overlay{position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 998; width: 100%; height: 100%; _padding: 0 20px 0 0; background: #f6f4f5; display: none;}'
        + '#accessToolBar .showbox{position: fixed; top: 0; left: 50%; z-index: 9999; opacity: 0; filter: alpha(opacity=0); margin-left: -80px;}'
        + '#accessToolBar *html, *html body{background-image: url(about:blank); background-attachment: fixed;}'
        + '/*-------------------全屏弹窗---------------------*/'
        + '#accessToolBar #toolbar_prompt {'
        + ' width: 720px;'
        + ' height: 150px;'
        + ' z-index: 9999;'
        + ' position:absolute;'
        + ' top:50%;'
        + ' left:50%;'
        + ' margin-top: -75px;/*注意这里必须是DIV高度的一半*/    '
        + ' margin-left: -360px;/*这里是DIV宽度的一半*/'
        + ' opacity: 1;'
        + ' background-color: #f2f2f2;'
        + '}'
        + '#accessToolBar #toolbar_prompt span {'
        + ' font-size: 70px;'
        + ' line-height: 140px;'
        + ' color: #FFFFFF;'
        + '}'
        + '/*-------------------外链接弹窗---------------------*/'
        + '#accessToolBar #zwlj_prompt {'
        + ' width: 720px;'
        + ' height: 190px;'
        + ' z-index: 9999;'
        + ' position:fixed;'
        + ' top:50%;'
        + ' left:50%;'
        + ' margin-top: -75px;/*注意这里必须是DIV高度的一半*/    '
        + ' margin-left: -360px;/*这里是DIV宽度的一半*/'
        + ' opacity: 1;'
        + ' background-color: #f2f2f2;'
        + '}'
        + '#accessToolBar #zwlj_prompt span {'
        + ' font-size: 24px;'
        + ' line-height: 38px;'
        + ' color: #FFFFFF;'
        + '}'
        + '#accessToolBar #zwlj_prompt input{'
        + ' font-size: 24px;'
        + ' color:#FFFFFF;'
        + ' background: #f2f2f2;'
        + ' width:50px;'
        + ' height:30px;'
        + ' line-height:18px;'
        + ' border:0;'
        + '}'
        + '/*-------------------无权限页面弹窗---------------------*/'
        + '#accessToolBar #no_authorization_prompt {'
        + ' width: 800px;'
        + ' height: 210px;'
        + ' z-index: 9999;'
        + ' position:absolute;'
        + ' top:50%;'
        + ' left:50%;'
        + ' margin-top: -75px;/*注意这里必须是DIV高度的一半*/    '
        + ' margin-left: -360px;/*这里是DIV宽度的一半*/'
        + ' opacity: 1;'
        + ' background-color: #f2f2f2;'
        + '}'
        + '#accessToolBar #no_authorization_prompt span {'
        + ' font-size: 30px;'
        + ' line-height: 70px;'
        + ' color: #FFFFFF;'
        + '}'
        + '#accessToolBar #no_authorization_prompt input{'
        + ' font-size: 25px;'
        + ' color:#FFFFFF;'
        + ' background: #f2f2f2;'
        + ' width:100px;'
        + ' height:30px;'
        + ' line-height:18px;'
        + ' border:0;'
        + '}'
        + '/*-------------------表单站外提交弹窗---------------------*/'
        + '#accessToolBar #zwbdtj_prompt{'
        + ' width: 600px;'
        + ' height: 150px;'
        + ' z-index: 9999;'
        + ' position:absolute;'
        + ' top:50%;'
        + ' left:55%;'
        + ' margin-top: -75px;/*注意这里必须是DIV高度的一半*/    '
        + ' margin-left: -360px;/*这里是DIV宽度的一半*/'
        + ' opacity: 1;'
        + ' background-color: #f2f2f2;'
        + '}'
        + '#accessToolBar #zwbdtj_prompt span {'
        + ' font-size: 30px;'
        + ' line-height: 70px;'
        + ' color: #FFFFFF;'
        + '}'
        + ''
        + '#accessToolBar #botn{'
        + ' width:0px;'
        + ' height:0px;'
        + ' line-height:0px;'
        + ' font-size:0px;'
        + ' overflow:hidden;'
        + ' }'
        + '#accessToolBar #iframe .ymd_split_span{'
        + ' text-decoration:none; '
        + '}'
        + '/*           设置下拉框        */             '
        + '#accessToolBar li#cy_options dl{'
        + ' width:168px;'
        + ' position:absolute; '
        + ' left:0;'
        + ' top:62px;'
        + ' background-color:#fff;'
        + ' z-index: 10000;'
        + ' border:1px solid #666;'
        + ' margin:1px;'
        + ' font-size:14px;'
        + '}'
        + '#accessToolBar li#cy_options dl dt,li#cy_options dl dd{'
        + ' float:left;margin:1px 0;'
        + '}'
        + '#accessToolBar li#cy_options dl dt{height:40px;}'
        + '#accessToolBar li#cy_options dl dd{height:40px;}'
        + '#accessToolBar li#cy_options dl dt a,li#cy_options dl dd a{'
        + ' display:block;'
        + ' float:left;'
        + ' cursor: pointer;'
        + '}'
        + '#accessToolBar li#cy_options dl dt a{'
        + ' height:40px;'
        + ' width:40px;'
        + ' background-color:#474747;'
        + ' border-bottom:1px solid #fff;'
        + ' border-top:1px solid #fff;'
        + '}'
        + '#accessToolBar li#cy_options dl dt a img{'
        + ' margin-left:5px;'
        + ' margin-top:7px;'
        + '}'
        + '#accessToolBar li#cy_options dl dd a{'
        + ' line-height:40px;'
        + ' width:128px;'
        + ' height:40px;'
        + ' border-bottom:1px solid #fff;'
        + ' border-top:1px solid #fff;'
        + '}'
        + '#accessToolBar #cy_arrow > #bigMouse{'
        + 'position:absolute;'
        + 'display:none;'
        + 'left:-130%;'
        + '}'
        +'#bigMouse > img{'
        + 'background-color: rgb(255,255,255);'
        + '}'
        + '#bigMouse img:hover{'
        + 'background-color: #ea9a06'
        + '}'
        + '#accessToolBar li#cy_arrow dl dt,li#cy_arrow dl dd {'
        + ' float: left;'
        + ' margin: 1px 0;'
        + '}'
        + '#accessToolBar li#cy_arrow dl dd {'
        + ' height: 40px;'
        + '}'
        + '#accessToolBar li#cy_arrow dl dt {'
        + ' height: 40px;'
        + '}'
        + '#accessToolBar li#cy_arrow dl dt a {'
        + ' height: 40px;'
        + ' width: 40px;'
        + ' background-color: #474747;'
        + ' border-bottom: 1px solid #fff;'
        + ' border-top: 1px solid #fff;'
        + '}'
        + '#accessToolBar li#cy_arrow dl {'
        + ' width: 80px;'
        + ' height: 210px;'
        + ' position: absolute;'
        + ' left: 0;'
        + ' top: 62px;'
        + ' background-color: #fff;'
        + ' z-index: 10000;'
        + ' border: 1px solid #666;'
        + ' margin: 1px;'
        + ' font-size: 14px;'
        + '}'
        + '#accessToolBar li#cy_arrow dl dt a img {'
        + ' margin-left: 5px;'
        + ' margin-top: 7px;'
        + '}'
        + '#accessToolBar li#cy_arrow dl dt a,li#cy_arrow dl dd a {'
        + ' display: block;'
        + ' float: left;'
        + ' cursor: pointer;'
        + '}'
        + '#accessToolBar li#cy_arrow dl dd a img {'
        + ' widows: 40px;'
        + ' height: 40px;'
        + '}'
        + '#accessToolBar li#cy_arrow dl dd a {'
        + ' line-height: 40px;'
        + ' width: 40px;'
        + ' height: 40px;'
        + ' border-bottom: 1px solid #fff;'
        + ' border-top: 1px solid #fff;'
        + '}'
        + '#slideLateral {'
        + ' width: 100%;'
        + ' height: 5px;'
        + '}'
        + '#slideLongitudinal {'
        + ' width: 5px;'
        + ' height: 100%;'
        + '}'
        + '#slideLateral, #slideLongitudinal {'
        + ' position: absolute;'
        + ' background-color: #ff0000 !important;'
        + ' overflow: hidden;'
        + ' z-index: 9999;'
        + ' left: 0;'
        + ' top: 0;'
        + '}'
        + '/*-------------------------区域导航-----------------------------*/'
        + '#accessToolBar #toolbarPage2 {'
        + ' background-color: #505050!important;'
        + ' display: none;'
        + ' height: 98px;'
        + '}'
        + '#toolbarPage2 p{'
        + ' margin: 0;'
        + ' padding: 0;'
        + ' text-indent: unset;'
        + '}'
        + '#accessToolBar #toolbarPage2 .toolbarTexts {'
        + '    width: 110px;'
        + '    overflow: hidden;'
        + '    cursor: pointer;'
        + '   /* height: 77px;*/'
        + '    float: left;'
        + '}'
        + '#accessToolBar #toolbarPage2 .toolbarTexts .textSpan {'
        + '    float: left;'
        + '    margin-left: 6px;'
        + '    cursor: pointer;'
        + '}'
        + '#accessToolBar #toolbarPage2 .textStr {'
        + '    letter-spacing: 1px;'
        + '/*    display: block;*/'
        + '    cursor: pointer;'
        + '    line-height: 45px;'
        + '    overflow: hidden;'
        + '    height: 35px;'
        + '    font-size: 16px !important;'
        + '    clear: both;'
        + '    color: #ff9027!important;'
        + '    margin-top: -10px !important;'
        + '}'
        + '#accessToolBar #toolbarPage2 .textKey {'
        + '    cursor: pointer;'
        + '    display: block;'
        + '    font-size: 18px !important;'
        + '    line-height: 10px;'
        + '    height: 35px;'
        + '    clear: both;'
        + '    color: gray;'
        + '    padding-top: 10px;'
        + ' font-family: Consolas;'
        + '}'
        + '#accessToolBar .textSpan.textShow{'
        + '    display: block !important;'
        + '}'
        + '#accessToolBar #toolbarPage2 .textSpan span{'
        + '    margin: 0px;'
        + '    float: none;'
        + ' vertical-align: middle;'
        + '}'
        + '#accessToolBar #toolbarPage2 .textShow {'
        + '    color: #ffffff;'
        + '}'
        + '#accessToolBar #toolbarPage2 .textNum {'
        + '    color: #ff9027;'
        + '    font-size: 15px;'
        + ' font-family: Consolas;'
        + '}'
        + '#accessToolBar #toolbarPage2content .toolbarTexts{ float:left;}'
        + '#accessToolBar .displayNone{ display:none;}'
        + '#accessToolBar #toolbarPage2content {'
        + '    height: 100%;'
        + '    width: 1200px;'
        + '    margin: 0 auto;'
        + '    position: relative;'
        + '}'
        + '#accessToolBar .navText{'
        + ' padding-top: 9px; '
        + ' width: 120px;'
        + '    overflow: hidden;'
        + '    float: left;'
        + '    margin-left: 5px;'
        + '}'
        + ''
        + '#accessToolBar .textStr2{'
        + ' letter-spacing: 1px;'
        + ' cursor: default;'
        + '    line-height: 45px;'
        + '    overflow: hidden;'
        + '    height: 35px;'
        + '    font-weight: bold;'
        + '    font-size: 22px !important;'
        + '    clear: both;'
        + '    color: gray;'
        + '}'
        + '#accessToolBar .readDiv{'
        + ' float: left;'
        + ' width: 68px;'
        + '}'
        + '#accessToolBar .read-span{'
        + '    color: #ffffff;'
        + '    display: block;'
        + '    font-size: 16px;'
        + '}'
        + '#accessToolBar div.cy_toolbar_bg_table ul{ padding-top:8px; padding-bottom:8px; padding-left:0px;}'
        + '#accessToolBar div.cy_toolbar_bg_table ul li{'
        + ' margin:0px;'
        + ' text-align:center;'
        + '}'
        + '#accessToolBar div.cy_toolbar_bg_table ul li>a{ display:block; text-align:center; border-radius:3px; line-height:0px; font-size:0px; width:68px;}'
        + '#accessToolBar #cy_zoomAdd a{ float:left; width:50%;}'
        + '#accessToolBar #cy_playSpeech #toolbar_speakVolume{float:left;}'
        + '#accessToolBar #cy_playSpeech #toolbar_playSpeech{ float:left; width:19px;}'
        + '#accessToolBar div.cy_toolbar_bg_table ul li span.a_p_2,div.cy_toolbar_bg_table ul li span.a_p_3{ clear:both;}'
        + '#accessToolBar li#cy_playSpeech dl dd a{width:22px; float:left;}'
        + '#accessToolBar li#cy_playSpeech dl dd a.toolbar_speakSpeed{ width:74px;}'
        + '#accessToolBar div.cy_toolbar_bg_table ul li span.exap,div.cy_toolbar_bg_table ul li span.a_p_1,div.cy_toolbar_bg_table ul li span.a_p_2,div.cy_toolbar_bg_table ul li span.a_p_3{ font-size:16px; width:100%; line-height:28px;padding-bottom:5px;}'
        + '#accessToolBar #otherBtns span{ padding:5px 0px; display:block;}'
        + '#accessToolBar #transform_dp{ float:left;}'
        + '#accessToolBar #otherBtns {float:left;}'
        + '#accessToolBar #toolbarPage2content{ overflow:hidden; padding-top:8px;}'
        + '/* -----------------更多 -----------------*/'
        + '#accessToolBar #toolbarMore{'
        + ' display:none;'
        + ' position: fixed;'
        + '    top: 0;'
        + '    bottom: 0;'
        + '    width: 80px;'
        + '    background-color: #f2f2f2;'
        + '    z-index: 99999;'
        + '}'
        + '#accessToolBar #toolbarMore .toolbarMark{'
        + ' background-image: url(../img/left_img1.png);'
        + '    background-repeat: no-repeat;'
        + '    background-position: center;'
        + '    margin-left: 10px;'
        + '    margin-top: 10px;'
        + '    width: 70px;'
        + '    height: 65px;'
        + '    display: block'
        + '}'
        + '#accessToolBar #toolbarMore .toolbarLeft{'
        + ' width: 100%;'
        + '    padding-top: 5px;'
        + '    padding-bottom: 5px;'
        + '    float: left;'
        + '    color: #FFF;'
        + '    display: block;'
        + '    font-size: 16px;'
        + '    margin-top: -20px;'
        + '}'
        + '#accessToolBar #toolbarMore li{'
        + ' margin-top: 50px;'
        + '}'
        + '#accessToolBar #toolbarMore .leftLi1{'
        + ' margin-top: 30px;'
        + '}'
        + '#accessToolBar #toolbarMore .leftClose{'
        + ' bottom: 0;'
        + '    position: fixed;'
        + '    margin-left: -68px;'
        + '    width: 60px;'
        + '}'
        + '#accessToolBar #toolbarMore .leftLi3{'
        + ' padding: 5px;'
        + '}'
        accessInitial.toolbarCssStr_m = ''
            + '#accessToolBar  {top:initial !important;bottom:0 !important}'
            + '#accessToolBar div.cy_toolbar_bg_table ul li {'
            + '    border-left:none;'
            + '}'
            + '#accessToolBar #mobileDiv{ display:flex;justify-content:center; background-color:#f2f2ff; }'
            + '#accessToolBar  #mobileDiv .mobileHtml_title{color:#333333; font-size: 18px;font-weight: 500;}'
            + '#accessToolBar  #mobileDiv .mobileHtml_div{margin-top:5px;width:25%}'
            + '#mobileHtml_setting_container {'
            + '    display:none;'
            + '    width: 100%;'
            + '    color: #333333;'
            + '    background: #f2f2ff;'
            + '    font-family: 微软雅黑, Microsoft YaHei, 宋体, tahoma, Verdana, arial, sans-serif;'
            + '    position: fixed;'
            + '    text-align: center;'
            + '    vertical-align: middle;'
            + '    z-index: 9999;'
            + '    overflow: hidden;'
            + '    box-shadow: 0 0 10px 0 #dcdce9;'
            + '    box-sizing: border-box;'
            + '    line-height: unset !important;'
            + '    height: 410px;'
            + '    bottom: 67px;'
            + '    border-bottom: 1px solid #dcdce9;'
            + '}'
            + '#mobileHtml_setting_container .mHtml_setting_head{'
            + '    display: flex;'
            + '    margin-top: 4px;'
            + '    padding: 12px;'
            + '    border-left: 4px solid #0000e9;'
            + '    border-top-left-radius: 4px;'
            + '    border-top-right-radius: 4px;'
            + '    font-size: 18px;'
            + '    color: #0073ff;'
            + '    text-align: left;'
            + '    box-shadow: 0 0 10px 0 #dcdce9;'
            + '}'
            + '#mobileHtml_setting_container .mHtml_setting_head_title{'
            + '    text-align: left;'
            + '    width: calc(100% - 40px);'
            + '    line-height: 35px;'
            + '}'
            + '#settingClose {'
            + '    height: 35px;'
            + '}'
            + '.mHtml_setting_body .setting_body_tab{'
            + '    list-style-type: none;'
            + '    height: 48px;'
            + '    margin: 0 6px;'
            + '    padding: 0;'
            + '    border-bottom: 1px solid rgba(142, 161, 171, 0.4);'
            + '}'
            + '.mHtml_setting_body .tab_li{'
            + '    width: 24%;'
            + '    font-weight: 400;'
            + '    font-size: 24px;'
            + '    line-height: 48px;'
            + '    text-align: center;'
            + '    float: left;'
            + '}'
            + '.mHtml_setting_body .tab_li.active{'
            + '    border: 1px solid #dcdce9;'
            + '    color: #f2f2ff;'
            + '    background-color: #3333ff;'
            + '    border-radius: 8px;'
            + '}'
            + '.mHtml_setting_body .setting_body_panel{'
            + '    height: 400px;'
            + '    display: none;'
            + '}'
            + '.mHtml_setting_body .setting_body_panel.active{'
            + '    display: block;'
            + '}'
            + '.setting_body .panel_list{'
            + '    list-style-type: none;'
            + '    font-size: 21px;'
            + '    font-weight: 500;'
            + '    line-height: 48px;'
            + '    text-align: center;'
            + '    padding: 0;'
            + '    margin: 20px 0 0 0;'
            + '}'
            + '.setting_body .panel_list_item{'
            + '    display: flex;'
            + '    position: relative;'
            + '    margin: 6px;'
            + '    background-color: #ffffff;'
            + '    border-radius: 8px;'
            + '    border: 1px solid #dcdce9;'
            + '    font-weight: 400;'
            + '}'
            /* .setting_body .panel_list_item.active{
                color: #f2f2ff;
                background-color: #3333ff;
            } */
            + '.setting_body .panel_list .panel_list_item_title{'
            + '    text-align: center;'
            + '    width: 100%;'
            + '}'
            + '.setting_body .panel_list .panel_list_item_btn{'
            + '    position: absolute;'
            + '    top: 10px;'
            + '    right: 6px;'
            + '    width: 28px;'
            + '    height: 28px;'
            + '}'
            + '.setting_body .panel_list_item_btn .panel_list_item_checkBox{'
            + '    display: none;'
            + '    width: 28px;'
            + '    height: 28px;'
            + '}'
            + '.setting_body .panel_list_item.active .panel_list_item_checkBox{'
            + '    display: block;'
            + '    background: url(/accessTool/img/checked.png) no-repeat;'
            + '    background-size: 100% 100%;'
            + '}'
            +'.setting_body .panel_list_huyan .panel_list_huyan_item{'
            + 'display: inline-block;'
            + 'width: 44%;'
            + '}'
            /* 主题 */
            + '.panel_list_item[data-color-theme="defaltMode"] {'
            + '     background-color: #dff1fc;'
            + '}'
            + '.panel_list_item[data-color-theme="blueYellowMode"] {'
            + '    background-color: #0000FF;'
            + '    color: #FFFF00;'
            +'}'
            + '.panel_list_item[data-color-theme="yellowBlackMode"] {'
            + '    background-color: #FFFF00 ;'
            + '    color: #000000;'
            + '}'
            + '.panel_list_item[data-color-theme="yellowMode"] {'
            + '    background-color: #000000;'
            + '    color: #FFFF00;'
            + '}'
            /* 字体 */
            + '.panel_list_item[data-font-theme="xlarge"] {'
            + 'font-size: 24px;'
            + '}'
            + '.panel_list_item[data-font-theme="large"] {'
            + '    font-size: 21px;'
            +'}'
            + '.panel_list_item[data-font-theme="defalt"] {'
            + '    font-size: 18px;'
            + '}'+
            + '@media screen and (max-width:1000px){'
            + '    #accessToolBar{ background: transparent;}'
            + '    #accessToolBar svg, #toolbar_more svg, #toolbarPage2 svg{ width: 40px; height: 40px;}'
            + '}'
            + '#toolbar_refresh svg, #toolbar_help svg, #toolbar_exit svg{width:34px;height:40px;}'; 
            accessInitial.insertDoms = function () {
                var tempDiv = document.createElement("div"); 
                tempDiv.id = "GtToolbarTempDiv";
                document.body.appendChild(tempDiv); 
                tempDiv.innerHTML = accessInitial.toolbarHtmlStr; 
                document.body.appendChild(document.getElementById("accessToolBar")); 
                document.body.removeChild(tempDiv);
                var helpContentCss = document.createElement("style");
                helpContentCss.id = "helpContentCss";
                helpContentCss.textContent = accessInitial.helpContentCss
                document.head.appendChild(helpContentCss);
                var tempStyle = document.createElement("style"); 
                tempStyle.id = "acToolbarCss"
                tempStyle.textContent = accessInitial.toolbarCssStr; 
                if (!accessInitial.checkUsePC()) { 
                    tempStyle.textContent += accessInitial.toolbarCssStr_m; 
                }
                document.head.appendChild(tempStyle);
            };
            accessInitial.checkUsePC = function () {
                var userAgentInfo = navigator.userAgent.toLowerCase(); 
                var agents = new Array("android", "iphone", "symbianOS", "windows phone", "ipad", "ipod"); 
                var flag = true; 
                for (var i = 0; i < agents.length; i++) { 
                    if (userAgentInfo.indexOf(agents[i]) > 0) { 
                        flag = false; 
                        break; 
                    } 
                }
                return flag;
            }; 
            accessInitial.openFunc_pc = function (readScreenStatus) {
                if (document.getElementById("gt_btn") == null) { 
                    return false; 
                }
                document.getElementById("gt_btn").onclick = function () {
                    if (typeof (jQuery) == 'function') { 
                        if (readScreenStatus == "true" || readScreenStatus == true) { 
                            jQuery("#accessToolBar_normal").hide(); 
                            jQuery("#toolbarPage2").show(); 
                            jQuery("#accessToolBar").show("fast", function () { 
                                jQuery("body").css("padding-top", "98px"); 
                            }); 
                        } else { 
                            jQuery("#accessToolBar_normal").show(); jQuery("#toolbarPage2").hide(); 
                            jQuery("#accessToolBar").show("fast", function () { 
                                jQuery("body").css("padding-top", "98px"); 
                            }); 
                        } 
                    } else { if (readScreenStatus == "true" || readScreenStatus == true) { 
                        document.getElementById("accessToolBar_normal").style.display = "none"; 
                        document.getElementById("toolbarPage2").style.display = "block"; 
                        document.body.style.paddingTop = "98px"; 
                        document.getElementById("accessToolBar").style.display = "block"; 
                    } else { 
                        document.getElementById("accessToolBar_normal").style.display = "block"; 
                        document.getElementById("toolbarPage2").style.display = "none"; 
                        document.body.style.paddingTop = "98px"; 
                        document.getElementById("accessToolBar").style.display = "block"; 
                    } 
                }
                    accessInitial.loadScript(null); 
                    accessInitial.setCookie("isAccessToolShow", "true", 10); 
                    document.getElementById("gt_btn").onclick = null; document.getElementById("gt_btn").onkeydown = null
                }
                document.getElementById("gt_btn").onkeydown = function (e) {
                    if (e.keyCode == 13) {
                        accessInitial.setCookie("isAccessToolShow", "true", 10); 
                        accessInitial.setCookie("readScreen", true, 10); 
                        accessInitial.setCookie("speakVolume", 0, 10); 
                        if (typeof (jQuery) == 'function') { 
                            jQuery("#accessToolBar_normal").hide(); 
                            jQuery("#toolbarPage2").show(); 
                            jQuery("#accessToolBar").show("fast", function () { 
                                jQuery("body").css("padding-top", "98px"); 
                            }) 
                        } else { 
                            document.getElementById("accessToolBar_normal").style.display = "none"; 
                            document.getElementById("toolbarPage2").style.display = "block"; 
                            document.body.style.paddingTop = "98px"; 
                            document.getElementById("accessToolBar").style.display = "block"; 
                        }
                        accessInitial.loadScript(function () { 
                            $AccessTool("#accessToolBar_normal").hide(); 
                            $AccessTool("#accessToolBar").show("fast", function () { 
                                $AccessTool("#toolbarPage2").show(); 
                                if (AccessibleTools.statusmagnifier == "on") { 
                                    AccessibleTools.magnifier.toolbarMagnifier(); 
                                } 
                            }); 
                            $AccessTool("body").css("padding-top", "98px"); 
                            AccessibleTools.rebuild(); 
                            AccessibleTools.isOpen = true; 
                        }); 
                        document.getElementById("gt_btn").onclick = null; 
                        document.getElementById("gt_btn").onkeydown = null
                        return false;
                    }
                }
            }; 
            accessInitial.openFunc_mobile = function () { 
                if (document.getElementById("gt_btn") != null) { 
                    document.getElementById("gt_btn").onclick = function () { 
                        accessInitial.loadScript(function () { 
                            $AccessTool("#accessToolBar_normal").show(); 
                            $AccessTool("#toolbarPage2").hide(); 
                            $AccessTool("#accessToolBar").show("fast"); }); 
                            accessInitial.setCookie("isAccessToolShow", "true", 10); 
                            document.getElementById("gt_btn").onclick = null; 
                            document.getElementById("gt_btn").onkeydown = null; 
                        } 
                    } 
                }; 
                accessInitial.init();
}