confirm("This game involves mature themes. Are you ready to play?");
var age = prompt("What's your age?");
if(age < 13)
{
    confirm("You may play, however we assume no responsibilty for the content of our game. I doubt you even have a Detective's license...");
}
else
{
    confirm("Oh my! An older Detective... Well, you're never to old to solve a case. Play on Detective!");
}
var yourName = prompt("What's your name, Detective?");
var answPhone = prompt("**RING RING! RING RING!** Answer phone? y or n");
if(answPhone === "y" || "Y"){
    takeCase = prompt("'Detective " + yourName + " speaking. How may I help you?'   // 'Hi, Detective " + yourName + ", my name is Melanie Goreham and I'm looking for a private detective. My father, Bob Goreham, has gone missing from his week-long cruise through the Artic, and I'd like you to find him. The police think he fell overboard and they've ruled out foul play, but they have very little evidence to go on, so I'm not willing to accept their conclusion. Will you help me find my father?' [y] or [n]");
    if (takeCase === 'y' || "Y"){
      questionFirst = prompt("After getting a little more information from Melanie, it's time to interview some suspects. But who should I start with first?   [J]oseph => Son of Bob. Stands to inherit a large sum of money. / [D]an and Shailene=> Husband and wife, and passengers on the cruise ship. Dan was overheard getting heated with Bob. / [V]erna => Passenger on the cruise ship. Widower three times over and was seen flirting with Bob. / [C]aptain of the cruise ship => Has information that has been withheld from the public.")
      if (questionFirst === 'j' || 'J'){
        questionSecond = prompt("Joseph => 'Yes, I owe a lot of people a lot of money, and yes, I stand to inherit a lot of money when my father passes, but my father could still show up any minute. Also, I have an alibi. I was at a business conference in Reno the week of my father's cruise. I am worried though. Dad was supposed to visit some friends of mine at the ship's stop on the island of Thule, but my friends said he never called. Also, I bought him a camera for his trip, but the police say they haven't found it.' // *We still need more evidence. Who will we question next? [D]an and Shailene=> Husband and wife, and passengers on the cruise ship. Dan was overheard getting heated with Bob. / [V]erna => Passenger on the cruise ship. Widower three times over and was seen flirting with Bob. / [C]aptain of the cruise ship => Has information that has been withheld from the public.")
      } else if (questionFirst === 'd' || 'D'){
        questionSecond = prompt("Dan => 'You bet I got heated with Bob. He was getting fresh with my wife. I'm getting heated now just thinking about it. Why? He's still missing? Probably cavorting with some poor lady on one of the islands and missed the boat. You should talk to Shailene's new pal Verna, I think her name is. Shailene met her on the cruise and we saw her and Bob getting chummy one night.' // Shailene => 'In what way did Bob get fresh? No you may not ask me that. I've already discussed it with the police. But the last time I remember seeing him was the morning we took the zodiacs out to the island of Thule to see the stomatolites. I brought a piece of one back with me to put on the table with the other artifacts in one of the cabins. That way even the guests that aren't so mobile could come and hold the rock in their hand like they were there.' // *Looks like we still need more evidence. Who will we question next? [J]oseph => Son of Bob. Stands to inherit a large sum of money. / [V]erna => Passenger on the cruise ship. Widower three times over and was seen flirting with Bob. / [C]aptain of the cruise ship => Has information that has been withheld from the public.")
      } else if (questionFirst === 'V' || 'v'){
        questionSecond = prompt ("Verna => 'Wow, you've done your research. Yes, Bob and I went to high school together. Small world... I don't know if he recognized me or not. We've aged quite a bit since high school, so I didn't made the connection until later in the trip, and by then, I didn't see him around. I never thought much of it. It's a big boat. And, no, I didn't graduate at the same school. I had gotten pregnant and had to leave town. Things were different back then. It was very shameful. Hmmm, I don't remember the last time I saw him on the boat. Well, I have to go. I need to take my camera in for repairs.' // *Let's get more statements. Who will we question next?   [J]oseph => Son of Bob. Stands to inherit a large sum of money. / [D]an and Shailene=> Husband and wife, and passengers on the cruise ship. Dan was overheard getting heated with Bob. / [V]erna => Passenger on the cruise ship. Widower three times over and was seen flirting with Bob. / [C]aptain of the cruise ship => Has information that has been withheld from the public.")
      }
    }
} else {
  confirm("I'll just sit quietly at my desk.")
}
