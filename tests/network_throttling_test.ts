const { I } = inject();

const slow3GParams = {
    offline: false,
    downloadThroughput: 500 * 1000 / 8 * .8,
    uploadThroughput: 500 * 1000 / 8 * .8,
    latency: 400 * 5,
}

const fast3GParams = {
    offline: false,
    downloadThroughput: 1.6 * 1000 * 1000 / 8 * .9,
    uploadThroughput: 750 * 1000 / 8 * .9,
    latency: 150 * 3.75,
}

const offlineParams = {
    offline: true,
    downloadThroughput: 0,
    uploadThroughput: 0,
    latency: 0,
}

xFeature('Network Throttling');

Scenario('Normal network', async () => {
    I.amOnPage("https://speedtest.net/");
    I.see('Analysis');
});
Scenario('Fast 3G', async () => {
    I.usePlaywrightTo('emulate fast 3G connection', async ({ page }) =>{
        const client = await page.context().newCDPSession(page);
        await client.send("Network.enable");
        await client.send("Network.emulateNetworkConditions", fast3GParams);
    });
    I.amOnPage("https://speedtest.net/");
    I.see('Analysis');
});

Scenario('Slow 3G', async () => {
    I.usePlaywrightTo('emulate fast 3G connection', async ({ page }) =>{
        const client = await page.context().newCDPSession(page);
        await client.send("Network.enable");
        await client.send("Network.emulateNetworkConditions", slow3GParams);
    })
    I.amOnPage("https://speedtest.net/");
    I.see('Analysis');
});

Scenario('Offline', async () => {
    I.usePlaywrightTo('emulate fast 3G connection', async ({ page }) =>{
        const client = await page.context().newCDPSession(page);
        await client.send("Network.enable");
        await client.send("Network.emulateNetworkConditions", offlineParams);
    })
    I.amOnPage("https://speedtest.net/");
    I.see('Analysis');
});