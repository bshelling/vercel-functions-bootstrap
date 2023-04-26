import * as esb from 'esbuild'
import { readFileSync, readdirSync, rmSync } from 'node:fs'

const run = async () => {
	console.log("Building....")

	rmSync("api", {
	force: true,
	recursive: true,
	});

	const files = readdirSync("src/functions");

	var entryPoints = [];
	files.map((file) => {
	if (file.match(/\w+\.ts/)) {
		entryPoints.push(`src/functions/${file}`);
	}
	});

	const result = await esb.build({
		bundle: false,
		entryPoints: entryPoints,
		outdir: 'api',
		platform: 'node',
		minify: process.env.NODE_ENV == 'dev' ? false : true,
		sourcemap: process.env.NODE_ENV == 'dev' ? true : false,
		metafile: true
	})
	console.log(await esb.analyzeMetafile(result.metafile))
	await console.log("Build complete")
}

run()




