import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom"
import { queryClient } from "../services/queryClient";
import { Repos, Repository } from "./Repos";

export function Repo() {
  const params = useParams()
  const currentParams = params['*'] as string;

  const useClient = useQueryClient()

  async function handleChangeDescription() {
    // await useClient.invalidateQueries('repos');

    const previousRepos = queryClient.getQueryData<Repository[]>('repos')

    if(previousRepos) {
      const nextRepo = previousRepos.map(repo => {
        if(repo.full_name === currentParams){
          return { ...repo, description: "testando"}
        }else{
          return repo;
        }
      })

      queryClient.setQueryData('repos', nextRepo);
    }
  }

  return (
    <div>
      <h1>{currentParams}</h1>
      <button onClick={handleChangeDescription} >change</button>
    </div>
  )
}