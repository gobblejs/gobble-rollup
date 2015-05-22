var path = require( 'path' );
var r = require( 'rollup' );

module.exports = function rollup ( inputdir, outputdir, options ) {
	var entry = options.entry;
	var dest = options.dest || options.entry;

	if ( entry.slice( -3 ) !== '.js' ) entry += '.js';
	if ( dest.slice( -3 ) !== '.js' )  dest += '.js';

	return r.rollup( path.join( inputdir, entry ), {
		resolvePath: options.resolvePath
	}).then( function ( bundle ) {
		return bundle.write( path.join( outputdir, dest ), {
			format: options.format || 'cjs',
			moduleId: options.moduleId,
			moduleName: options.moduleName,
			globals: options.globals
		});
	})
};
