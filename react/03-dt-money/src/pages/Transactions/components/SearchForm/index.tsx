import { useForm } from 'react-hook-form';
import { MagnifyingGlass } from 'phosphor-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '../../../../contexts/TransactionsContext';
import { SearchFormContainer } from './style';

/**
 * Por que um componente renderiza?
 * - Hooks changed (mudou estado, contexto, reducer);
 * - Props changed (mudou propriedades);
 * Parent rerendered (componente pai renderizou);
 * 
 * Qual o fluxo de renderização?
* 1. O React recria o HTML da interface daquele componente
* 2. Compara a versão do HTML recriada com a versão anterior
* 3. SE mudou alguma coisa, ele reescreve o HTML na tela
* 
* Memo:

* 0. Hooks changed | Props changed (deep comparison) 
* 0.1 Comparar com a versão 0.1 dos hooks e forms
* 0.2 SE mudou algo, ele vai permitir a nova renderização
*/

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

// Exemplo de uso
// import { memo } from 'react';
//function SearchFormComponent() {
export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions;
    }
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type='text'
        placeholder='Busque por transações'
        {...register('query')}
      />

      <button type='submit' disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}

// Exemplo de uso
//export const SearchForm = memo(SearchFormComponent);
