import Heading from '@/components/Heading'
import Leaderboard from '@/components/Leaderboard'
import MainLayout from '@/layouts/MainLayout'
import { useGetPerformancesQuery } from '@/redux/api/performanceApi'
import { NextLayout, iPerformance } from '@/types'
import { useRouter } from 'next/router'

const LeaderboardPage: NextLayout = () => {
  const { id } = useRouter().query
  const { data: leaderboard, isLoading } = useGetPerformancesQuery({ query: `quiz_id=${id}` })

  if (isLoading) return <div>Loading</div>

  return (
    <div>
      <Heading text="Leaderboard" />
      <div className="grid grid-cols-1 gap-5">
        {leaderboard.data.map((performance: iPerformance) => (
          <Leaderboard key={performance.id} performance={performance} />
        ))}
      </div>
      {leaderboard.data.length === 0 && <div>No records found.</div>}
    </div>
  )
}

export default LeaderboardPage

LeaderboardPage.getLayout = page => <MainLayout>{page}</MainLayout>
