function printMessage(message) {
    console.log(`Hello ${message}!`)
}
function printCar(message) {
    console.log(`car ${message}!`)
}
function paintMe(message) {
    console.log(`painting for color ${message}!`)
}

module.exports = {
    printMessage: printMessage,
    printCar: printCar,
    paintMe: paintMe,
};
