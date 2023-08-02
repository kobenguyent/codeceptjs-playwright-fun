const { I} = inject();

Feature('Web socket');

Scenario('Web Socket', async () => {
    await I.amOnPage('https://websocketstest.com/');
    I.waitForText('Work for You!');
    const wsMessages = await I.grabWebSocketMessages();
    await I.expectContain(wsMessages, 'RECEIVED ID');
});