import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em:</label>
      <TaskInput
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        // ...register é um método do react-hook-form para capturar a informação do input (o spread operator é utilizado para que o elemento obtido (um input no caso) possa ser manipulado com todas as suas propriedades (onChange, onBlur, onSubmit, min, etc) acopladas)
        {...register("task")}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
        <option value="Projeto 5" />
      </datalist>
      <label htmlFor="minutesAmount">durante:</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        // ...register é um método do react-hook-form para capturar a informação do input (o spread operator é utilizado para que o elemento obtido (um input no caso) possa ser manipulado com todas as suas propriedades (onChange, onBlur, onSubmit, min, etc) acopladas)
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  );
}

export default NewCycleForm;
