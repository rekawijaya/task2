
// ARROW FUNCTION
console.log("====CONVERSI FAHRENHEIT KE CELCIUS====")

  let convertCelsiusToFahrenheit = (celcius) => ((celcius * 9 / 5) + 32) 

    console.log(convertCelsiusToFahrenheit(20));

// CURRYING
    console.log('====CONVERSI FAHRENHEIT TO CELCIUS with CURRYING')
    const x = 1.8
    const y = 32
    function convertCelsiusToFahrenheitcurrying(celcius){
        return function(x) {
            return function(y){
                    return (celcius * x) + y;
                }
            }
        }
    alert("WELLCOME TO CELCIUS CONVERTER TO FAHRENHEIT")
    let celcius = prompt("CELCIUS (ºC)")
    alert("FAHRENHEIT = " + convertCelsiusToFahrenheitcurrying(celcius)(x)(y) + " ºF")