import { LanguageCode, PluginCommonModule, VendurePlugin } from "@vendure/core";
import { WishlistService } from "./services/wishlist.service";
import { WishlistItem } from "./entities/wish-list.entity";
import { WishlistShopResolver } from "./api/wishlist.resolver";
import { shopApiExtensions } from "./api/api-extensions";
@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [WishlistService],
  entities: [WishlistItem],
  shopApiExtensions: {
    schema: shopApiExtensions,
    resolvers: [WishlistShopResolver],
  },
  compatibility: "3.2.2",
  configuration: (config) => {
    config.customFields.Customer.push({
      type: "string",
      name: "wishlistItems",
      label: [{ languageCode: LanguageCode.en, value: "Wishlist Items" }],
      list: true,
    });
    return config;
  },
})
export class WishlistPlugin {}
