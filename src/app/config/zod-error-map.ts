import { z } from 'zod';
import { translateHoF } from '@utils/translate-hof';

const translate = translateHoF('zod-default-errors');

const customErrorMap: z.ZodErrorMap = (issue) => {
  switch (issue.code) {
    case z.ZodIssueCode.too_small:
      return handleToSmall(issue);

    case z.ZodIssueCode.too_big:
      return handleTooBig(issue);

    case z.ZodIssueCode.invalid_string:
      return handleInvalidString(issue);

    case z.ZodIssueCode.invalid_type:
      return handleInvalidType(issue);

    default:
      return { message: translate('required') };
  }
};

const handleToSmall = (issue: z.ZodTooSmallIssue) => {
  switch (issue.type) {
    case 'number':
      return {
        message: translate('minValue').replace(
          '{minValue}',
          String(issue.minimum),
        ),
      };
    default:
      if (issue.minimum === 1) {
        return { message: translate('required') };
      }
      return {
        message: translate('minLength').replace(
          '{minLength}',
          String(issue.minimum),
        ),
      };
  }
};

const handleTooBig = (issue: z.ZodTooBigIssue) => {
  switch (issue.type) {
    case 'number':
      return {
        message: translate('maxValue').replace(
          '{maxValue}',
          String(issue.maximum),
        ),
      };
    default:
      return {
        message: translate('maxLength').replace(
          '{maxLength}',
          String(issue.maximum),
        ),
      };
  }
};

const handleInvalidString = (issue: z.ZodInvalidStringIssue) => {
  switch (issue.validation) {
    case 'email':
      return { message: translate('email') };
    case 'url':
      return { message: translate('url') };
    case 'uuid':
      return { message: translate('uuid') };
    default:
      return { message: translate('invalid') };
  }
};

const handleInvalidType = (issue: z.ZodInvalidTypeIssue) => {
  switch (issue.expected) {
    case 'number':
      return { message: translate('number') };
    case 'integer':
      return { message: translate('integer') };
    default:
      return { message: translate('required') };
  }
};

// Set custom error map globally for Zod
z.setErrorMap(customErrorMap);

export default customErrorMap;
