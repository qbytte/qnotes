import "./StandardCall.css";

const StandardCall = ({ register }) => {
  return (
    <>
      <textarea
        {...register("Information Provided")}
        cols="30"
        rows="10"
        placeholder="Information provided"
      />
      <textarea
        {...register("Information Updated on Account")}
        cols="30"
        rows="10"
        placeholder="Information updated on account"
      />
    </>
  );
};

export default StandardCall;
