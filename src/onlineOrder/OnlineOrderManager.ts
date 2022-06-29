import { App } from "./app/App";

export class OnlineOrderManager {
    protected app: App;

    setApp(app: App) {
        return this.app = app;
    }

    getApp() { return this.app; }
}