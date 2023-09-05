import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { CyclesContext } from '../../../../contexts/CyclesContexts'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="estudar" />
        <option value="trabalhar" />
        <option value="tomar remédios" />
      </datalist>

      <label htmlFor="task">durante</label>

      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5} /* setas desabilitadas no CSS */
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minuos.</span>
    </FormContainer>
  )
}
