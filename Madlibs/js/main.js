console.log("Hi test");

function write(){
    
    var wpnInput = document.getElementById('Weapon').value;
    var wpn = wpnInput.toUpperCase();
    var arena = document.getElementById('Arena Name').value;
    var team = document.getElementById('Teammate').value;
    var opp = document.getElementById('Enemys Name').value;
    var ele = document.getElementById('Element').value;
    var phy = document.getElementById('Physical Move').value;
    var smn = document.getElementById('Sick Move Name').value;
    var dog = document.getElementById('Dodge Move').value;
    var jut = document.getElementById('Jutsu Move').value;
    var nam = document.getElementById('Name').value;

    var stats = document.querySelector('input[name="stats"]:checked').value;

    var statsEnding;

    if(stats=="low"){
        statsEnding = "<p>As you go to throw your " +phy+ ", the enemy sidesteps you and before you can use " +dog+ ", he delivers a devasting blow nearly killing you. As a final attempt to save your life, you use your " +jut+ " and he just tanks it and then everything goes black before you can feel Sasuke disappointment.</p>"
    }else if(stats=="mid"){
        statsEnding = "<p>As the enemy goes to attack, you quickly use " +dog+ " and counter it with your devasting " +jut+ " and before he can realize what happened, you do your " +phy+ " winning this battle and winning the handsome and strong Sasuke’s approval.</p>"
    }else if(stats=="max"){
        statsEnding = "<p>Before you can use your " +dog+ ", " +jut+ " and " +phy+ ", you feel a tight pain in your chest realizing Sasuke has stabbed you through the heart because you’re to blame for putting all stats in the max range, as you slowly die, Sasuke whispers in your ear. I’m the only ninja with perfect stats.</p>"
    }
  
    document.getElementById('output').innerHTML = "<p>Welcome to THE SASUKE DOJO, I am your master THE ONE AND ONLY SASUKE UCHIHA. Yes, I know the GOATED survivor of the Uchiha massacre. Yes, that’s me. Anyways, it’s nice to meet you " +nam+". I mean I would say that if you were actually someone worthy of MY respect. Underling 6 is much better name; glad you WILL agree underling 6. Now before I teach you, show me one of your super lame moves. Oh, you call that " +smn+", it’s actually really pathetic but I guess that’s why you’re here. To learn from the best, me, Sasuke Uchiha. Well, if you’re gonna fight " +opp+ " over there. You’re gonna need a weapon, so you can use this THE UNBREAKING " +wpn+". Yes, I know… what a sick weapon, how did you get this. Well let me tell you, I fought 3000 ninjas at once and then killed all the tailed beasts besides the nine tails, stupid Naruto. I hate him I hate him I hate him I hate him… anyways… and then I infused their ESSENCE into it… you know… making it unbreakable. Too bad the beasts just respawned anyways, which is why they’re still around. So, before the fight, I want you to coat this weapon in your " +ele+", see if you are much more powerful than I thought, unlikely tho. How did you… I handed you THE UNBREAKING " +wpn+ " for seconds and it broke, wow… you’re that bad at handling a weapon that you broke the unbreakable one… wow… ok… anyways. You might need a teammate, hey you, get over here… this is " +team+ " or underling 3 as I call him. You guys be working together to take down your opponent… Damn, underling 3 is the weakest one here and doesn’t even want to work with you… that is to be expected to be honest. Well, we can’t keep him waiting in the " +arena+ ". Oh, this is gonna be a slaughter. </p>" +statsEnding; 

}
