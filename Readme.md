# Function build tool for Vercel functions

Build tool that uses the esbuild package to transpile TypeScript files TypeScript files from the src/functions directory, compiles them, and outputs the JavaScript files to the `api` directory to deploy functions to Vercel.

## Build configuration
```
const result = await esb.build({
  bundle: false,
  entryPoints: entryPoints,
  outdir: 'api',
  platform: 'node',
  minify: process.env.NODE_ENV == 'dev' ? false : true,
  sourcemap: process.env.NODE_ENV == 'dev' ? true : false,
  metafile: true
})
```
## Scripts
The package.json file includes three scripts:
v:serve - starts the development server using Vercel.
```
npm run v:serve
```
v:buildProd - runs the build script in production mode, which will minify the code and generate a sourcemap file.
```
npm run v:buildProd
```
v:buildDev - runs the build script in development mode, which will generate a sourcemap file but will not minify the code.
```
npm run v:buildDev
```
The package.json file also lists the dependencies for the project, which are esbuild and Vercel. It also includes a devDependency for TypeScript.


## Contact
Developer - B.Shellig [info@gusotechnologies.com](info@gusotechnologies.com)