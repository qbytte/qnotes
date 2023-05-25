const ActivationCall = ({ register }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Calling from"
        {...register("Calling from")}
      />
      <input type="number" placeholder="ICCID" {...register("ICCID")} />
      <input
        type="text"
        placeholder="Plan Validation"
        {...register("Plan Validation")}
      />
      <input
        type="text"
        placeholder="Current Location"
        {...register("Current Location")}
      />
      <input
        type="text"
        placeholder="Liaquid Damage"
        {...register("Liquid Damage")}
      />
      <input type="number" placeholder="IMEI" {...register("IMEI")} />
      <input
        type="text"
        placeholder="Black Listed"
        {...register("Black Listed")}
      />
      <input
        type="text"
        placeholder="Error Message"
        {...register("Error Message")}
      />
      <textarea
        {...register("Troubleshooting Steps Followed")}
        cols="30"
        rows="10"
        placeholder="Troubleshooting steps followed"
      />
      <textarea
        {...register("Information updated on account")}
        cols="30"
        rows="10"
        placeholder="Information updated on account"
      />
    </>
  );
};

export default ActivationCall;
