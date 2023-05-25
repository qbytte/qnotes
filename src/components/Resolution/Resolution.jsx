const Resolution = ({ register }) => {
  return (
    <>
      <textarea
        placeholder="Resolution provided"
        cols="30"
        rows="10"
        required
        {...register("Resolution")}
      />
      <input type="submit" name="" id="" />
    </>
  );
};

export default Resolution;
