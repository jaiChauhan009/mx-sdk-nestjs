import { DecoratorUtils } from "@dharitri/sdk-nestjs-common/lib/utils/decorator.utils";

export class DisableFieldsInterceptorOptions { }

export const DisableFieldsInterceptor = DecoratorUtils.registerMethodDecorator(DisableFieldsInterceptorOptions);
