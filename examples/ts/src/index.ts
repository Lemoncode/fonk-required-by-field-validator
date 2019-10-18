import { ValidationSchema, createFormValidation } from '@lemoncode/fonk';
import { requiredByField } from '@lemoncode/fonk-required-by-field-validator';

const myFormValues = {
  person: 'John',
  country: 'U.S.A',
  state: '',
};

const validationSchema: ValidationSchema = {
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

const formValidation = createFormValidation(validationSchema);

Promise.all([
  formValidation.validateField('state', '', myFormValues),
  formValidation.validateField('state', 'California', myFormValues),
]).then(([failedResult, succeededResult]) => {
  document.getElementById('app').innerHTML = `
<div style="flex-grow: 1;margin-left:2rem;">
  <h2>Example with failed result:</h2>

<pre>
  formValidation.validateField('state', '', myFormValues)
</pre>

  <h3>Result: </h3>
<pre>
${JSON.stringify(failedResult, null, 2)}
</pre>
</div>

<div style="flex-grow: 1;">
  <h2>Example with succeeded result:</h2>

<pre>
formValidation.validateField('state', 'California', myFormValues)
</pre>

  <h3>Result: </h3>
<pre>
${JSON.stringify(succeededResult, null, 2)}
</pre>
</div>
`;
});
