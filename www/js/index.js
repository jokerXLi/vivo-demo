
// 导航栏二级菜单部分开始
$('#header_search').on('mouseover','li',function(){
    var index =$(this).index();
     $('#header_script>li').eq(index).css('display','block');
    $('#header_search').css('background','#fff');
});
$('#header_script').on('mouseover','li',function(){
    var index =$(this).index();
     $('#header_script>li').eq(index).css('display','block');
    $('#header_search').css('background','#fff');
});
$(".sear").mouseout(function(){
    $('#header_script>li').css('display','none');
    $('#header_search').css('background','transparent');
});
// 导航栏二级菜单部分结束

// 轮播图部分开始

var index = -1;
//定时器，每一秒执行一次
var timer = setInterval(autoPlay,3000);
function autoPlay(){
  index++;
  $(".banneri > li").eq(index).fadeIn(500).siblings().fadeOut(500);
  $('.banner_xx>dd').eq(index).addClass("xxdd").siblings().removeAttr("class");
  $('.banner_xx>dd>span').eq(index).animate({width:"42px"},3000,function(){
    $(this).css({'width':'0','height':'6px'});
  });

  if(index == $(".banneri>li").length - 1){
    index = -1; 
  }
}
$('.banner_box').on('mouseover','li',function(){
    var _this =$(this).index();
     $('.banner_ul>li').eq(_this).addClass('dis').siblings().removeAttr('class');
$('.banner_box').on('mouseout',function(){
        $('.banner_ul>li').eq(_this).removeAttr('class');
        
});  
});
// 轮播图部分结束

//数据交换部分开始
// function parts(){
//   $('.parts').mouseover(function(){
//     var _this=this;
//     $("b").replaceWith("<ul><li></li><li></li><li></li></ul>");
//     $(_this).find("ul").first().addClass('partsul');
//     return _this;
//   });
// //   $(_this).mouseout(function(){
// //     $('.partsul').replaceWith('<b>2A大电流速充</b>');
// //   });

// }

//搜索部分 开始

$('.search_in').click(function(){
  $('#header_search').find('ul').css('display','none');
  $('.search_in_box').css('display','block');
  $('.search_in').css('display','none');
  $('.sear').css({'background':'#fff','height':'349px','position':'absolute','z-index':'100','width':'100%'});
});
$('.search_x').click(function(){
  $('#header_search').find('ul').css('display','block');
  $('.search_in').css('display','block');
  $('.search_in_box').css('display','none');
  $('.sear').css({'background':'transparent','height':'69px','position':'static','z-index':'1','width':'100%'});
})
//搜索部分 结束
