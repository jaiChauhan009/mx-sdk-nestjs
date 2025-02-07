import { NativeAuthError } from "@dharitri/sdk-native-auth-server";

export class NativeAuthInvalidOriginError extends NativeAuthError {
  constructor(actualOrigin: string, expectedOrigin: string) {
    super(`Invalid origin '${actualOrigin}'. should be '${expectedOrigin}'`);
  }
}
