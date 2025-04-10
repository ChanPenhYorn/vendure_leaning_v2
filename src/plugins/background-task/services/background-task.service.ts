import { Inject, Injectable, Logger } from "@nestjs/common";
import {
  ID,
  Product,
  RequestContext,
  TransactionalConnection,
} from "@vendure/core";
import { BACKGROUND_TASK_PLUGIN_OPTIONS } from "../constants";
import { PluginInitOptions } from "../types";

@Injectable()
export class BackgroundTaskService {
  constructor(
    private connection: TransactionalConnection,
    @Inject(BACKGROUND_TASK_PLUGIN_OPTIONS) private options: PluginInitOptions
  ) {}
  private readonly logger = new Logger(BackgroundTaskService.name);

  async runBackgroundJob() {
    this.logger.log("Running background job...");
    // Simulate long-running or heavy process
    await new Promise((resolve) => setTimeout(resolve, 3000));
    this.logger.log("Background job complete ✅");
  }
}
