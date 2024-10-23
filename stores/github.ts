import type { GitHubUser } from '~/types'

export const useGithubStore = defineStore('github', () => {
  const _sfenxTeamUsernames = [
    'atlasyigitaydin',
    'xaprier',
    'MuratBahadirKayihan',
    'TufanPirihan',
    'bura2k',
    'MahserMidillisi',
  ]

  const sfenxTeam = ref<GitHubUser[]>()

  const fetchSfenxTeam = async () => {
    const _temp: GitHubUser[] = []
    _sfenxTeamUsernames.forEach(async (username: string) => {
      await fetch(`https://api.github.com/users/${username}`)
        .then(async (_res) => {
          _temp.push(await _res.json())
        })
    })
    sfenxTeam.value = _temp
  }

  return {
    sfenxTeam,
    fetchSfenxTeam,
  }
})
