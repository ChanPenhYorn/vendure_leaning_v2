import { WishlistItem } from "./entities/wish-list.entity";

declare module "@vendure/core/dist/entity/custom-entity-fields" {
  interface CustomCustomerFields {
    wishlistItems: WishlistItem[];
  }
}
