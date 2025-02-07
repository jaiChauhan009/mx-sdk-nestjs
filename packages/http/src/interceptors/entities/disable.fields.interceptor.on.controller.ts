import { DecoratorUtils } from "@dharitri/sdk-nestjs-common/lib/utils/decorator.utils";

export class DisableFieldsInterceptorOnControllerOptions { }

export function DisableFieldsInterceptorOnController() {
  return DecoratorUtils.registerClassDecorator(DisableFieldsInterceptorOnControllerOptions, DisableFieldsInterceptorOnControllerOptions);
} 
