function program() {
$.getJSON("http://query.yahooapis.com/v1/public/yql?"+
                "q=select%20*%20from%20html%20where%20url%3D%22"+
                encodeURIComponent("http://nocinformatyka.pl/program.html")+
                "%22&format=xml'&callback=?",
        function(data){
          if(data.results[0]){
            $('#content').html($(data.results[0]).find('#main table').html());
          } else {
            var errormsg = '<p>Error: could not load the page.</p>';
            $('#content').html(errormsg);
          }
        }
      );
      }/*
$('#content').load("/res/html/program.html")
}
   /*     $.ajax({
  type:"POST",
    crossOrigin: true,
            url: 'http://nocinformatyka.pl/program.html',
            dataType: 'json',
            success: function(data) {
                $("#content").html(JSON.stringify(data));
                alert(JSON.stringify(data));
            },
             error: function() {
                $("#content").append("error");
                alert('error');
            }
        });
  }

/*
var request = new XMLHttpRequest(); 
request.open("GET", 'http://nocinformatyka.pl/program.html');
request.onreadystatechange = function() { 
if (request.readyState === 4 && request.status === 200) {

//response handling code

                $("#content").html(data);

}
};
request.send(null);
}
/*
        $.ajax({
        
            url : "http://nocinformatyka.pl/program.html",
            dataType: "text",
            success : function (data) {
        
                $("#content").html(data);

            }
            
            });
	      }
      /*     
$.get('../html/program.html', function(program) {
   alert("ki");
   alert(program);
   $("#content").html(program);
   alert(program);
}, 'text')};
*/ 