import { validator, setErrorMessage } from './validator';

const VALIDATOR_TYPE = 'REQUIRED_BY_FIELD';

describe('fonk-required-by-field-validator specs', () => {
  it('should return succeeded validation when it feeds value equals undefined', () => {
    // Arrange
    const value = void 0;
    const values = {};
    const customArgs = { field: 'test-field', value: 'test-value' };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals null', () => {
    // Arrange
    const value = null;
    const values = {};
    const customArgs = { field: 'test-field', value: 'test-value' };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals empty string', () => {
    // Arrange
    const value = '';
    const values = {};
    const customArgs = { field: 'test-field', value: 'test-value' };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should throw an error when it feeds values equals undefined', () => {
    // Arrange
    const value = '';
    const values = void 0;
    const customArgs = { field: 'test-field', value: 'test-value' };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual('Must provide valid "values" object');
    }
  });

  it('should throw an error when it feeds values equals null', () => {
    // Arrange
    const value = '';
    const values = null;
    const customArgs = { field: 'test-field', value: 'test-value' };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual('Must provide valid "values" object');
    }
  });

  it('should throw an error when it feeds values equals empty string', () => {
    // Arrange
    const value = '';
    const values = '';
    const customArgs = { field: 'test-field', value: 'test-value' };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual('Must provide valid "values" object');
    }
  });

  it('should throw an error when it feeds values equals string', () => {
    // Arrange
    const value = '';
    const values = 'test values';
    const customArgs = { field: 'test-field', value: 'test-value' };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual('Must provide valid "values" object');
    }
  });

  it('should throw an error when it feeds values equals number', () => {
    // Arrange
    const value = '';
    const values = 1;
    const customArgs = { field: 'test-field', value: 'test-value' };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual('Must provide valid "values" object');
    }
  });

  it('should throw an error when it feeds values equals empty array', () => {
    // Arrange
    const value = '';
    const values = [];
    const customArgs = { field: 'test-field', value: 'test-value' };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual('Must provide valid "values" object');
    }
  });

  it('should throw an error when it feeds values equals array', () => {
    // Arrange
    const value = '';
    const values = [1, 2];
    const customArgs = { field: 'test-field', value: 'test-value' };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual('Must provide valid "values" object');
    }
  });

  it('should throw an error when it feeds customArgs equals undefined', () => {
    // Arrange
    const value = '';
    const values = {};
    const customArgs = void 0;

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual(
        `Must provide valid customArgs: { field: '', value: '' } or { field: '', condition: () => true } in ValidationSchema`
      );
    }
  });

  it('should throw an error when it feeds customArgs equals null', () => {
    // Arrange
    const value = '';
    const values = {};
    const customArgs = null;

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual(
        `Must provide valid customArgs: { field: '', value: '' } or { field: '', condition: () => true } in ValidationSchema`
      );
    }
  });

  it('should throw an error when it feeds customArgs.field equals undefined', () => {
    // Arrange
    const value = '';
    const values = {};
    const customArgs = { field: void 0 };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual(
        `Must provide valid customArgs: { field: '', value: '' } or { field: '', condition: () => true } in ValidationSchema`
      );
    }
  });

  it('should throw an error when it feeds customArgs.field equals null', () => {
    // Arrange
    const value = '';
    const values = {};
    const customArgs = { field: null };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual(
        `Must provide valid customArgs: { field: '', value: '' } or { field: '', condition: () => true } in ValidationSchema`
      );
    }
  });

  it('should throw an error when it feeds customArgs.field equals empty string', () => {
    // Arrange
    const value = '';
    const values = {};
    const customArgs = { field: '' };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual(
        `Must provide valid customArgs: { field: '', value: '' } or { field: '', condition: () => true } in ValidationSchema`
      );
    }
  });

  it('should throw an error when it feeds customArgs.value and customArgs.condition equals undefined', () => {
    // Arrange
    const value = '';
    const values = {};
    const customArgs = {
      field: 'test-field',
      value: void 0,
      condition: void 0,
    };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual(
        `Must provide valid customArgs: { field: '', value: '' } or { field: '', condition: () => true } in ValidationSchema`
      );
    }
  });

  it('should throw an error when it feeds customArgs.value and customArgs.condition equals null', () => {
    // Arrange
    const value = '';
    const values = {};
    const customArgs = {
      field: 'test-field',
      value: null,
      condition: null,
    };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual(
        `Must provide valid customArgs: { field: '', value: '' } or { field: '', condition: () => true } in ValidationSchema`
      );
    }
  });

  it('should throw an error when it feeds customArgs.value equals empty string and customArgs.condition equals null or undefined', () => {
    // Arrange
    const value = '';
    const values = {};
    const customArgs = {
      field: 'test-field',
      value: '',
      condition: null,
    };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual(
        `Must provide valid customArgs: { field: '', value: '' } or { field: '', condition: () => true } in ValidationSchema`
      );
    }
  });

  it('should throw an error when it feeds value equals empty string, customArgs.field equals undefined and customArgs.condition return false using values', () => {
    // Arrange
    const value = '';
    const values = { 'test-field': 'test' };
    const customArgs = {
      field: void 0,
      value: void 0,
      condition: (fieldValue, values) =>
        values['test-field'] === 'test1' || values['test-field'] === 'test2',
    };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual(
        `Must provide valid customArgs: { field: '', value: '' } or { field: '', condition: () => true } in ValidationSchema`
      );
    }
  });

  it('should return succeeded validation when it feeds value equals empty string, customArgs.field and customArgs.value does not match with values', () => {
    // Arrange
    const value = '';
    const values = { 'test-field': 'anotherValue' };
    const customArgs = {
      field: 'test-field',
      value: 'test-value',
      condition: null,
    };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals empty string, customArgs.field and customArgs.value matchs with values', () => {
    // Arrange
    const value = '';
    const values = { 'test-field': 'test-value' };
    const customArgs = {
      field: 'test-field',
      value: 'test-value',
      condition: null,
    };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Please fill in this mandatory field.',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals string, customArgs.field and customArgs.value matchs with values', () => {
    // Arrange
    const value = 'test';
    const values = { 'test-field': 'test-value' };
    const customArgs = {
      field: 'test-field',
      value: 'test-value',
      condition: null,
    };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals empty string, customArgs.field and customArgs.condition return false using fieldValue', () => {
    // Arrange
    const value = '';
    const values = { 'test-field': 'test' };
    const customArgs = {
      field: 'test-field',
      value: void 0,
      condition: fieldValue => fieldValue === 'test1' || fieldValue === 'test2',
    };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals empty string, customArgs.field and customArgs.condition return true using fieldValue', () => {
    // Arrange
    const value = '';
    const values = { 'test-field': 'test2' };
    const customArgs = {
      field: 'test-field',
      value: void 0,
      condition: fieldValue => fieldValue === 'test1' || fieldValue === 'test2',
    };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Please fill in this mandatory field.',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals string, customArgs.field and customArgs.condition return true using fieldValue', () => {
    // Arrange
    const value = 'test';
    const values = { 'test-field': 'test2' };
    const customArgs = {
      field: 'test-field',
      value: void 0,
      condition: fieldValue => fieldValue === 'test1' || fieldValue === 'test2',
    };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals empty string, customArgs.field and customArgs.condition return false using values', () => {
    // Arrange
    const value = '';
    const values = { 'test-field': 'test' };
    const customArgs = {
      field: 'test-field',
      value: void 0,
      condition: (fieldValue, values) =>
        values['test-field'] === 'test1' || values['test-field'] === 'test2',
    };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals empty string, customArgs.field and customArgs.condition return true using values', () => {
    // Arrange
    const value = '';
    const values = { 'test-field': 'test1' };
    const customArgs = {
      field: 'test-field',
      value: void 0,
      condition: (fieldValue, values) =>
        values['test-field'] === 'test1' || values['test-field'] === 'test2',
    };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Please fill in this mandatory field.',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals string, customArgs.field and customArgs.condition return true using values', () => {
    // Arrange
    const value = 'test';
    const values = { 'test-field': 'test1' };
    const customArgs = {
      field: 'test-field',
      value: void 0,
      condition: (fieldValue, values) =>
        values['test-field'] === 'test1' || values['test-field'] === 'test2',
    };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals empty string, nested field is undefined', () => {
    // Arrange
    const value = '';
    const values = { nested: undefined };
    const customArgs = {
      field: 'nested.field',
      value: 'test1',
    };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals empty string, nested is undefined and condition is fieldValue exists', () => {
    // Arrange
    const value = '';
    const values = { nested: undefined };
    const customArgs = {
      field: 'nested.field',
      condition: fieldValue => !Boolean(fieldValue),
    };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Please fill in this mandatory field.',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals empty string, nested field and it matchs with value', () => {
    // Arrange
    const value = '';
    const values = { nested: { field: 'test1' } };
    const customArgs = {
      field: 'nested.field',
      value: 'test1',
    };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Please fill in this mandatory field.',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals string, nested field and it matchs with value', () => {
    // Arrange
    const value = 'test value';
    const values = { nested: { field: 'test1' } };
    const customArgs = {
      field: 'nested.field',
      value: 'test1',
    };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should overwrite default message when it feeds value and message', () => {
    // Arrange
    const value = '';
    const values = {
      'test-field': 'test-value',
    };
    const customArgs = { field: 'test-field', value: 'test-value' };
    const message = 'other message';

    // Act
    const result = validator({ value, values, customArgs, message });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: VALIDATOR_TYPE,
    });
  });

  it('should overwrite default message when it feeds value and message with interpolation', () => {
    // Arrange
    const value = '';
    const values = {
      'test-field': 'test-value',
    };
    const customArgs = { field: 'test-field', value: 'test-value' };
    const message = 'other message with interpolation {{field}}';

    // Act
    const result = validator({ value, values, customArgs, message });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'other message with interpolation test-field',
      type: VALIDATOR_TYPE,
    });
  });

  it('should overwrite default message when it feeds value and calls to setErrorMessage', () => {
    // Arrange
    const value = '';
    const values = {
      'test-field': 'test-value',
    };
    const customArgs = { field: 'test-field', value: 'test-value' };

    setErrorMessage('other message');

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: VALIDATOR_TYPE,
    });
  });
});
