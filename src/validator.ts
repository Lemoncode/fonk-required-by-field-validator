import {
  FieldValidationFunctionSync,
  parseMessageWithCustomArgs,
  Validators,
  ValidationResult,
} from '@lemoncode/fonk';

const VALIDATOR_TYPE = 'REQUIRED_BY_FIELD';

let defaultMessage = 'Please fill in this mandatory field.';
export const setErrorMessage = message => (defaultMessage = message);

const isDefined = value => value !== void 0 && value !== null && value !== '';

interface CustomValidatorArgs {
  field: string;
  value?: string;
  condition?: (value, values) => boolean;
  trim?: boolean;
}

const isDefinedCustomArgs = (customArgs: CustomValidatorArgs) =>
  isDefined(customArgs) &&
  ((isDefined(customArgs.field) && isDefined(customArgs.value)) ||
    (isDefined(customArgs.field) && isDefined(customArgs.condition)));

const checkRequiredParameters = (customArgs: CustomValidatorArgs, values) => {
  if (!isDefinedCustomArgs(customArgs)) {
    throw `Must provide valid customArgs: { field: '', value: '' } or { field: '', condition: () => true } in ValidationSchema`;
  }

  if (!isDefined(values) || typeof values !== 'object') {
    throw `Must provide valid "values" object`;
  }
};

const getValueByCustomArgs = (values, { field }: CustomValidatorArgs) =>
  field.split('.').reduce((value, key) => value[key], values);

const hasToBeRequired = (values, customArgs: CustomValidatorArgs): boolean => {
  const customArgFieldValue = getValueByCustomArgs(values, customArgs);

  return isDefined(customArgs.value)
    ? customArgFieldValue === customArgs.value
    : customArgs.condition(customArgFieldValue, values);
};

export const validator: FieldValidationFunctionSync<
  CustomValidatorArgs
> = fieldValidatorArgs => {
  const {
    value,
    values,
    message = defaultMessage,
    customArgs,
  } = fieldValidatorArgs;

  checkRequiredParameters(customArgs, values);

  let succeeded = true;

  if (hasToBeRequired(values, customArgs)) {
    const validationResult = Validators.required.validator({
      value,
      values,
      customArgs,
    }) as ValidationResult;

    succeeded = validationResult.succeeded;
  }

  return {
    succeeded,
    message: succeeded
      ? ''
      : parseMessageWithCustomArgs(
          (message as string) || defaultMessage,
          customArgs
        ),
    type: VALIDATOR_TYPE,
  };
};
