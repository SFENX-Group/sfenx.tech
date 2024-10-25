import appConfig from '~/app.config'
import type { GitHubUser } from '~/types'

export const useGithubStore = defineStore('github', () => {
  const _sfenxTeamUsernames = [
    'atlasyigitaydin',
    'xaprier',
    'MuratBahadirKayihan',
    'TufanPirihan',
    'bura2k',
    'MahserMidillisi',
    'synax01',
  ]

  const sfenxTeam = ref<GitHubUser[]>()

  const fetchSfenxTeam = async () => {
    const _temp: GitHubUser[] = []
    const config = useRuntimeConfig()
    const token = config.public.GIT_AUTH_TOKEN

    await Promise.all(
      _sfenxTeamUsernames.map(async (username: string) => {
        await fetch(`https://api.github.com/users/${username}`, {
          headers: {
            Authorization: `token ${token}`,
          },
        })
          .then(async (_res) => {
            _temp.push(await _res.json())
          })
      }),
    )

    sfenxTeam.value = _temp
  }

  return {
    sfenxTeam,
    fetchSfenxTeam,
  }
})
