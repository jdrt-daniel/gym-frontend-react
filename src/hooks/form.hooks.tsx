export const useValidateForm = (formik) => {
  const isFormFieldInvalid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : null;
  };
  return {
    isFormFieldInvalid,
    getFormErrorMessage,
  };
};
