const { I} = inject();

Feature('Web socket');

Scenario('Web Socket', async () => {
    await I.amOnPage('https://websocketstest.com/');
    const wsLogs = await I.grabWebSocketMessages();
    I.expectContain(wsLogs, 'RECEIVED ID');
    I.expectContain(wsLogs, 'SENT ID');
    I.expectContain(wsLogs, 'echo,test message')
});