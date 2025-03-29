import { Events, Listener } from "../types/types";


export class ActionListener<TEvents extends Record<string, unknown>> {
  private listeners: {
    [K in keyof TEvents]?: Listener<TEvents[K]>[];
  } = {};
  
  registerListener<K extends keyof TEvents>(
    action: K,
    listener: Listener<TEvents[K]>
  ): void {
    if (!this.listeners[action]) {
      this.listeners[action] = [];
    }
    this.listeners[action]!.push(listener);
  }

  removeListener<K extends keyof TEvents>(action: K): void {
    delete this.listeners[action];
  }

  emit<K extends keyof TEvents>(action: K, data: TEvents[K]): void {
    if (!this.listeners[action]) {
      throw new Error(`Can't emit an event. Event "${String(action)}" doesn't exits.`);
    }

    for (const listener of this.listeners[action]!) {
      listener(data);
    }
  }
}


export const actionListener = new ActionListener<Events>();