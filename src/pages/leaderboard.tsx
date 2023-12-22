import MainLayout from '@/layouts/MainLayout'
import { NextLayout } from '@/types'

const LeaderboardPage: NextLayout = () => {
  return (
    <div>
      <div>LeaderboardPage</div>
    </div>
  )
}

export default LeaderboardPage

LeaderboardPage.getLayout = page => <MainLayout>{page}</MainLayout>
