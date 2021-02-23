function EventModule(event) {
    function log() {
        event.on('sys-down',() => {
            console.log('system is down!')
        })
    }
    return {log};
}

module.exports = EventModule