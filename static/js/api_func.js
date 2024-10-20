/**
 *@param(_nPageCount):总页数
 *@param(_nCurrIndex):当前页,0是第一页
 *@param(_sPageName):页面文件名前缀
 *@param(_sPageExt):页面文件名后缀
 *@param(_pageNum):显示的最大页数
 *@param(_controlId):显示导航的DOM节点
 */
function pageControl(_nPageCount, _nCurrIndex, _sPageName, _sPageExt, _pageNum, _controlId) {
    var pageNavHTML = '',
        pagesContainer = document.getElementById(_controlId),
        midIndex = 1,
        nCurrIndex = 1,
        startPageIndex = 1,
        endPageIndex = 1,
        formatNUM = function (_v) {
            if (_v < 10) {
                return "0" + _v;
            }
            else {
                return _v;
            }
        };

    if (_nPageCount == null || _nPageCount <= 1) {
        return;
    }

    if (_pageNum > _nPageCount) {
        _pageNum = _nPageCount;
    }

    if (_pageNum < 1) {
        _pageNum = 1;
    }

    midIndex = Math.ceil(_pageNum / 2.0);
    nCurrIndex = _nCurrIndex || 1;
    startPageIndex = (_nPageCount - (_nCurrIndex - 1 - midIndex) > _pageNum) ? ((_nCurrIndex - midIndex + 1 < 1) ? 1 : ((_nCurrIndex - midIndex + 1 >= _nPageCount - _pageNum) ? _nPageCount - _pageNum + 1 : _nCurrIndex - midIndex + 1)) : (_nPageCount - _pageNum + 1);
    endPageIndex = startPageIndex + _pageNum;

    if (nCurrIndex == 1) {
        pageNavHTML += '<a href=\"javascript:void(0);\" target=\"_self\" aria-label=\"Previous\">&laquo;</a>';
    }
    else {
        if (nCurrIndex == 1) {

            pageNavHTML += '<a href=\"' + _sPageName + '.' + _sPageExt + '\" target=\"_self\" aria-label=\"Previous\">&laquo;</a>';
        }
        else {
            pageNavHTML += '<a href=\"' + _sPageName + '.' + _sPageExt + '?pageIndex=' + (nCurrIndex - 1) + '\" target=\"_self\" aria-label=\"Previous\" >&laquo;</a>';
        }
    }

    for (var i = startPageIndex; i < endPageIndex; i++) {
        if (nCurrIndex == i) {
            if (_pageNum > 1) {
                pageNavHTML += '<span class="here">' + formatNUM(i) + '</span>';
            }
        }
        else {
            if (i == 1) {
                pageNavHTML += '<a href=\"' + _sPageName + '.' + _sPageExt + '\" target=\"_self\" >' + formatNUM(i) + '</a>';
            }
            else {
                pageNavHTML += '<a href=\"' + _sPageName + '.' + _sPageExt + '?pageIndex=' + i + '\" target=\"_self\" >' + formatNUM(i) + '</a>';
            }

        }
    }
//20230914修改覃：_nPageCount-1改成_nPageCount
    if (nCurrIndex < _nPageCount) {
        pageNavHTML += '<a href=\"' + _sPageName + '.' + _sPageExt + '?pageIndex=' + (parseInt(nCurrIndex) + 1) + '\" target=\"_self\" aria-label=\"Next\">&raquo;</a>';
    }
    else {
        pageNavHTML += '<a href=\"javascript:void(0);\" target=\"_self\" aria-label=\"Next\">&raquo;</a>';
    }

    pagesContainer.innerHTML = pageNavHTML;
}


function getPar(par) {
    var local_url = document.location.href;
    var get = local_url.indexOf(par + "=");
    if (get == -1) {
        return false;
    }
    var get_par = local_url.slice(par.length + get + 1);
    var nextPar = get_par.indexOf("&");
    if (nextPar != -1) {
        get_par = get_par.slice(0, nextPar);
    }
    if (get_par == null) {
        get_par = 377;
    }
    return get_par;
}

/**
 *  getPar : 获取url 上指定参数
 *  @name : 需要获取参数
 *
 * */
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

/**
* timestampToTime：时间戳转时间
* @timestamp：时间戳（毫秒）
* @alltitme：返回时间类型 1 精确到分 2 Y+M+D 不传参：M+D
* */
function timestampToTime(timestamp, alltitme) {

    var date = new Date(parseInt(timestamp));//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());

    if (alltitme == 1) {
        return Y + M + D + h + m;
    } else if (alltitme == 2) {
        return Y + M + D;
    } else {
        return M + D;
    }
}

/**
 * doSearch：搜索
 * @searchWord:关键字
 * @siteId：站点id
* */
function doSearch(btn) {
    var url = window.location.href;
    var searchWord = $(btn).siblings('input[name=searchWord]').val();
    var siteId = parseInt($(btn).siblings('input[name=siteId]').val());
    //console.log(parseInt(siteId));
    var typeText = $(btn).siblings('input[name=typeText]').val();



    /*
     $url = '/site/gx/#/?searchWord=' + encodeURI(searchWord)+'&siteId='+siteId;
    typeText ? $url+='&typeText=' + typeText : $url;
    window.open($url, '_blank');
    */

    searchCommonFunc(siteId, typeText, searchWord);

}
function doSearchGxzf(btn) {
    var url = window.location.href;
    var searchWord = $(btn).siblings('input[name=searchWord]').val();
    var siteId = $(btn).siblings('input[name=siteId]').val();
    var typeText = $(btn).siblings('input[name=typeText]').val();


    /*
    $url = '/site/gxzf/#/?searchWord=' + encodeURI(searchWord);
    typeText ? $url+='&typeText=' + typeText : $url;
    window.open($url, '_blank');
    */

    searchCommonFunc(siteId, typeText, searchWord);
}

$(function () {
    $(document).keyup(function (e) {
        if (e.keyCode == 13) {
            var url = '';
            var $curInput = $('input:focus');
            if ($curInput.length == 0) {
                return false;
            }
            var searchWord = $curInput.val();
            var siteId = parseInt($curInput.siblings('input[name=siteId]').val());
            var typeText = $curInput.siblings('input[name=typeText]').val();

            /*
            (siteId==14)?url='/site/gxzf/#/?searchWord='+ encodeURI(searchWord):url='/site/gx/#/?searchWord=' + encodeURI(searchWord)+'&siteId='+siteId;
            (typeText!=undefined) ? url+='&typeText='+ typeText : url;
            //console.log(url);
            window.open(url, '_blank');
            */

            searchCommonFunc(siteId, typeText, searchWord);
            e.preventDefault();
            return false;
        }
    });
    var domain = document.domain;
    if (domain == 'ht.dsjfzj.gxzf.gov.cn') {
        platPreview();
    }
    $('.article-share-more').hover(function () {
        $('.article-share-group-hover').show();
    }, function () {
        $('.article-share-group-hover').hide();
    });
});

//预览地址转换
function platPreview() {
    var datapath = $('meta[name=datapath]').attr('content');
    if (datapath) {
        var re = /^((http:\/\/)|(https:\/\/))?([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}(\/)/g;
        re = new RegExp(re);

        var linkArr = $('link');
        linkArr.each(function (e) {
            var href = $(this).attr('href');

            if (href) {
                if (Boolean(re.test(href))) {
                    var basehref = href.replace(re, '/preview/' + datapath + '/');
                    $(this).attr('href', basehref);
                }
            }

            var baseurl = href.replace(re, '/preview/' + datapath + '/');
            $(this).attr('href', baseurl);
        });

        var scriptArr = $('script[src]');
        scriptArr.each(function (e) {
            var src = $(this).attr('src');

            if (src) {
                if (Boolean(re.test(src))) {
                    var basesrc = src.replace(re, '/preview/' + datapath + '/');
                    // $(this).attr('src',basesrc);
                    $.getScript(basesrc);
                }
            }
        });
    }
}
function shareTo(stype) {
    var shareLink = document.location.href;
    var shareTitle = document.title;
    var lk = '';
    //qq空间
    if (stype == 'qzone') {
        window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + shareLink + '?sharesource=qzone&title=' + shareTitle + '&summary=' + shareTitle + '&desc=' + shareTitle);
    }
    //新浪微博
    if (stype == 'sina') {
        window.open('http://service.weibo.com/share/share.php?url=' + shareLink + '?sharesource=weibo&title=' + shareTitle + '&pic=' + lk + '&appkey=2992312571');
    }
    //qq好友
    if (stype == 'qq') {
        window.open('http://connect.qq.com/widget/shareqq/index.html?url=' + shareLink + '?sharesource=qzone&title=' + shareTitle);
    }
    if (stype == 'wechat') {
        $('#shareCode').html('');
        $('#shareCodeIndex').html('');
        $('#shareCode,#shareCodeIndex').qrcode(
            {
                width: 100,
                height: 100,
                text: shareLink
            }
        );
        $('#shareCode').show();
    }
    if (stype == 'toutiao') {
        $('#shareCodeToutiao').html('');
        $('#shareCodeToutiao').qrcode(
            {
                width: 100,
                height: 100,
                text: shareLink
            }
        );
        $('#shareCodeToutiao').show();
    }
    if (stype == 'wechatIndex') {
        $('#shareCodeIndex').html('');
        $('#shareCodeIndex').qrcode(
            {
                width: 100,
                height: 100,
                text: shareLink
            }
        );
        $('#shareCodeIndex').show();
    }
    if (stype == 'douban') {

    }
    $('.article-share-group').mouseover(function () {
        $('#shareCode').hide();
        $('#shareCodeIndex').hide();
        $('#shareCodeToutiao').hide();
    });
    $('.article-share-wechat').mouseover(function () {
        $('#shareCodeIndex').hide();
    });
    $('.article-share-toutiao').mouseover(function () {
        $('#shareCodeToutiao').hide();
    });


}


function searchCommonFunc(siteId, typeText, searchWord) {
    //获取site.json中的SITEID
    var searchSite = {};
    $.ajax({
        type: 'get',
        url: '/irs-search-json/site.json',
        dataType: 'json',
        success: function (dataSearch) {
            var searchArrData = dataSearch.siteArr;
            jump:
            for (var i = 0; i < searchArrData.length; i++) {
                if (searchArrData[i][0].arr) {
                    for (var j = 0; j < searchArrData[i].length; j++) {
                        for (var t = 0; t < searchArrData[i][j].arr.length; t++) {
                            if (parseInt(searchArrData[i][j].arr[t].SITEID) == SITEID) {
                                searchSite = searchArrData[i][j].arr[t];
                                break jump;
                            }
                        }
                    }
                } else {
                    for (var j = 0; j < searchArrData[i].length; j++) {
                        if (parseInt(searchArrData[i][j].SITEID) == SITEID) {
                            searchSite = searchArrData[i][j];
                            break jump;
                        }
                    }
                }
            }
            $url = '/irs-common-search/search?code=' + searchSite.code + '&configCode=&sign=9cc99c9d-94aa-44b4-aa79-41227a5385d7&searchWord=' + encodeURIComponent(searchWord) + '&orderBy=related&searchBy=all&appendixType=&granularity=ALL&isSearchForced=0&pageNo=1&pageSize=10&isAdvancedSearch&isDefaultAdvanced&advancedFilters'
            window.location.href = $url;
        }
    })
}
