import { useEfetch } from './hooks/useFetch';

interface Repository {
  full_name: string;
  description: string;
}

function App() {

  const { data: repositories } = useEfetch<Repository[]>('https://api.github.com/users/matheussesh/repos')

  return (
    <ul>{repositories?.map(repo => {
      return(
        <li>{repo.full_name}
          <strong>{repo.full_name}</strong>
          <p>{repo.description}</p>
        </li>
      )
    })}</ul>
  )
}

export default App
