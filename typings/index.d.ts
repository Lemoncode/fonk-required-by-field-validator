import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace requiredByField {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
