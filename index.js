let convertBtn = document.getElementById("btn-convert")

const metersToFeets = 3.28084
const feetsToMeters = 0.3048
const litersToGallons = 0.2641722
const gallonsToLiters = 3.78541178 
const kilosToPounds = 2.20462262
const poundsToKilos = 0.45359237

convertBtn.addEventListener('click', function () {
    let inputMeasure = document.getElementById("measure").value
    
    document.getElementById("display-length").innerText = `
     ${inputMeasure} meters = ${(metersToFeets * inputMeasure).toFixed(3)} feet | ${inputMeasure} feets = ${(feetsToMeters * inputMeasure).toFixed(3)} meters
    `
    document.getElementById("volume-length").innerText = `
    ${inputMeasure} meters = ${(litersToGallons * inputMeasure).toFixed(3)} feet | ${inputMeasure} feets = ${(gallonsToLiters * inputMeasure).toFixed(3)} meters
   `
    document.getElementById("mass-length").innerText = `
    ${inputMeasure} meters = ${(kilosToPounds * inputMeasure).toFixed(3)} feet | ${inputMeasure} feets = ${(poundsToKilos * inputMeasure).toFixed(3)} meters
   `
})