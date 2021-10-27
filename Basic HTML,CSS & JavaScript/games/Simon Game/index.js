var colors=["red", "blue", "green", "yellow"];
var gamepattern = []
var userpattern = []
var first= false
var level = 0

$(".buttn").click(function () {
    if(!first)
    {
        first= true
        $("#level-title").text("Level 1" )
        $(".buttn").hide()
        sequence()
    }
})

function checkanswer(l)
{
    if(gamepattern[l]===userpattern[l])
    {
        if(gamepattern.length===userpattern.length)
        {
            setTimeout(function(){sequence();},1000)
        }
    }else
    {
        var sound2= new Audio("sounds/wrong.mp3")
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over")
        setTimeout(function(){
            sound2.play()
            $("body").removeClass("game-over");
        },500)
        startover()
    }
}

$(".btn").click(function(){
    var usercolor= $(this).attr("id");
    playsound(usercolor);
    $("#"+usercolor).fadeIn(100).fadeOut(100).fadeIn(100);
    userpattern.push(usercolor);
    checkanswer(userpattern.length-1)
})

function playsound(n){
    var sound1= new Audio("sounds/" + n + ".mp3");
sound1.play();
}


function sequence()
{
    userpattern=[];
    level++;
    $("#level-title").text("Level "+ level )
    var rnumber=Math.floor((Math.random())*4);
    var rcolor=colors[rnumber]
    $("#"+rcolor).fadeIn(100).fadeOut(100).fadeIn(100)
    playsound(rcolor)
    gamepattern.push(rcolor)
}
function startover()
{
    $(".buttn").show()
    gamepattern=[]
    first= false
    level=0
}

