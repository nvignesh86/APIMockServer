const OpenApiMocker = require("open-api-mocker");
const mergeYaml = require("merge-yaml");

const mergedFiles = mergeYaml([
    "./yml/sample.yml"
]);

async function start(){
    const mocker = new OpenApiMocker({
        port: 5000,
        schema: mergedFiles
    });

    await mocker.validate();
    await mocker.mock();
}

start();