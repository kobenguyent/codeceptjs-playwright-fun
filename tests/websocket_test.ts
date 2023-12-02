const { I} = inject();

Feature('Web socket');

Scenario('Web Socket', async () => {
    I.amOnPage('https://websocketstest.com/');
    I.waitForText('Work for You!');
    const wsMessages = await I.grabWebSocketMessages();
    I.expectContain(wsMessages, 'RECEIVED ID');
});