/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
var bwipjs = require('bwip-js');
exports.helloWorld = function helloWorld(req, res) {

  bwipjs.toBuffer({
        bcid:        'code128',       // Barcode type
        text:        req.query.text ,    // Text to encode
        height:      25,              // Bar height, in millimeters
        includetext: true,            // Show human-readable text
        textxalign:  'center',        // Always good to set this
        textfont:    'Inconsolata',   // Use your custom font
        textsize:    13,               // Font size, in points
	    textyoffset: 3,
        paddingwidth: 20,
        paddingheight: 20,
        // guardwhitespace: false,
        backgroundcolor: "ffffff"
    }, function (err, png) {
        if (err) {
            // Decide how to handle the error
            // `err` may be a string or Error object
        } else {
            // `png` is a Buffer
            // png.length           : PNG file length
            // png.readUInt32BE(16) : PNG image width
            // png.readUInt32BE(20) : PNG image height
            res.end( png );
        }
    });
};
