export class SignalRHubBackend {

	private _onclose: ((err?: Error) => void) | undefined;

	constructor(
		public connection: SignalRHubConnection
	) {
	}

	disconnect(err?: Error | undefined) {
		console.warn("[backend] trigger disconnect", err ? err.message : undefined);
		if (this._onclose) {
			this._onclose(err);
		}
	}

	registerOnclose(cb: (err?: Error) => void) {
		this._onclose = cb;
	}
}

export class HubConnectionBuilder {

	private _lastHub: SignalRHubConnection | undefined;

	build(): SignalRHubConnection {
		const hub = this._lastHub || new SignalRHubConnection();
		this._lastHub = hub;
		return hub;
	}

	withUrl(): this {
		return this;
	}

	withAutomaticReconnect() {
		return this;
	}

	configureLogging(logLevel: LogLevel) {
		return this;
	}

	getBackend(): SignalRHubBackend {
		if (!this._lastHub) {
			throw Error("No connection!");
		}
		const hub = this._lastHub;
		return hub.backend;
	}

}

export class SignalRHubConnection {

	backend = new SignalRHubBackend(this);

	start() {
		return this;
	}

	stop(): Promise<void> {
		this.backend.disconnect();
		return Promise.resolve();
	}

	onclose(cb: (err?: Error) => void): void {
		this.backend.registerOnclose(cb);
	}

	on() {
		return this;
	}
}

export enum LogLevel {
	None
}