var varTimer;

let relYear = 2021;
let relMonth = 6;
let relDate = 6;
let relHour = 18;
let relMinute = 00;
let relSecond = 0;

function startClock()
{
		varTimer = setInterval(onTimerUpdate, 1000);
}

function onTimerUpdate()
{
		let announce = '';
		let nTimeStamp = new Date();
		resYear = (relYear - nTimeStamp.getFullYear())
		resMonth = (relMonth - nTimeStamp.getMonth() - 1)
		resDate = (relDate - nTimeStamp.getDate())
		resHour = (relHour - nTimeStamp.getHours())
		resMinute = (nTimeStamp.getMinutes() - relMinute - 60)
		resSecond = (nTimeStamp.getSeconds() - relSecond - 60)
		if(resMinute < 0) { resMinute *= -1; }
		if(resSecond < 0) { resSecond *= -1; }
		if(resHour > -1)
		{
			if(resYear > 1)
			{
				announce = resYear + " Years left";
			}
			else if(resYear == 1)
			{
				announce = resYear + " Year remaining";
			}
			else if(resYear == 0)
			{
				if(resMonth > 1)
				{
					announce = resMonth + " Months remaining";
				}
				else if(resMonth == 1)
				{
					announce = resMonth + " Month remaining " + nTimeStamp.getHours();
				}
				else if(resMonth == 0)
				{
					if(resDate > 1)
					{
						announce = resDate + " Days remaining";
					}
					else if(resDate == 1)
					{
						announce = resDate + " Day remaining";
					}
					else if(resDate == 0)
					{
						announce = resHour + "h " + resMinute + "m " + resSecond + "s remaining";
					}
				}
			}
			document.getElementById("launcht").innerHTML = announce;
		}
		else
		{
			document.getElementById("launcht").innerHTML = "West-side RPG is now live!";
			document.getElementById("launcht").style.color = "red";
		}
}

//
// if(resYear > 0)
// {
	// if(resYear > 1)
	// {
	// 	announce =  resYear + " Years remaining !";
	// }
	// else if(resYear == 1)
	// {
	// 	if(resMonth != 0)
	// 	{
	// 		if(resMonth > 1)
	// 		{
	// 			announce =  resYear + " Year " + resMonth + "  and Months remaining !";
	// 	  }
	// 		else
	// 			{
	// 				announce =  resYear + " Year " + resMonth + "  and Month remaining !";
	// 			}
	// 	}
	// 	else
	// 	{
	// 		announce =  resYear + " Year remaining !";
	// 	}
	// }
	// else if(resYear == 0)
	// {
	// 	if(resMonth > 1)
	// 	{
	// 		announce = resMonth + " Months remaining !";
	// 	}
	// 	else if(resMonth == 1)
	// 	{
	// 		if(resDate != 0)
	// 		{
	// 			if(resDate > 1)
	// 			{
	// 				announce = resMonth + " Month " + resDate + " Days remaining !";
	// 			}
	// 			else
	// 			{
	// 					annourelSecondnce = resMonth + " Month " + resDate + " Day remaining !";
	// 			}
	// 		}
	// 		else
	// 		{
	// 				announce = resMonth + " Month remaining !";
	// 		}
	//  }
	//  else if(resMonth == 0)
	//  {
	// 	 if(resDate > 1)
	// 	 {
	// 			announce = resDate + " Days remaining !";
	// 		}
	// 		else if(resDate == 1)
	// 		{
	// 			if(resHour != 0)
	// 			{
	// 				if(resHour > 1)
	// 				{
	// 					announce = resDate + " Day " + resHour + " Hours remaining !";
	// 				}
	// 				else
	// 				{
	// 					announce = resDate + " Day " + resHour + " Hour remaining !";
	// 				}
	// 			}
	// 			else
	// 			{
	// 				announce = resDate + " Day remaining !";
	// 			}
	// 		}
	// 		else
	// 		{
	// 			announce = resHour + "h " + (60 - resMinute) + "m " + (60 - resSecond) + "s remaining !";
	// 		}
	//  }
//}
