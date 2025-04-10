import {
  PluginCommonModule,
  Type,
  VendurePlugin,
  EventBus,
  OrderPlacedEvent,
} from "@vendure/core";

import { ORDER_EVENT_PLUGIN_OPTIONS } from "./constants";
import { PluginInitOptions } from "./types";

@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [
    {
      provide: ORDER_EVENT_PLUGIN_OPTIONS,
      useFactory: () => OrderEventPlugin.options,
    },
  ],
  configuration: (config) => {
    // Plugin-specific configuration
    // such as custom fields, custom permissions,
    // strategies etc. can be configured here by
    // modifying the `config` object.
    return config;
  },
  compatibility: "^3.0.0",
})
export class OrderEventPlugin {
  static options: PluginInitOptions;
  constructor(private eventBus: EventBus) {}

  static init(options: PluginInitOptions): Type<OrderEventPlugin> {
    this.options = options;
    return OrderEventPlugin;
  }

  onModuleInit() {
    this.eventBus.ofType(OrderPlacedEvent).subscribe((event) => {
      // Logic to handle the event
      const orderCode = event.order.code;
      const total = event.order.totalWithTax;
      console.log(
        `New order placed! Order Code: ${orderCode}, Total: ${total}`
      );
      // You can add custom logic here, e.g., send a notification, update external systems, etc.
    });
  }
}
