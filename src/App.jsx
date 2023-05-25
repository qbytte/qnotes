import { useState } from "react";
import { useForm } from "react-hook-form";
import StandardCall from "./components/StandardCall/StandardCall";
import ActivationCall from "./components/ActivationCall/ActivationCall";
import CancelationCall from "./components/CancelationCall/CancelationCall";
import PortInCall from "./components/PortInCall/PortInCall";
import Resolution from "./components/Resolution/Resolution";
import "./App.css";

const options = [
  "Select call type",
  "Standard call",
  "Activation call",
  "Cancelation call",
  "Port-in call",
  "Resolution",
];

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="App">
      <div className="main-container">
        <h2>QNotes</h2>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            let result = "";
            for (const key in data) {
              result += `${key}: ${data[key]} `;
            }

            alert(result);

            setSelected(options[0]);
            reset();
          })}
        >
          <input
            type="text"
            placeholder="Verified"
            required
            {...register("Verified")}
          />
          <input type="text" placeholder="CCI" required {...register("CCI")} />
          <input
            type="number"
            placeholder="CB#"
            required
            {...register("CB#")}
          />

          <select
            name=""
            id=""
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {options.map((option) =>
              option === "Select call type" ? (
                <option value={option} key={option} disabled hidden>
                  {option}
                </option>
              ) : (
                <option value={option} key={option}>
                  {option}
                </option>
              )
            )}
          </select>

          {selected === "Standard call" && <StandardCall register={register} />}
          {selected === "Activation call" && (
            <ActivationCall register={register} />
          )}
          {selected === "Cancelation call" && (
            <CancelationCall register={register} />
          )}
          {selected === "Port-in call" && <PortInCall />}
          {selected === "Resolution" && <Resolution register={register} />}
        </form>
      </div>
    </div>
  );
}

export default App;
