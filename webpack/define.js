import {resolve} from'path';

const {NODE_ENV: environment} = process.env;
const development = environment === 'development';
const production = environment === 'production';
const build = resolve(import.meta.dirname, '../build');
const src = resolve(import.meta.dirname, '../src');
const mode = environment;

export {
	build,
	development,
	mode,
	production,
	src
};
