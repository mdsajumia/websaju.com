
   function validation(){
    UserName = document.getElementById('subscribe-name');
if (UserName.value == '' ){
    document.getElementById('name-eror').innerHTML =' Pleace Enter Your Email';
    return false;
}
}

$('.header-content  i').on('click',function(){
    $('.menu').slideToggle();
});



