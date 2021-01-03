// Accordion section 1: mph to kph converter
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

//Section 1: Clear Button
document.getElementById('speed-clear-btn').addEventListener('click', () =>{
  document.getElementById('mph').value = '';
  document.getElementById('kph').value = '';
});