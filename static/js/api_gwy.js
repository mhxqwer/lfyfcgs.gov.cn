$(function () {
  var tempData = [];
  var left = $("#gwy_left li");
  var right = $("#gwy_right li");
  var gwy = $('#gwy li');
  left.each(function (index, item) {
    var tmp = new Object();
    tmp.title = $(item).find("p").text();
    tmp.link = $(item).find("a").attr("href");
    tmp.pubDate = $(item).find("span").text();
    
    tempData.push(tmp);
  });
  right.each(function (index, item) {
    var tmp = new Object();
    tmp.title = $(item).find("p").text();
    tmp.link = $(item).find("a").attr("href");
    tmp.pubDate = $(item).find("span").text();
    tempData.push(tmp);
  });

  gwy.each(function (index,item) {
    var tmp  = new Object;
    tmp.title = item.children[1].innerText;
    tmp.link = item.children[1].href;
    tmp.pubDate = item.children[0].innerText;
    tempData.push(tmp);
});

  //读取国务院信息
  $.ajax({
    url: "http://www.gov.cn/pushinfo/v150203/pushinfo.jsonp",
    dataType: "jsonp",
    jsonp: "pushInfoJsonpCallBack",
    jsonpCallback: "pushInfoJsonpCallBack",
    success: function (data) {
      data = tempData.concat(data);
     
      $("#gwy_left,#gwy_right, #gwy").html("");
      for (var i = 0; i < 3; i++) {
        var dolink =
          "http://www.gxzf.gov.cn/fzlm/go/go.shtml?gourl=" +
          data[i].link +
          "&siteid=3";
        data[i].title.length > 23
          ? (title = data[i].title.substring(0, 23) + "...")
          : (title = data[i].title);
        $("#gwy_left").append(
          "<li><a href='" +
            dolink +
            "' target='_blank'> <p class='fn-left'>·&nbsp;" +
            title +
            "</p> <span class='fn-left'>" +
            data[i].pubDate.substring(5, 10) +
            "</span></a></li>"
        );
      }
      for (var i = 3; i < 6; i++) {
        var dolink =
          "http://www.gxzf.gov.cn/fzlm/go/go.shtml?gourl=" +
          data[i].link +
          "&siteid=3";
        data[i].title.length > 23
          ? (title = data[i].title.substring(0, 23) + "...")
          : (title = data[i].title);
        $("#gwy_right").append(
          "<li><a href='" +
            dolink +
            "' target='_blank'> <p class='fn-left'>·&nbsp;" +
            title +
            "</p> <span class='fn-left'>" +
            data[i].pubDate.substring(5, 10) +
            "</span></a></li>"
        );
      }
      for(var j=0;j<8;j++){
          var dolink = 'http://www.gxzf.gov.cn/fzlm/go/go.shtml?gourl='+data[j].link+'&siteid=3';
          data[j].title.length>23?title = data[j].title.substring(0,23)+"...":title = data[j].title;
          $("#gwy").append("<li><span>"+data[j].pubDate.substring(5,10)+"</span>"+"<a href='"+dolink+ "' target='_blank'>"+title+"</a></li>");
      }
    },
    error: function () {},
  });
});
