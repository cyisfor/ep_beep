function doBeep(info) {
    console.log('DERP: '+JSON.stringify(info));
}

exports.doBeep = doBeep;

exports.documentReady = function (thingy) {
    console.log("BEEP READY");
}
