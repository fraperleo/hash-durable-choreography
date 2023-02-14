/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an HTTP starter function.
 *
 */

const df = require("durable-functions");
const hashConfig = require("./../configuration/hash.config.json");

module.exports = df.orchestrator(function* (context) {
    const input = Array.isArray(context.df.input)
        ? context.df.input
        : [...context.df.input];
    const outputs = [];

    for (const element of input) {
        outputs.push(
            yield context.df.callActivity(hashConfig.workerFuncName, element)
        );
    }

    return outputs;
});
