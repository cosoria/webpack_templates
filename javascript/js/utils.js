function debug(message) {
    console.debug(message);
}

function info(message) {
    console.info(message);
}

function warning(message) {
    console.warn(message);
}

function error(message) {
    console.error(message);
}

module.exports = {
    Debug: debug,
    Info: info,
    Warn: warning,
    Error: error
};