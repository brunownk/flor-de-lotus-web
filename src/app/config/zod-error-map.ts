import { z } from "zod";
import { translateHoF } from "@utils/translate-hof";

const translate = translateHoF('zod-default-errors');

const customErrorMap: z.ZodErrorMap = (issue) => {
  switch (issue.code) {
    case z.ZodIssueCode.too_small:
      if (issue.minimum === 1) {
        return { message: translate('required') };
      } else {
        return { message: translate('minLength').replace('{minLength}', String(issue.minimum)) };
      }

    case z.ZodIssueCode.too_big:
      return { message: translate('maxLength').replace('{maxLength}', String(issue.maximum)) };

    case z.ZodIssueCode.invalid_string:
      if (issue.validation === 'email') {
        return { message: translate('email') };

      } else if (issue.validation === 'url') {
        return { message: translate('url') };

      } else if (issue.validation === 'uuid') {
        return { message: translate('uuid') };
      }
      break;

    case z.ZodIssueCode.invalid_type:
      if (issue.expected === 'number') {
        return { message: translate('number') };

      } else if (issue.expected === 'integer') {
        return { message: translate('integer') };
      }

      break;
  }

  return { message: translate('required') };
};

// Set custom error map globally for Zod
z.setErrorMap(customErrorMap);

export default customErrorMap;
