import { DecoratorUtils } from "@dharitri/sdk-nestjs-common/lib/utils/decorator.utils";

export class NoAuthOptions { }

export const NoAuth = DecoratorUtils.registerMethodDecorator(NoAuthOptions);
