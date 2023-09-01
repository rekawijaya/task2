
// ARROW FUNCTION
console.log("====CONVERSI FAHRENHEIT KE CELCIUS====")

  let convertCelsiusToFahrenheit = (celcius) => ((celcius * 9 / 5) + 32) 

    console.log(convertCelsiusToFahrenheit(20));

// CURRYING
    console.log('====CONVERSI FAHRENHEIT TO CELCIUS with CURRYING')
    function convertCelsiusToFahrenheitcurrying(celcius){
        return function(x) {
            return function(y){
                return function(z){
                    return (celcius * x / y) + z;
                }
            }
        }
    }

    let celcius = prompt("celcius")
    alert(convertCelsiusToFahrenheitcurrying(celcius)(9)(5)(32))