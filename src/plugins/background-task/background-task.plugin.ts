// background-task.plugin.ts
import {
  PluginCommonModule,
  VendurePlugin,
  ProcessContext,
  TransactionalConnection,
} from "@vendure/core";
import { Module, OnApplicationBootstrap } from "@nestjs/common";
import { BackgroundTaskService } from "./services/background-task.service";
import { BACKGROUND_TASK_PLUGIN_OPTIONS } from "./constants";

@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [
    BackgroundTaskService,
    {
      provide: BACKGROUND_TASK_PLUGIN_OPTIONS,
      useValue: { someOption: "example" }, // Replace with actual options
    },
    TransactionalConnection, // Provided by Vendure core, usually not needed here explicitly
  ],
  compatibility: "3.2.2",
})
export class BackgroundTaskPlugin implements OnApplicationBootstrap {
  constructor(
    private backgroundTaskService: BackgroundTaskService,
    private processContext: ProcessContext
  ) {}

  async onApplicationBootstrap(): Promise<void> {
    if (this.processContext.isWorker) {
      console.log("[Worker] Bootstrapping background job...");
      await this.backgroundTaskService.runBackgroundJob();
    } else {
      console.log("[Server] No background job run on main server.");
    }
  }
}
