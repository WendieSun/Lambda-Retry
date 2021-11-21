exports.handler = function (event) {
    if (event["error"]) {
        throw new Error("error");
    }
    if (Math.random() > 0.5) {
        throw new Error("error");
    };
    return;
}
