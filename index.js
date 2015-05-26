var path = require( 'path' );
var r = require( 'rollup' );

module.exports = function rollup ( inputdir, outputdir, options ) {
	if ( !options.entry || !options.dest ) {
		throw new Error( 'You must supply `entry` and `dest` options' );
	}

	options.entry = path.resolve( inputdir, options.entry );
	options.dest = path.resolve( outputdir, options.dest );

	return r.rollup( options ).then( function ( bundle ) {
		return bundle.write( options );
	})
};
