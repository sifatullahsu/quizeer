import MainLayout from '@/layouts/MainLayout'
import { NextLayout } from '@/types'

const SettingsPage: NextLayout = () => {
  return (
    <div>
      <div>SettingsPage</div>
    </div>
  )
}

export default SettingsPage

SettingsPage.getLayout = page => <MainLayout>{page}</MainLayout>
