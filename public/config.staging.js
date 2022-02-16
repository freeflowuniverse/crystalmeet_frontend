export default {
    ffcBackend: 'https://ffc-api.jimber.org/',
    appId: window.location.host,
    scope: JSON.stringify({ doubleName: true }),
    redirect_url: `?callback=true`,
    botFrontEnd: 'https://login.threefold.me/',
    botBackend: 'https://login.threefold.me/',
    debugJanus: false,
    janusServer: 'https://janus.jimber.org/janus',
    gaId: 'UA-150836145-1',
    limitBitrateCap: true,
};