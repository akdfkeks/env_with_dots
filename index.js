function main() {
	console.log(process.env.ENV_1); // ENV_1
	console.log(process.env.ENV_2); // ENV_2
	console.log(process.env["ENV.FOO"]); // undefined
	console.log(process.env["ENV.FOO.BAR"]); // undefined
}

main();
