/* eslint-disable @typescript-eslint/no-explicit-any */
import { signIn } from 'next-auth/react'
import { enqueueSnackbar } from 'notistack'
import { useState } from 'react'
import Form from './fields/Form'
import InputText from './fields/InputText'
import SubmitButton from './fields/SubmitButton'

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false)

  const submitHandler = async (form: any) => {
    setIsLoading(true)

    const email = form.email.value
    const password = form.password.value

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    setIsLoading(false)

    if (res?.ok) {
      enqueueSnackbar('Login successfull.', { variant: 'success' })
    } else {
      enqueueSnackbar('Credential incorrect.', { variant: 'error' })
    }
  }

  return (
    <Form submitHandler={submitHandler}>
      <div className="space-y-1">
        <InputText label="Email" name="email" />
        <InputText label="Password" name="password" type="password" />
        <SubmitButton label="Sign In" loading={isLoading} className="mt-3" />
      </div>
    </Form>
  )
}

export default SignIn
