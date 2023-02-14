const df = require("durable-functions");
const hashConfig = require("./../configuration/hash.config.json");

module.exports = async function (context, req) {
    const client = df.getClient(context);
    const instanceId = await client.startNew(
        hashConfig.orchestratorFuncName,
        undefined,
        req.body
    );

    context.log(`Started orchestration with ID = '${instanceId}'.`);

    return client.createCheckStatusResponse(context.bindingData.req, instanceId);
};
