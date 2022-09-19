import { FormInputLabel, Group, Input } from "./FormInput.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      {/*We are declaring input fields before label for styling purpose*/}
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
