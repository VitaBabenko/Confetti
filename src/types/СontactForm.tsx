export type ContactFormInputs = {
  name: {
    name: string;
    label: string;
    placeholder: string;
    pattern: {
      value: string;
      message: string;
    };
  };
  email: {
    name: string;
    label: string;
    placeholder: string;
    pattern: {
      value: string;
      message: string;
    };
  };
  message: {
    name: string;
    label: string;
    placeholder: string;
  };
  btn: {
    label: string;
  };
  required: boolean;
};
