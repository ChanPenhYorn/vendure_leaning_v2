import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCustomFields1744279036412 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
  ALTER TABLE customer 
  ADD COLUMN customFieldsWishlistitems JSON NULL COMMENT 'A list of product variant IDs for the customer\'s wishlist';
`);

    await queryRunner.query(
      "ALTER TABLE `authentication_method` DROP FOREIGN KEY `FK_00cbe87bc0d4e36758d61bd31d6`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `identifier` `identifier` varchar(255) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `passwordHash` `passwordHash` varchar(255) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `verificationToken` `verificationToken` varchar(255) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `passwordResetToken` `passwordResetToken` varchar(255) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `identifierChangeToken` `identifierChangeToken` varchar(255) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `pendingIdentifier` `pendingIdentifier` varchar(255) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `strategy` `strategy` varchar(255) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `externalIdentifier` `externalIdentifier` varchar(255) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `metadata` `metadata` text NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `userId` `userId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection_translation` DROP FOREIGN KEY `FK_e329f9036210d75caa1d8f2154a`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection_translation` CHANGE `baseId` `baseId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection` DROP FOREIGN KEY `FK_4257b61275144db89fa0f5dc059`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection` DROP FOREIGN KEY `FK_7256fef1bb42f1b38156b7449f5`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection` CHANGE `parentId` `parentId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection` CHANGE `featuredAssetId` `featuredAssetId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `facet_translation` DROP FOREIGN KEY `FK_eaea53f44bf9e97790d38a3d68f`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `facet_translation` CHANGE `baseId` `baseId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `facet_value_translation` DROP FOREIGN KEY `FK_3d6e45823b65de808a66cb1423b`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `facet_value_translation` CHANGE `baseId` `baseId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_translation` DROP FOREIGN KEY `FK_a79a443c1f7841f3851767faa6d`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_translation` CHANGE `baseId` `baseId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option` CHANGE `deletedAt` `deletedAt` datetime NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_group_translation` DROP FOREIGN KEY `FK_93751abc1451972c02e033b766c`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_group_translation` CHANGE `baseId` `baseId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_group` DROP FOREIGN KEY `FK_a6e91739227bf4d442f23c52c75`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_group` CHANGE `deletedAt` `deletedAt` datetime NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_group` CHANGE `productId` `productId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_translation` DROP FOREIGN KEY `FK_7dbc75cb4e8b002620c4dbfdac5`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_translation` CHANGE `baseId` `baseId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product` DROP FOREIGN KEY `FK_91a19e6613534949a4ce6e76ff8`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product` CHANGE `deletedAt` `deletedAt` datetime NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product` CHANGE `featuredAssetId` `featuredAssetId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `asset` CHANGE `focalPoint` `focalPoint` text NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` DROP FOREIGN KEY `FK_06b02fb482b188823e419d37bd4`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` DROP FOREIGN KEY `FK_22b818af8722746fb9f206068c2`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` DROP FOREIGN KEY `FK_30019aa65b17fe9ee9628931991`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` CHANGE `fulfillmentId` `fulfillmentId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` CHANGE `modificationId` `modificationId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` CHANGE `refundId` `refundId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `refund` CHANGE `reason` `reason` varchar(255) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `refund` CHANGE `transactionId` `transactionId` varchar(255) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment` DROP FOREIGN KEY `FK_d09d285fe1645cd2f0db811e293`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment` CHANGE `errorMessage` `errorMessage` varchar(255) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment` CHANGE `transactionId` `transactionId` varchar(255) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment` CHANGE `orderId` `orderId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `surcharge` DROP FOREIGN KEY `FK_154eb685f9b629033bd266df7fa`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `surcharge` DROP FOREIGN KEY `FK_a49c5271c39cc8174a0535c8088`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `surcharge` CHANGE `orderId` `orderId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `surcharge` CHANGE `orderModificationId` `orderModificationId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` DROP FOREIGN KEY `FK_1df5bc14a47ef24d2e681f45598`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` DROP FOREIGN KEY `FK_ad2991fa2933ed8b7f86a716338`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` DROP FOREIGN KEY `FK_cb66b63b6e97613013795eadbd5`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` CHANGE `shippingAddressChange` `shippingAddressChange` text NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` CHANGE `billingAddressChange` `billingAddressChange` text NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` CHANGE `orderId` `orderId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` CHANGE `paymentId` `paymentId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` CHANGE `refundId` `refundId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion_translation` DROP FOREIGN KEY `FK_1cc009e9ab2263a35544064561b`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion_translation` CHANGE `baseId` `baseId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion` CHANGE `deletedAt` `deletedAt` datetime NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion` CHANGE `startsAt` `startsAt` datetime NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion` CHANGE `endsAt` `endsAt` datetime NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion` CHANGE `couponCode` `couponCode` varchar(255) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion` CHANGE `perCustomerUsageLimit` `perCustomerUsageLimit` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion` CHANGE `usageLimit` `usageLimit` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `shipping_method_translation` DROP FOREIGN KEY `FK_85ec26c71067ebc84adcd98d1a5`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `shipping_method_translation` CHANGE `baseId` `baseId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `shipping_method` CHANGE `deletedAt` `deletedAt` datetime NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `shipping_line` DROP FOREIGN KEY `FK_c9f34a440d490d1b66f6829b86c`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `shipping_line` CHANGE `orderId` `orderId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order` DROP FOREIGN KEY `FK_73a78d7df09541ac5eba620d181`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order` DROP FOREIGN KEY `FK_124456e637cca7a415897dce659`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order` CHANGE `orderPlacedAt` `orderPlacedAt` datetime NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order` CHANGE `aggregateOrderId` `aggregateOrderId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order` CHANGE `customerId` `customerId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order` CHANGE `taxZoneId` `taxZoneId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `stock_movement` DROP FOREIGN KEY `FK_e65ba3882557cab4febb54809bb`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `stock_movement` DROP FOREIGN KEY `FK_d2c8d5fca981cc820131f81aa83`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `stock_movement` CHANGE `productVariantId` `productVariantId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `stock_movement` CHANGE `orderLineId` `orderLineId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` DROP FOREIGN KEY `FK_6901d8715f5ebadd764466f7bde`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` DROP FOREIGN KEY `FK_dc9ac68b47da7b62249886affba`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` DROP FOREIGN KEY `FK_77be94ce9ec6504466179462275`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` DROP FOREIGN KEY `FK_9f065453910ea77d4be8e92618f`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` DROP FOREIGN KEY `FK_239cfca2a55b98b90b6bef2e44f`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` CHANGE `sellerChannelId` `sellerChannelId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` CHANGE `shippingLineId` `shippingLineId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` CHANGE `taxCategoryId` `taxCategoryId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` CHANGE `initialListPrice` `initialListPrice` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` CHANGE `featuredAssetId` `featuredAssetId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` CHANGE `orderId` `orderId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant_price` DROP FOREIGN KEY `FK_e6126cd268aea6e9b31d89af9ab`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant_price` CHANGE `channelId` `channelId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant_price` CHANGE `variantId` `variantId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant_translation` DROP FOREIGN KEY `FK_420f4d6fb75d38b9dca79bc43b4`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant_translation` CHANGE `baseId` `baseId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` DROP FOREIGN KEY `FK_0e6f516053cf982b537836e21cf`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` DROP FOREIGN KEY `FK_e38dca0d82fd64c7cf8aac8b8ef`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` DROP FOREIGN KEY `FK_6e420052844edf3a5506d863ce6`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` CHANGE `deletedAt` `deletedAt` datetime NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` CHANGE `featuredAssetId` `featuredAssetId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` CHANGE `taxCategoryId` `taxCategoryId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` CHANGE `productId` `productId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `region_translation` DROP FOREIGN KEY `FK_1afd722b943c81310705fc3e612`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `region_translation` CHANGE `baseId` `baseId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `region` DROP FOREIGN KEY `FK_ed0c8098ce6809925a437f42aec`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `region` CHANGE `parentId` `parentId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` DROP FOREIGN KEY `FK_7ee3306d7638aa85ca90d672198`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` DROP FOREIGN KEY `FK_9872fc7de2f4e532fd3230d1915`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` DROP FOREIGN KEY `FK_8b5ab52fc8887c1a769b9276caf`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` CHANGE `categoryId` `categoryId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` CHANGE `zoneId` `zoneId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` CHANGE `customerGroupId` `customerGroupId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `customer` DROP FOREIGN KEY `FK_3f62b42ed23958b120c235f74df`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `customer` CHANGE `deletedAt` `deletedAt` datetime NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `customer` CHANGE `title` `title` varchar(255) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `customer` CHANGE `phoneNumber` `phoneNumber` varchar(255) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `customer` CHANGE `userId` `userId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `customer` DROP COLUMN `customFieldsWishlistitems`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `customer` ADD `customFieldsWishlistitems` text NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `address` DROP FOREIGN KEY `FK_dc34d382b493ade1f70e834c4d3`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `address` DROP FOREIGN KEY `FK_d87215343c3a3a67e6a0b7f3ea9`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `address` CHANGE `customerId` `customerId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `address` CHANGE `countryId` `countryId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment_method_translation` DROP FOREIGN KEY `FK_66187f782a3e71b9e0f5b50b68b`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment_method_translation` CHANGE `baseId` `baseId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment_method` CHANGE `checker` `checker` text NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `seller` CHANGE `deletedAt` `deletedAt` datetime NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` DROP FOREIGN KEY `FK_7a75399a4f4ffa48ee02e98c059`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` DROP FOREIGN KEY `FK_eb87ef1e234444728138302263b`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` DROP FOREIGN KEY `FK_3d2f174ef04fb312fdebd0ddc53`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` CHANGE `authenticationStrategy` `authenticationStrategy` varchar(255) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` CHANGE `activeOrderId` `activeOrderId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` CHANGE `activeChannelId` `activeChannelId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` CHANGE `userId` `userId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` DROP FOREIGN KEY `FK_af2116c7e176b6b88dceceeb74b`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` DROP FOREIGN KEY `FK_afe9f917a1c82b9e9e69f7c6129`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` DROP FOREIGN KEY `FK_c9ca2f58d4517460435cbd8b4c9`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` CHANGE `availableLanguageCodes` `availableLanguageCodes` text NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` CHANGE `availableCurrencyCodes` `availableCurrencyCodes` text NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` CHANGE `sellerId` `sellerId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` CHANGE `defaultTaxZoneId` `defaultTaxZoneId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` CHANGE `defaultShippingZoneId` `defaultShippingZoneId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `user` CHANGE `deletedAt` `deletedAt` datetime NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `user` CHANGE `lastLogin` `lastLogin` datetime NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `administrator` DROP FOREIGN KEY `FK_1966e18ce6a39a82b19204704d7`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `administrator` CHANGE `deletedAt` `deletedAt` datetime NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `administrator` CHANGE `userId` `userId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `history_entry` DROP FOREIGN KEY `FK_92f8c334ef06275f9586fd01832`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `history_entry` DROP FOREIGN KEY `FK_43ac602f839847fdb91101f30ec`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `history_entry` DROP FOREIGN KEY `FK_3a05127e67435b4d2332ded7c9e`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `history_entry` CHANGE `administratorId` `administratorId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `history_entry` CHANGE `customerId` `customerId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `history_entry` CHANGE `orderId` `orderId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `search_index_item` CHANGE `productPreviewFocalPoint` `productPreviewFocalPoint` text NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `search_index_item` CHANGE `productVariantPreviewFocalPoint` `productVariantPreviewFocalPoint` text NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `search_index_item` CHANGE `productAssetId` `productAssetId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `search_index_item` CHANGE `productVariantAssetId` `productVariantAssetId` int NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `job_record` CHANGE `data` `data` text NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `job_record` CHANGE `result` `result` text NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `job_record` CHANGE `error` `error` varchar(255) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `job_record` CHANGE `startedAt` `startedAt` datetime(6) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `job_record` CHANGE `settledAt` `settledAt` datetime(6) NULL",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` ADD CONSTRAINT `FK_00cbe87bc0d4e36758d61bd31d6` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection_translation` ADD CONSTRAINT `FK_e329f9036210d75caa1d8f2154a` FOREIGN KEY (`baseId`) REFERENCES `collection`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection` ADD CONSTRAINT `FK_7256fef1bb42f1b38156b7449f5` FOREIGN KEY (`featuredAssetId`) REFERENCES `asset`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection` ADD CONSTRAINT `FK_4257b61275144db89fa0f5dc059` FOREIGN KEY (`parentId`) REFERENCES `collection`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `facet_translation` ADD CONSTRAINT `FK_eaea53f44bf9e97790d38a3d68f` FOREIGN KEY (`baseId`) REFERENCES `facet`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `facet_value_translation` ADD CONSTRAINT `FK_3d6e45823b65de808a66cb1423b` FOREIGN KEY (`baseId`) REFERENCES `facet_value`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_translation` ADD CONSTRAINT `FK_a79a443c1f7841f3851767faa6d` FOREIGN KEY (`baseId`) REFERENCES `product_option`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_group_translation` ADD CONSTRAINT `FK_93751abc1451972c02e033b766c` FOREIGN KEY (`baseId`) REFERENCES `product_option_group`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_group` ADD CONSTRAINT `FK_a6e91739227bf4d442f23c52c75` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_translation` ADD CONSTRAINT `FK_7dbc75cb4e8b002620c4dbfdac5` FOREIGN KEY (`baseId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product` ADD CONSTRAINT `FK_91a19e6613534949a4ce6e76ff8` FOREIGN KEY (`featuredAssetId`) REFERENCES `asset`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` ADD CONSTRAINT `FK_06b02fb482b188823e419d37bd4` FOREIGN KEY (`fulfillmentId`) REFERENCES `fulfillment`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` ADD CONSTRAINT `FK_22b818af8722746fb9f206068c2` FOREIGN KEY (`modificationId`) REFERENCES `order_modification`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` ADD CONSTRAINT `FK_30019aa65b17fe9ee9628931991` FOREIGN KEY (`refundId`) REFERENCES `refund`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment` ADD CONSTRAINT `FK_d09d285fe1645cd2f0db811e293` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `surcharge` ADD CONSTRAINT `FK_154eb685f9b629033bd266df7fa` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `surcharge` ADD CONSTRAINT `FK_a49c5271c39cc8174a0535c8088` FOREIGN KEY (`orderModificationId`) REFERENCES `order_modification`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` ADD CONSTRAINT `FK_1df5bc14a47ef24d2e681f45598` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` ADD CONSTRAINT `FK_ad2991fa2933ed8b7f86a716338` FOREIGN KEY (`paymentId`) REFERENCES `payment`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` ADD CONSTRAINT `FK_cb66b63b6e97613013795eadbd5` FOREIGN KEY (`refundId`) REFERENCES `refund`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion_translation` ADD CONSTRAINT `FK_1cc009e9ab2263a35544064561b` FOREIGN KEY (`baseId`) REFERENCES `promotion`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `shipping_method_translation` ADD CONSTRAINT `FK_85ec26c71067ebc84adcd98d1a5` FOREIGN KEY (`baseId`) REFERENCES `shipping_method`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `shipping_line` ADD CONSTRAINT `FK_c9f34a440d490d1b66f6829b86c` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order` ADD CONSTRAINT `FK_73a78d7df09541ac5eba620d181` FOREIGN KEY (`aggregateOrderId`) REFERENCES `order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order` ADD CONSTRAINT `FK_124456e637cca7a415897dce659` FOREIGN KEY (`customerId`) REFERENCES `customer`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `stock_movement` ADD CONSTRAINT `FK_e65ba3882557cab4febb54809bb` FOREIGN KEY (`productVariantId`) REFERENCES `product_variant`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `stock_movement` ADD CONSTRAINT `FK_d2c8d5fca981cc820131f81aa83` FOREIGN KEY (`orderLineId`) REFERENCES `order_line`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` ADD CONSTRAINT `FK_6901d8715f5ebadd764466f7bde` FOREIGN KEY (`sellerChannelId`) REFERENCES `channel`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` ADD CONSTRAINT `FK_dc9ac68b47da7b62249886affba` FOREIGN KEY (`shippingLineId`) REFERENCES `shipping_line`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` ADD CONSTRAINT `FK_77be94ce9ec6504466179462275` FOREIGN KEY (`taxCategoryId`) REFERENCES `tax_category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` ADD CONSTRAINT `FK_9f065453910ea77d4be8e92618f` FOREIGN KEY (`featuredAssetId`) REFERENCES `asset`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` ADD CONSTRAINT `FK_239cfca2a55b98b90b6bef2e44f` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant_price` ADD CONSTRAINT `FK_e6126cd268aea6e9b31d89af9ab` FOREIGN KEY (`variantId`) REFERENCES `product_variant`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant_translation` ADD CONSTRAINT `FK_420f4d6fb75d38b9dca79bc43b4` FOREIGN KEY (`baseId`) REFERENCES `product_variant`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` ADD CONSTRAINT `FK_0e6f516053cf982b537836e21cf` FOREIGN KEY (`featuredAssetId`) REFERENCES `asset`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` ADD CONSTRAINT `FK_e38dca0d82fd64c7cf8aac8b8ef` FOREIGN KEY (`taxCategoryId`) REFERENCES `tax_category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` ADD CONSTRAINT `FK_6e420052844edf3a5506d863ce6` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `region_translation` ADD CONSTRAINT `FK_1afd722b943c81310705fc3e612` FOREIGN KEY (`baseId`) REFERENCES `region`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `region` ADD CONSTRAINT `FK_ed0c8098ce6809925a437f42aec` FOREIGN KEY (`parentId`) REFERENCES `region`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` ADD CONSTRAINT `FK_7ee3306d7638aa85ca90d672198` FOREIGN KEY (`categoryId`) REFERENCES `tax_category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` ADD CONSTRAINT `FK_9872fc7de2f4e532fd3230d1915` FOREIGN KEY (`zoneId`) REFERENCES `zone`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` ADD CONSTRAINT `FK_8b5ab52fc8887c1a769b9276caf` FOREIGN KEY (`customerGroupId`) REFERENCES `customer_group`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `customer` ADD CONSTRAINT `FK_3f62b42ed23958b120c235f74df` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `address` ADD CONSTRAINT `FK_dc34d382b493ade1f70e834c4d3` FOREIGN KEY (`customerId`) REFERENCES `customer`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `address` ADD CONSTRAINT `FK_d87215343c3a3a67e6a0b7f3ea9` FOREIGN KEY (`countryId`) REFERENCES `region`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment_method_translation` ADD CONSTRAINT `FK_66187f782a3e71b9e0f5b50b68b` FOREIGN KEY (`baseId`) REFERENCES `payment_method`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` ADD CONSTRAINT `FK_7a75399a4f4ffa48ee02e98c059` FOREIGN KEY (`activeOrderId`) REFERENCES `order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` ADD CONSTRAINT `FK_eb87ef1e234444728138302263b` FOREIGN KEY (`activeChannelId`) REFERENCES `channel`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` ADD CONSTRAINT `FK_3d2f174ef04fb312fdebd0ddc53` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` ADD CONSTRAINT `FK_af2116c7e176b6b88dceceeb74b` FOREIGN KEY (`sellerId`) REFERENCES `seller`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` ADD CONSTRAINT `FK_afe9f917a1c82b9e9e69f7c6129` FOREIGN KEY (`defaultTaxZoneId`) REFERENCES `zone`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` ADD CONSTRAINT `FK_c9ca2f58d4517460435cbd8b4c9` FOREIGN KEY (`defaultShippingZoneId`) REFERENCES `zone`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `administrator` ADD CONSTRAINT `FK_1966e18ce6a39a82b19204704d7` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `history_entry` ADD CONSTRAINT `FK_92f8c334ef06275f9586fd01832` FOREIGN KEY (`administratorId`) REFERENCES `administrator`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `history_entry` ADD CONSTRAINT `FK_43ac602f839847fdb91101f30ec` FOREIGN KEY (`customerId`) REFERENCES `customer`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `history_entry` ADD CONSTRAINT `FK_3a05127e67435b4d2332ded7c9e` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "ALTER TABLE `history_entry` DROP FOREIGN KEY `FK_3a05127e67435b4d2332ded7c9e`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `history_entry` DROP FOREIGN KEY `FK_43ac602f839847fdb91101f30ec`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `history_entry` DROP FOREIGN KEY `FK_92f8c334ef06275f9586fd01832`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `administrator` DROP FOREIGN KEY `FK_1966e18ce6a39a82b19204704d7`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` DROP FOREIGN KEY `FK_c9ca2f58d4517460435cbd8b4c9`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` DROP FOREIGN KEY `FK_afe9f917a1c82b9e9e69f7c6129`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` DROP FOREIGN KEY `FK_af2116c7e176b6b88dceceeb74b`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` DROP FOREIGN KEY `FK_3d2f174ef04fb312fdebd0ddc53`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` DROP FOREIGN KEY `FK_eb87ef1e234444728138302263b`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` DROP FOREIGN KEY `FK_7a75399a4f4ffa48ee02e98c059`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment_method_translation` DROP FOREIGN KEY `FK_66187f782a3e71b9e0f5b50b68b`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `address` DROP FOREIGN KEY `FK_d87215343c3a3a67e6a0b7f3ea9`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `address` DROP FOREIGN KEY `FK_dc34d382b493ade1f70e834c4d3`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `customer` DROP FOREIGN KEY `FK_3f62b42ed23958b120c235f74df`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` DROP FOREIGN KEY `FK_8b5ab52fc8887c1a769b9276caf`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` DROP FOREIGN KEY `FK_9872fc7de2f4e532fd3230d1915`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` DROP FOREIGN KEY `FK_7ee3306d7638aa85ca90d672198`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `region` DROP FOREIGN KEY `FK_ed0c8098ce6809925a437f42aec`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `region_translation` DROP FOREIGN KEY `FK_1afd722b943c81310705fc3e612`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` DROP FOREIGN KEY `FK_6e420052844edf3a5506d863ce6`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` DROP FOREIGN KEY `FK_e38dca0d82fd64c7cf8aac8b8ef`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` DROP FOREIGN KEY `FK_0e6f516053cf982b537836e21cf`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant_translation` DROP FOREIGN KEY `FK_420f4d6fb75d38b9dca79bc43b4`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant_price` DROP FOREIGN KEY `FK_e6126cd268aea6e9b31d89af9ab`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` DROP FOREIGN KEY `FK_239cfca2a55b98b90b6bef2e44f`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` DROP FOREIGN KEY `FK_9f065453910ea77d4be8e92618f`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` DROP FOREIGN KEY `FK_77be94ce9ec6504466179462275`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` DROP FOREIGN KEY `FK_dc9ac68b47da7b62249886affba`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` DROP FOREIGN KEY `FK_6901d8715f5ebadd764466f7bde`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `stock_movement` DROP FOREIGN KEY `FK_d2c8d5fca981cc820131f81aa83`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `stock_movement` DROP FOREIGN KEY `FK_e65ba3882557cab4febb54809bb`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order` DROP FOREIGN KEY `FK_124456e637cca7a415897dce659`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order` DROP FOREIGN KEY `FK_73a78d7df09541ac5eba620d181`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `shipping_line` DROP FOREIGN KEY `FK_c9f34a440d490d1b66f6829b86c`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `shipping_method_translation` DROP FOREIGN KEY `FK_85ec26c71067ebc84adcd98d1a5`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion_translation` DROP FOREIGN KEY `FK_1cc009e9ab2263a35544064561b`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` DROP FOREIGN KEY `FK_cb66b63b6e97613013795eadbd5`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` DROP FOREIGN KEY `FK_ad2991fa2933ed8b7f86a716338`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` DROP FOREIGN KEY `FK_1df5bc14a47ef24d2e681f45598`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `surcharge` DROP FOREIGN KEY `FK_a49c5271c39cc8174a0535c8088`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `surcharge` DROP FOREIGN KEY `FK_154eb685f9b629033bd266df7fa`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment` DROP FOREIGN KEY `FK_d09d285fe1645cd2f0db811e293`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` DROP FOREIGN KEY `FK_30019aa65b17fe9ee9628931991`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` DROP FOREIGN KEY `FK_22b818af8722746fb9f206068c2`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` DROP FOREIGN KEY `FK_06b02fb482b188823e419d37bd4`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product` DROP FOREIGN KEY `FK_91a19e6613534949a4ce6e76ff8`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_translation` DROP FOREIGN KEY `FK_7dbc75cb4e8b002620c4dbfdac5`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_group` DROP FOREIGN KEY `FK_a6e91739227bf4d442f23c52c75`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_group_translation` DROP FOREIGN KEY `FK_93751abc1451972c02e033b766c`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_translation` DROP FOREIGN KEY `FK_a79a443c1f7841f3851767faa6d`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `facet_value_translation` DROP FOREIGN KEY `FK_3d6e45823b65de808a66cb1423b`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `facet_translation` DROP FOREIGN KEY `FK_eaea53f44bf9e97790d38a3d68f`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection` DROP FOREIGN KEY `FK_4257b61275144db89fa0f5dc059`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection` DROP FOREIGN KEY `FK_7256fef1bb42f1b38156b7449f5`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection_translation` DROP FOREIGN KEY `FK_e329f9036210d75caa1d8f2154a`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` DROP FOREIGN KEY `FK_00cbe87bc0d4e36758d61bd31d6`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `job_record` CHANGE `settledAt` `settledAt` datetime(6) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `job_record` CHANGE `startedAt` `startedAt` datetime(6) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `job_record` CHANGE `error` `error` varchar(255) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `job_record` CHANGE `result` `result` text NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `job_record` CHANGE `data` `data` text NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `search_index_item` CHANGE `productVariantAssetId` `productVariantAssetId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `search_index_item` CHANGE `productAssetId` `productAssetId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `search_index_item` CHANGE `productVariantPreviewFocalPoint` `productVariantPreviewFocalPoint` text NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `search_index_item` CHANGE `productPreviewFocalPoint` `productPreviewFocalPoint` text NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `history_entry` CHANGE `orderId` `orderId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `history_entry` CHANGE `customerId` `customerId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `history_entry` CHANGE `administratorId` `administratorId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `history_entry` ADD CONSTRAINT `FK_3a05127e67435b4d2332ded7c9e` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `history_entry` ADD CONSTRAINT `FK_43ac602f839847fdb91101f30ec` FOREIGN KEY (`customerId`) REFERENCES `customer`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `history_entry` ADD CONSTRAINT `FK_92f8c334ef06275f9586fd01832` FOREIGN KEY (`administratorId`) REFERENCES `administrator`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `administrator` CHANGE `userId` `userId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `administrator` CHANGE `deletedAt` `deletedAt` datetime NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `administrator` ADD CONSTRAINT `FK_1966e18ce6a39a82b19204704d7` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `user` CHANGE `lastLogin` `lastLogin` datetime NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `user` CHANGE `deletedAt` `deletedAt` datetime NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` CHANGE `defaultShippingZoneId` `defaultShippingZoneId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` CHANGE `defaultTaxZoneId` `defaultTaxZoneId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` CHANGE `sellerId` `sellerId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` CHANGE `availableCurrencyCodes` `availableCurrencyCodes` text NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` CHANGE `availableLanguageCodes` `availableLanguageCodes` text NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` ADD CONSTRAINT `FK_c9ca2f58d4517460435cbd8b4c9` FOREIGN KEY (`defaultShippingZoneId`) REFERENCES `zone`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` ADD CONSTRAINT `FK_afe9f917a1c82b9e9e69f7c6129` FOREIGN KEY (`defaultTaxZoneId`) REFERENCES `zone`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `channel` ADD CONSTRAINT `FK_af2116c7e176b6b88dceceeb74b` FOREIGN KEY (`sellerId`) REFERENCES `seller`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` CHANGE `userId` `userId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` CHANGE `activeChannelId` `activeChannelId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` CHANGE `activeOrderId` `activeOrderId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` CHANGE `authenticationStrategy` `authenticationStrategy` varchar(255) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` ADD CONSTRAINT `FK_3d2f174ef04fb312fdebd0ddc53` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` ADD CONSTRAINT `FK_eb87ef1e234444728138302263b` FOREIGN KEY (`activeChannelId`) REFERENCES `channel`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `session` ADD CONSTRAINT `FK_7a75399a4f4ffa48ee02e98c059` FOREIGN KEY (`activeOrderId`) REFERENCES `order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `seller` CHANGE `deletedAt` `deletedAt` datetime NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment_method` CHANGE `checker` `checker` text NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment_method_translation` CHANGE `baseId` `baseId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment_method_translation` ADD CONSTRAINT `FK_66187f782a3e71b9e0f5b50b68b` FOREIGN KEY (`baseId`) REFERENCES `payment_method`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `address` CHANGE `countryId` `countryId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `address` CHANGE `customerId` `customerId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `address` ADD CONSTRAINT `FK_d87215343c3a3a67e6a0b7f3ea9` FOREIGN KEY (`countryId`) REFERENCES `region`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `address` ADD CONSTRAINT `FK_dc34d382b493ade1f70e834c4d3` FOREIGN KEY (`customerId`) REFERENCES `customer`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `customer` DROP COLUMN `customFieldsWishlistitems`",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `customer` ADD `customFieldsWishlistitems` tinyint NULL COMMENT 'A work-around needed when only relational custom fields are defined on an entity' DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `customer` CHANGE `userId` `userId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `customer` CHANGE `phoneNumber` `phoneNumber` varchar(255) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `customer` CHANGE `title` `title` varchar(255) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `customer` CHANGE `deletedAt` `deletedAt` datetime NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `customer` ADD CONSTRAINT `FK_3f62b42ed23958b120c235f74df` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` CHANGE `customerGroupId` `customerGroupId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` CHANGE `zoneId` `zoneId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` CHANGE `categoryId` `categoryId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` ADD CONSTRAINT `FK_8b5ab52fc8887c1a769b9276caf` FOREIGN KEY (`customerGroupId`) REFERENCES `customer_group`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` ADD CONSTRAINT `FK_9872fc7de2f4e532fd3230d1915` FOREIGN KEY (`zoneId`) REFERENCES `zone`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `tax_rate` ADD CONSTRAINT `FK_7ee3306d7638aa85ca90d672198` FOREIGN KEY (`categoryId`) REFERENCES `tax_category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `region` CHANGE `parentId` `parentId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `region` ADD CONSTRAINT `FK_ed0c8098ce6809925a437f42aec` FOREIGN KEY (`parentId`) REFERENCES `region`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `region_translation` CHANGE `baseId` `baseId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `region_translation` ADD CONSTRAINT `FK_1afd722b943c81310705fc3e612` FOREIGN KEY (`baseId`) REFERENCES `region`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` CHANGE `productId` `productId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` CHANGE `taxCategoryId` `taxCategoryId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` CHANGE `featuredAssetId` `featuredAssetId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` CHANGE `deletedAt` `deletedAt` datetime NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` ADD CONSTRAINT `FK_6e420052844edf3a5506d863ce6` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` ADD CONSTRAINT `FK_e38dca0d82fd64c7cf8aac8b8ef` FOREIGN KEY (`taxCategoryId`) REFERENCES `tax_category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant` ADD CONSTRAINT `FK_0e6f516053cf982b537836e21cf` FOREIGN KEY (`featuredAssetId`) REFERENCES `asset`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant_translation` CHANGE `baseId` `baseId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant_translation` ADD CONSTRAINT `FK_420f4d6fb75d38b9dca79bc43b4` FOREIGN KEY (`baseId`) REFERENCES `product_variant`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant_price` CHANGE `variantId` `variantId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant_price` CHANGE `channelId` `channelId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_variant_price` ADD CONSTRAINT `FK_e6126cd268aea6e9b31d89af9ab` FOREIGN KEY (`variantId`) REFERENCES `product_variant`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` CHANGE `orderId` `orderId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` CHANGE `featuredAssetId` `featuredAssetId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` CHANGE `initialListPrice` `initialListPrice` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` CHANGE `taxCategoryId` `taxCategoryId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` CHANGE `shippingLineId` `shippingLineId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` CHANGE `sellerChannelId` `sellerChannelId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` ADD CONSTRAINT `FK_239cfca2a55b98b90b6bef2e44f` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` ADD CONSTRAINT `FK_9f065453910ea77d4be8e92618f` FOREIGN KEY (`featuredAssetId`) REFERENCES `asset`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` ADD CONSTRAINT `FK_77be94ce9ec6504466179462275` FOREIGN KEY (`taxCategoryId`) REFERENCES `tax_category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` ADD CONSTRAINT `FK_dc9ac68b47da7b62249886affba` FOREIGN KEY (`shippingLineId`) REFERENCES `shipping_line`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line` ADD CONSTRAINT `FK_6901d8715f5ebadd764466f7bde` FOREIGN KEY (`sellerChannelId`) REFERENCES `channel`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `stock_movement` CHANGE `orderLineId` `orderLineId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `stock_movement` CHANGE `productVariantId` `productVariantId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `stock_movement` ADD CONSTRAINT `FK_d2c8d5fca981cc820131f81aa83` FOREIGN KEY (`orderLineId`) REFERENCES `order_line`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `stock_movement` ADD CONSTRAINT `FK_e65ba3882557cab4febb54809bb` FOREIGN KEY (`productVariantId`) REFERENCES `product_variant`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order` CHANGE `taxZoneId` `taxZoneId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order` CHANGE `customerId` `customerId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order` CHANGE `aggregateOrderId` `aggregateOrderId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order` CHANGE `orderPlacedAt` `orderPlacedAt` datetime NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order` ADD CONSTRAINT `FK_124456e637cca7a415897dce659` FOREIGN KEY (`customerId`) REFERENCES `customer`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order` ADD CONSTRAINT `FK_73a78d7df09541ac5eba620d181` FOREIGN KEY (`aggregateOrderId`) REFERENCES `order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `shipping_line` CHANGE `orderId` `orderId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `shipping_line` ADD CONSTRAINT `FK_c9f34a440d490d1b66f6829b86c` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `shipping_method` CHANGE `deletedAt` `deletedAt` datetime NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `shipping_method_translation` CHANGE `baseId` `baseId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `shipping_method_translation` ADD CONSTRAINT `FK_85ec26c71067ebc84adcd98d1a5` FOREIGN KEY (`baseId`) REFERENCES `shipping_method`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion` CHANGE `usageLimit` `usageLimit` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion` CHANGE `perCustomerUsageLimit` `perCustomerUsageLimit` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion` CHANGE `couponCode` `couponCode` varchar(255) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion` CHANGE `endsAt` `endsAt` datetime NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion` CHANGE `startsAt` `startsAt` datetime NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion` CHANGE `deletedAt` `deletedAt` datetime NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion_translation` CHANGE `baseId` `baseId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `promotion_translation` ADD CONSTRAINT `FK_1cc009e9ab2263a35544064561b` FOREIGN KEY (`baseId`) REFERENCES `promotion`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` CHANGE `refundId` `refundId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` CHANGE `paymentId` `paymentId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` CHANGE `orderId` `orderId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` CHANGE `billingAddressChange` `billingAddressChange` text NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` CHANGE `shippingAddressChange` `shippingAddressChange` text NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` ADD CONSTRAINT `FK_cb66b63b6e97613013795eadbd5` FOREIGN KEY (`refundId`) REFERENCES `refund`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` ADD CONSTRAINT `FK_ad2991fa2933ed8b7f86a716338` FOREIGN KEY (`paymentId`) REFERENCES `payment`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_modification` ADD CONSTRAINT `FK_1df5bc14a47ef24d2e681f45598` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `surcharge` CHANGE `orderModificationId` `orderModificationId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `surcharge` CHANGE `orderId` `orderId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `surcharge` ADD CONSTRAINT `FK_a49c5271c39cc8174a0535c8088` FOREIGN KEY (`orderModificationId`) REFERENCES `order_modification`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `surcharge` ADD CONSTRAINT `FK_154eb685f9b629033bd266df7fa` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment` CHANGE `orderId` `orderId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment` CHANGE `transactionId` `transactionId` varchar(255) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment` CHANGE `errorMessage` `errorMessage` varchar(255) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `payment` ADD CONSTRAINT `FK_d09d285fe1645cd2f0db811e293` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `refund` CHANGE `transactionId` `transactionId` varchar(255) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `refund` CHANGE `reason` `reason` varchar(255) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` CHANGE `refundId` `refundId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` CHANGE `modificationId` `modificationId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` CHANGE `fulfillmentId` `fulfillmentId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` ADD CONSTRAINT `FK_30019aa65b17fe9ee9628931991` FOREIGN KEY (`refundId`) REFERENCES `refund`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` ADD CONSTRAINT `FK_22b818af8722746fb9f206068c2` FOREIGN KEY (`modificationId`) REFERENCES `order_modification`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `order_line_reference` ADD CONSTRAINT `FK_06b02fb482b188823e419d37bd4` FOREIGN KEY (`fulfillmentId`) REFERENCES `fulfillment`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `asset` CHANGE `focalPoint` `focalPoint` text NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product` CHANGE `featuredAssetId` `featuredAssetId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product` CHANGE `deletedAt` `deletedAt` datetime NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product` ADD CONSTRAINT `FK_91a19e6613534949a4ce6e76ff8` FOREIGN KEY (`featuredAssetId`) REFERENCES `asset`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_translation` CHANGE `baseId` `baseId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_translation` ADD CONSTRAINT `FK_7dbc75cb4e8b002620c4dbfdac5` FOREIGN KEY (`baseId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_group` CHANGE `productId` `productId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_group` CHANGE `deletedAt` `deletedAt` datetime NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_group` ADD CONSTRAINT `FK_a6e91739227bf4d442f23c52c75` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_group_translation` CHANGE `baseId` `baseId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_group_translation` ADD CONSTRAINT `FK_93751abc1451972c02e033b766c` FOREIGN KEY (`baseId`) REFERENCES `product_option_group`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option` CHANGE `deletedAt` `deletedAt` datetime NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_translation` CHANGE `baseId` `baseId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `product_option_translation` ADD CONSTRAINT `FK_a79a443c1f7841f3851767faa6d` FOREIGN KEY (`baseId`) REFERENCES `product_option`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `facet_value_translation` CHANGE `baseId` `baseId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `facet_value_translation` ADD CONSTRAINT `FK_3d6e45823b65de808a66cb1423b` FOREIGN KEY (`baseId`) REFERENCES `facet_value`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `facet_translation` CHANGE `baseId` `baseId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `facet_translation` ADD CONSTRAINT `FK_eaea53f44bf9e97790d38a3d68f` FOREIGN KEY (`baseId`) REFERENCES `facet`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection` CHANGE `featuredAssetId` `featuredAssetId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection` CHANGE `parentId` `parentId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection` ADD CONSTRAINT `FK_7256fef1bb42f1b38156b7449f5` FOREIGN KEY (`featuredAssetId`) REFERENCES `asset`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection` ADD CONSTRAINT `FK_4257b61275144db89fa0f5dc059` FOREIGN KEY (`parentId`) REFERENCES `collection`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection_translation` CHANGE `baseId` `baseId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `collection_translation` ADD CONSTRAINT `FK_e329f9036210d75caa1d8f2154a` FOREIGN KEY (`baseId`) REFERENCES `collection`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `userId` `userId` int NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `metadata` `metadata` text NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `externalIdentifier` `externalIdentifier` varchar(255) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `strategy` `strategy` varchar(255) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `pendingIdentifier` `pendingIdentifier` varchar(255) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `identifierChangeToken` `identifierChangeToken` varchar(255) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `passwordResetToken` `passwordResetToken` varchar(255) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `verificationToken` `verificationToken` varchar(255) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `passwordHash` `passwordHash` varchar(255) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` CHANGE `identifier` `identifier` varchar(255) NULL DEFAULT 'NULL'",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `authentication_method` ADD CONSTRAINT `FK_00cbe87bc0d4e36758d61bd31d6` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `customer` CHANGE `customFieldsWishlistitems` `customFields__fix_relational_custom_fields__` tinyint NULL COMMENT 'A work-around needed when only relational custom fields are defined on an entity' DEFAULT 'NULL'",
      undefined
    );
  }
}
