/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUserSignUpMutation } from '@/redux/api/authApi'
import { signIn } from 'next-auth/react'
import { enqueueSnackbar } from 'notistack'
import Form from './fields/Form'
import InputText from './fields/InputText'
import SubmitButton from './fields/SubmitButton'

const SignUp = () => {
  const [signUp, { isLoading }] = useUserSignUpMutation()

  const submitHandler = async (form: any) => {
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value

    const res = await signUp({ data: { name, email, password } }).unwrap()

    if (res?.success) {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false
      })

      if (res?.ok) {
        enqueueSnackbar('SignUp successfull.', { variant: 'success' })
      } else {
        enqueueSnackbar('Somthing is wrong.', { variant: 'error' })
      }
    } else {
      enqueueSnackbar('Somthing is wrong.', { variant: 'error' })
    }
  }

  return (
    <Form submitHandler={submitHandler}>
      <div className="space-y-1">
        <InputText label="Full Name" name="name" />
        <InputText label="Email" name="email" />
        <InputText label="Password" name="password" type="password" />
        <SubmitButton label="Sign Up" loading={isLoading} className="mt-3" />
      </div>
    </Form>
  )
}

export default SignUp
