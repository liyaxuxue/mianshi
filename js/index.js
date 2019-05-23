

$('.banner  div').click(function(){
  // alert('xixix')
  $(this).addClass('bg').siblings().removeClass('bg');

});

$('.adv').click(function(){
  var v = $('a').children().eq(0).html();
  $('.gj').html(v)

  var val = $('a').children().eq(1).html();
  $('.x').html(val)


})

$('.cus').click(function(){
  var v = $('.dz').html();
  // console.log(v)
  $('.gj').html(v)

  var val = $('.xx').html();
  $('.x').html(val);

  $('.content ul li div,h4').removeClass('hs').css('color','')
})

$('.h').click(function(){
  $('.bt').css('display','block');
  $('.mask').css('display','block');
})
$('.off').click(function(){
  $('.bt').css('display','');
  $('.mask').css('display','');
})
