    $(function(){
        let link = $('.nav__item a')
        link.mouseover(function(){
            $(this).addClass('border__bottom');
            });
            link.mouseout(function(){
                $(this).removeClass('border__bottom');
            })
        });

$(':input').focus(function(){$(this).addClass('input__class');}).blur(function(){$(this).removeClass('input__class');});
    

    




function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }