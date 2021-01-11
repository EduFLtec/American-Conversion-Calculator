// Accordion section 1a: Miles/mph to Kilometers/kph Speed/Distance converter
document.getElementById('mph').addEventListener('input', mphToKph);
document.getElementById('kph').addEventListener('input', kphToMph);

function mphToKph() {
  let mphRound = mph.value * 1.609344;
  document.getElementById('kph').value = mphRound.toFixed(1);
}

function kphToMph() {
  let kphRound = kph.value / 1.609344;
  document.getElementById('mph').value = kphRound.toFixed(1);
}

//Section 1a: Clear Button
document.getElementById('speed-clear-btn').addEventListener('click', () =>{
  document.getElementById('mph').value = '';
  document.getElementById('kph').value = '';
});



// Accordion section 2: Fahrenheit to Celsius temp converter
document.getElementById('fahrenheit').addEventListener('input', fToC);
document.getElementById('celsius').addEventListener('input', cToF);

function fToC() {
  let fRound = (fahrenheit.value - 32) / 1.8;
  document.getElementById('celsius').value = fRound.toFixed(1);
}

function cToF() {
  let cRound = (celsius.value * 1.8) + 32;
  document.getElementById('fahrenheit').value = cRound.toFixed(1);
}

//Section 2: Clear Button
document.getElementById('temp-clear-btn').addEventListener('click', () =>{
  document.getElementById('fahrenheit').value = '';
  document.getElementById('celsius').value = '';
});
