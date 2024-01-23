import Heading from '@/components/Heading'
import MainLayout from '@/layouts/MainLayout'
import { NextLayout } from '@/types'

const ResultsPage: NextLayout = () => {
  return (
    <div>
      <Heading text="My Results" />
    </div>
  )
}

export default ResultsPage

ResultsPage.getLayout = page => <MainLayout>{page}</MainLayout>
