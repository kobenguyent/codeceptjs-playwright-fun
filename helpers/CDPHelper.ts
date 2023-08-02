import {Helper} from "codeceptjs";

class CDPHelper extends Helper {
    private webSocketMessages: string = "";

    async _before() {
        const session = await this.getNewCDPSession();
        await session.send("Network.enable");
        await session.send("Page.enable");

        session.on(
            "Network.webSocketFrameReceived",
            (payload) => {
                this.logWebsocketMessages(this.getWebSocketLog(`RECEIVED`, payload));
            }
        );

        session.on(
            "Network.webSocketFrameSent",
            (payload) => {
                this.logWebsocketMessages(this.getWebSocketLog(`SENT`, payload));
            }
        );

        session.on(
            "Network.webSocketFrameError",
            (payload) => {
                this.logWebsocketMessages(this.getWebSocketLog(`ERROR`, payload));
            }
        );
    }

    public grabWebSocketMessages() {
        return this.webSocketMessages;
    }

    private getWebSocketMessage(payload): string {
        if (payload.errorMessage) {
            return payload.errorMessage;
        }

        return payload.response.payloadData;
    }

     private getWebSocketLog(prefix: string, payload): string {
        return `${prefix} ID: ${payload.requestId} TIMESTAMP: ${payload.timestamp} (${new Date().toISOString()})\n\n${this.getWebSocketMessage(payload)}\n\n`;
    }

    private async getNewCDPSession() {
        const page = this.helpers.Playwright.page;
        return page.context().newCDPSession(page);
    }

    private logWebsocketMessages(message: string): void {
        this.webSocketMessages += message;
    }
}

export = CDPHelper;