import SignIn from './SignIn'
import SignUp from './SignUp'

const Authentication = () => {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <div>SignIn</div>
          <SignIn />
        </div>

        <div>
          <div>SignUp</div>
          <SignUp />
        </div>
      </div>
    </div>
  )
}

export default Authentication
