import * as esb from 'esbuild'
import { rmSync, readdirSync} from 'node:fs'

const run = async () => {
	console.log("Building....")

	rmSync("api", {
		force: true,
		recursive: true,
	});

	const files = readdirSync("src/functions");

	files.map(async (file) => {
		if (file.match(/\w+\.ts/)) {
		const result = await esb.build({
			entryPoints: [`src/functions/${file}`],
			outdir: 'api',
			platform: "node",
			target: "es2022",
			bundle: true,
			minify: process.env.NODE_ENV == 'dev' ? false : true,
			sourcemap: process.env.NODE_ENV == 'dev' ? true : false,
			metafile: true
		})
			console.log(await esb.analyzeMetafile(result.metafile))
			await console.log("Build complete")
		}
	});
}

run()