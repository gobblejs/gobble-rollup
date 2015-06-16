var path = require( 'path' );
var r = require( 'rollup' );

module.exports = function rollup ( inputdir, outputdir, options ) {
	if ( !options.entry ) {
		throw new Error( 'You must supply `options.entry`' );
	}

	options.dest = path.resolve( outputdir, options.dest || options.entry );
	options.entry = path.resolve( inputdir, options.entry );

	return r.rollup( options ).then( function ( bundle ) {
		return bundle.write( options );
	});
};
