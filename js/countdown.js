/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var x;

 function counter(temps){
        
var countDownDate = new Date( temps + (3600 * 1000 * 24)).getTime();

// Update the count down every 1 second
 x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now ;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
 // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//  + minutes + "m " + seconds + "s ";
    document.getElementById("hr").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
    
// set notification at 1 second left

    if(distance ===1000){
        alert('Le scrutin se termine dans exactement 1e minutes');
    }
    
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Heure de déroulement du scrutin expiré";
    document.getElementById("msg").innerHTML = "Delais ecoulé";
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "01";
    $('#msg').addClass("text-danger");
    $('#demo').addClass("text-danger");
      var fromNow = new Date(Date.now());
                var dateformat = fromNow.getFullYear()+'-'+(fromNow.getMonth()+1)+'-'+fromNow.getDate();
     $.ajax({
                    url :'../../CountDownServlet',
                    method: 'POST',
                data : {
                    timing : dateformat+' '+23+':'+59+':'+60
                },
                success : function(responseText){
                    alert("Les Jouthes sont fermés : "+responseText);
                    window.location.reload();
                }
            });
  }
 
}, 1000);
    }
    
    function stopWatch(){
        var hr, min, sec;
        var temphr, tempmin, tempsec;
        hr = document.getElementById("hr").innerHTML;
        min = document.getElementById("min").innerHTML;
        sec =  document.getElementById("sec").innerHTML;
        temphr = hr;
        tempmin = min;
        tempsec = sec;
     document.getElementById("hr").innerHTML = temphr;
     document.getElementById("min").innerHTML = tempmin;
     document.getElementById("sec").innerHTML = tempsec;
       clearInterval(x);
      
    }
    
     $("#stop").click(function(){
           var heure =  document.getElementById("hr").innerHTML;
           var minute=  document.getElementById("min").innerHTML;
           var second = document.getElementById("sec").innerHTML;
               var fromNow = new Date(Date.now());
                var dateformat = fromNow.getFullYear()+'-'+(fromNow.getMonth()+1)+'-'+fromNow.getDate();
                $.ajax({
                    url :'../../CountDownServlet',
                    method: 'POST',
                data : {
                    timing : dateformat+' '+heure+':'+minute+':'+second
                },
                success : function(responseText){
                    alert("timer has stopped at : "+responseText);
                    stopWatch();
                }
            }); 
            });