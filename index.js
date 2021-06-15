function myFunction(){
      var firstName=document.getElementById("firstName").value;
      var secondName=document.getElementById("secondName").value;
      var ammount=document.getElementById("ammount").value;
      
      var str = "";
      if(ammount < 100)
        str = "Thank you "+firstName+" "+ secondName +" for donating " + ammount;
      else
        str = "Thank you "+firstName+" "+ secondName +" for donating " + ammount + ". You are very generous.";
        alert(str);
    };
      
    function yourFunction(){
      var firstName=document.getElementById("firstName").value;
      var secondName=document.getElementById("secondName").value;
      alert("Thanks "+firstName+" "+secondName+" for showing your interest we will contact you soon!");
    }
    
 function adFunction(){
        alert("Thanks for adopting!");
      }