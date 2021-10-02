/*
    Contributed by-
        Mohammad Haziq Khan
        GitHub: haaaziq
*/

//Toggling Input Field
$("div.innerContainer i.add1").on("click", function(){
    $("div.innerContainer input.input1").slideToggle(400, function(){
        $(this).toggleClass("inputField");
    });
});

$("div.innerContainer i.add2").on("click", function(){
    $("div.innerContainer input.input2").slideToggle(400, function(){
        $(this).toggleClass("inputField");
    });
});

$("div.innerContainer i.add3").on("click", function(){
    $("div.innerContainer input.input3").slideToggle(400, function(){
        $(this).toggleClass("inputField");
    });
});

//Crossing List Items
$("ul").on("click", "li", function(){
    $(this).toggleClass("crossed");
});

//Hovering over li and displaying of bin
$(".innerContainer ul").on("mouseover", "li", function(){
    $(this).children("span.del").fadeIn(700, function(){
        $(this).removeClass("bin");
    });
});
$(".innerContainer ul").on("mouseout", "li", function(){
    $(this).children("span.del").fadeOut(200, function(){
        $(this).addClass("bin");
    });
});

//Click on bin icon to delete todo
$(".innerContainer ul").on("click", "li span.del", function(event){
    $(this).parent().fadeOut(700, function(){
        $(this).remove();
    });
    //stop bubbling up events
    event.stopPropagation();
});

// move to Completed section on click on check-mark icon
$(".innerContainer ul").on("click", "li i.fa-check", function(event){
    $(this).parent().fadeOut(700, function(){
        var newTodo = $(this).parent().text();
        $("ul.done").append(
            "<li><span class='bin del'><i class='fas fa-trash'></i></span> "+ newTodo + " </li>"
        );
        $(this).parent().remove();
    });
    //stop bubbling up events
    event.stopPropagation();
});

// move to inProgress section on click on right-arrow icon
$(".innerContainer ul").on("click", "li i.fa-arrow-circle-right", function(event){
    $(this).parent().fadeOut(700, function(){
        var newTodo = $(this).parent().text();
        $("ul.inProgress").append(
            "<li><span class='bin del'><i class='fas fa-trash'></i></span> "+ newTodo + " <span class='rightIcons'><i class='fas fa-check'></i></span></li>"
        );
        $(this).parent().remove();
    });
    //stop bubbling up events
    event.stopPropagation();
});

//Adding new todos from input field
$("input[type='text']").keypress(function(event){
    //checking for Enter Key (char code = 13)
    if(event.which === 13){
        var newTodo = $(this).val();
        $("ul.new1").append(
            "<li><span class='bin del'><i class='fas fa-trash'></i></span> "+ newTodo + " <span class='rightIcons'><i class='fas fa-check'></i> <i class='fas fa-arrow-circle-right'></i></span></li>"
        );
    }
});