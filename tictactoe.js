$(document).ready(function() {

    

    var turn = 1;
    var tds = document.getElementsByTagName('td');
    var xArray = []
    var oArray = []
    var oNumArray = []
    var xNumArray = []
    var xIdArray = []
    var oIdArray = []

    

    $('td').on('click', function() {

        if (turn % 2 == 0) {
            $(this).html('X');
            xArray.push(this);
            console.log(xArray);
        } else {
            $(this).html('O');
            oArray.push(this);
        }
        
        arrayLength = function() {
            if (xArray.length >= 3) {
                for (var i = 0; i < xArray.length; i++) {
                    xNumArray.push(xArray[i].id);
                    if (xNumArray.length >= 3) {
                        for (var i = 0; i < xNumArray.length; i++) {
                            var parseX = parseInt(xNumArray[i]);
                            xIdArray.push(parseX);
                            console.log(xIdArray);
                                if (xIdArray.length >= 3) {
                                    for (var i = 0; i < xIdArray.length; i++) {
                                        var xPotential = xIdArray[0] + xIdArray[1] + xIdArray[2]
                                    }
                                // var potential = xIdArray.reduce (function(a, b, c){return a+b+c;});
                                console.log("Potential is" + xPotential)
                                }
                                    if (xPotential === 15 && oPotential != 15) {
                                        alert("X won!")
                                    }

                            }
                        }
                    }
                }
            
            else if (oArray.length >=3) {
                for (var i = 0; i < oArray.length; i++) {
                    oNumArray.push(oArray[i].id);
                    if (oNumArray.length >= 3) {
                        for (var i = 0; i < oNumArray.length; i++) {
                            var parseO = parseInt(oNumArray[i]);
                            oIdArray.push(parseO);
                            console.log(oIdArray);
                                if (oIdArray.length >= 3) {
                                    for (var i = 0; i < oIdArray.length; i++) {
                                        var oPotential = oIdArray[0] + oIdArray[1] + oIdArray[2]
                                    }
                                }
                                    if (oPotential === 15 && xPotential != 15) {
                                        alert("O won!")
                                }

                        }
                    }
                }
            }
               
            
            else {
                return
            }
        }
        arrayLength()

        turn++;
    });

            //If id array greater than 3, iterate over array
            //Remove each id from the array once, saving each to a new variable
            //Check if any of the variables


  
});
   

    //Iterate over all tds
    //Push all Os to an xarray
    //Push all Xs to an oarray

    //Check if either array is <= 3

    //Check if any combination is equal to 15
    //If yes then alert winner " x or y "



    //Check if there are more than 3 divs that share the same inner html value

    //Check if any of those 3 combinations = 15
    //If any combinations have a common inner html, 
    	//Highlight the combination
    	//Alert that x or o is the winner
    	//Whipe Board

  



	



//If any 3 divs that add up to 15 have the same input(x or y) then declare a winner.

	//Pop up message
	//Reset the whole deal

