import "./_FormInput.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className={"group"}>
      {/*We are declaring input fields before label for styling purpose*/}
      <input className={"form-input"} {...otherProps} />
      {/*if there is label value then render label input*/}
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
