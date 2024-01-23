/* eslint-disable @typescript-eslint/no-explicit-any */
import Heading from '@/components/Heading'
import Form from '@/components/fields/Form'
import InputText from '@/components/fields/InputText'
import SubmitButton from '@/components/fields/SubmitButton'
import MainLayout from '@/layouts/MainLayout'
import { useUpdateUserMutation } from '@/redux/api/usersApi'
import { NextLayout } from '@/types'
import { useSession } from 'next-auth/react'
import { enqueueSnackbar } from 'notistack'

const SettingsPage: NextLayout = () => {
  const { data: session, update } = useSession()
  const [updateUser, { isLoading }] = useUpdateUserMutation()

  const submitHandler = async (form: any) => {
    const name = form.name.value
    const email = form.email.value

    const res = await updateUser({ data: { name, email }, id: session?.user.id }).unwrap()

    if (res?.success) {
      enqueueSnackbar('User update successfull.', { variant: 'success' })
      await update({ name, email })
    } else {
      enqueueSnackbar('Somthing is wrong.', { variant: 'error' })
    }
  }

  return (
    <div>
      <Heading text="Profile Settings" />

      <Form submitHandler={submitHandler}>
        <div className="space-y-1">
          <InputText label="Name" name="name" defaultValue={session?.user.name} />
          <InputText label="Email" name="email" defaultValue={session?.user.email} />
          <SubmitButton label="Update" loading={isLoading} className="mt-3" />
        </div>
      </Form>
    </div>
  )
}

export default SettingsPage

SettingsPage.getLayout = page => <MainLayout>{page}</MainLayout>
