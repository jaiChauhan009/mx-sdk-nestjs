import { DecoratorUtils } from "@dharitri/sdk-nestjs-common/lib/utils/decorator.utils";

export class NoCacheOptions { }

export const NoCache = DecoratorUtils.registerMethodDecorator(NoCacheOptions);
