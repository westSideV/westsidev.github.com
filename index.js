function redirectweb()
{
  window.location.href = "menu.html?prev=Home";
}

function redirectdisc()
{
  window.location.href = "";
}


function inHovW()
{
  $('#mainwebintro').css("visibility", "visible");
}
function outHovW()
{
  $('#mainwebintro').css("visibility", "hidden");
}


function inHovD()
{
  $('#discordintro').css("visibility", "visible");
}
function outHovD()
{
  $('#discordintro').css("visibility", "hidden");
}

// $( "li" ).hover(
//   function() {
//     $( this ).append( $( "<span> ***</span>" ) );
//   }, function() {
//     $( this ).find( "span" ).last().remove();
//   }
// );
