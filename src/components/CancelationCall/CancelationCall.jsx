const CancelationCall = ({ register }) => {
  return (
    <>
      <textarea
        {...register("Retention offer provided")}
        cols="30"
        rows="10"
        placeholder="Retention offer provided"
      />
      <input type="text" placeholder="Cancellation Status" {...register("Cancellation Status")} />
    </>
  );
};

export default CancelationCall;
