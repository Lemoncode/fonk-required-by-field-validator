# fonk-required-by-field-validator

[![CircleCI](https://badgen.net/github/status/Lemoncode/fonk-required-by-field-validator/master?icon=circleci&label=circleci)](https://circleci.com/gh/Lemoncode/fonk-required-by-field-validator/tree/master)
[![NPM Version](https://badgen.net/npm/v/@lemoncode/fonk-required-by-field-validator?icon=npm&label=npm)](https://www.npmjs.com/package/@lemoncode/fonk-required-by-field-validator)
[![bundle-size](https://badgen.net/bundlephobia/min/@lemoncode/fonk-required-by-field-validator)](https://bundlephobia.com/result?p=@lemoncode/fonk-required-by-field-validator)

This is a [fonk](https://github.com/Lemoncode/fonk) microlibrary that brings validation capabilities to:

- Validate if a field of a form is required by another field.

How to add it to an existing form validation schema:

We have the following form model:

```
const myFormValues = {
  person : 'John',
  country: 'U.S.A',
  state: 'California',
}
```

We can add a requiredByField validation to the myFormValues

```javascript
import { requiredByField } from '@lemoncode/fonk-required-by-field-validator';

const validationSchema = {
  field: {
    state: [
      {
        validator: requiredByField.validator,
        customArgs: {
          field: 'country',
          value: 'U.S.A',
        },
      },
    ],
  },
};
```

- Or with a `condition`:

```javascript
import { requiredByField } from '@lemoncode/fonk-required-by-field-validator';

const validationSchema = {
  field: {
    state: [
      {
        validator: requiredByField.validator,
        customArgs: {
          field: 'country',
          condition: fieldValue =>
            fieldValue === 'U.S.A' || fieldValue === 'Australia',
        },
      },
    ],
  },
};
```

- Another `condition`:

```javascript
import { requiredByField } from '@lemoncode/fonk-required-by-field-validator';

const validationSchema = {
  field: {
    state: [
      {
        validator: requiredByField.validator,
        customArgs: {
          field: 'country',
          condition: (fieldValue, values) =>
            fieldValue === 'U.S.A' && values.person === 'John',
        },
      },
    ],
  },
};
```

You can customize the error message displayed in two ways:

- Globally, replace the default error message in all validationSchemas (e.g. porting to spanish):

```javascript
import { requiredByField } from '@lemoncode/fonk-required-by-field-validator';

requiredByField.setErrorMessage('El campo es requerido');
```

- Locally just override the error message for this validationSchema:

```javascript
import { requiredByField } from '@lemoncode/fonk-required-by-field-validator';

const validationSchema = {
  field: {
    state: [
      {
        validator: requiredByField.validator,
        customArgs: {
          field: 'country',
          value: 'U.S.A',
        },
        message: 'Required field',
      },
    ],
  },
};
```

Please, refer to [fonk](https://github.com/Lemoncode/fonk) to know more.

## License

[MIT](./LICENSE)

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
