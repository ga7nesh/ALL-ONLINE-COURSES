//X is what % of Y?
//What is Y% of X?
//X is Y% of what?
//What % of X is Y?
//X% of what is Y?
//Y% of X is what?


var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');

var dropDown = document.getElementById('dropdown');

// Switch Case to handle which calculator selection is made


form.addEventListener('submit', function(event) {
    
    var dropDown = document.getElementById('dropdown');
    var optionSelected = dropDown[dropDown.selectedIndex].value;
    

    
    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields");
    } 
    else {
        
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);

        if(optionSelected === "0"){

                var result = x / y;
                var percent = result * 100;

                resultField.innerText = "Answer: " + percent + "%";
                event.preventDefault();

        }
        else if(optionSelected === "1"){
            
                var result = x*(.01*y);

                resultField.innerText = "Answer: " + result;
                event.preventDefault();
            
        }
        else if(optionSelected === "2"){
            
                var result = x/(.01 * y);

                resultField.innerText = "Answer: " + result;
                event.preventDefault();
                
        }
        else if(optionSelected === "3"){
                var result = y/(x) * .01;

                resultField.innerText = "Answer: " + result;
                event.preventDefault(); 
        }
        else if(optionSelected === "4"){
                 var result = y/(.01 * x);

                resultField.innerText = "Answer: " + result;
                event.preventDefault();
        }
        else if(optionSelected === "5"){
                 var result = x * (.01 * y);

                resultField.innerText = "Answer: " + result;
                event.preventDefault();
        }
        else{
            alert("Didn't work");   
        }
               
    }

});