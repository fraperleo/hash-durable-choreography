const hash = require("object-hash");

module.exports = async function (context) {
    // Code to delete
    const reduceTime = Math.random() * 10000000000;
    let i = 0;
    while (i < reduceTime) {
        i++;
    }
    // Code to delete

    return {
        text: context.bindings.name,
        sha1: hash(context.bindings.name),
        md5: hash(context.bindings.name, { algorithm: "md5", encoding: "base64" }),
    };
};
