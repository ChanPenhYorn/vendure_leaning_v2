import { PluginCommonModule, Type, VendurePlugin } from "@vendure/core";

import { HELLO_WORLD_PLUGIN_OPTIONS } from "./constants";
import { PluginInitOptions } from "./types";
import { HelloWorldService } from "./services/hello-world.service";
import { HelloWorldAdminResolver } from "./api/hello-world-admin.resolver";
import { shopApiExtensions } from "./api/api-extensions";

@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [HelloWorldService],
  configuration: (config) => {
    return config;
  },
  compatibility: "^3.0.0",
  shopApiExtensions: {
    schema: shopApiExtensions,
    resolvers: [HelloWorldAdminResolver],
  },
})
export class HelloWorldPlugin {
  static options: PluginInitOptions;

  static init(options: PluginInitOptions): Type<HelloWorldPlugin> {
    this.options = options;
    return HelloWorldPlugin;
  }
}
