import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import { createUser, getUserInfoByEmail } from "../../services/UserServices.jsx"
import { Card, CardTitle } from "reactstrap"

export const Register = (props) => {
  const [passwordCheck, setPasswordCheck] = useState('')
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    isStaff: false,
    leaguePoints: 0
  })
  let navigate = useNavigate()

  const registerNewUser = () => {
    createUser(user).then(() => {
      navigate("/login")
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    getUserInfoByEmail(user.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists")
      } else {
        if (user.password !== passwordCheck) {
          window.alert("Passwords must match!")
        } else {
          // Good email, create user.
          registerNewUser()
        }
      }
    })
  }

  const updateUser = (evt) => {
    const copy = { ...user }
    copy[evt.target.id] = evt.target.value
    setUser(copy)
  }

  return (
    <main className="container-login">
      <h1 className="textDark">Verti Comps</h1>
      <section>
        <form className="form-login" onSubmit={handleRegister}>
          <Card className="card">
          <CardTitle><h2 className="margin textDark">Please Register</h2></CardTitle>
          <fieldset className="marginSides">
            <div className="form-group">
              <input
                onChange={updateUser}
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset className="margin">
            <div className="form-group">
              <input
                onChange={updateUser}
                type="email"
                id="email"
                className="form-control"
                placeholder="Email address"
                required
              />
            </div>
          </fieldset>
          <fieldset className="marginSides">
            <div className="form-group">
              <input
                onChange={(event) => {setPasswordCheck(event.target.value)}}
                type="password"
                id="passwordCheck"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
          </fieldset>
          <fieldset className="margin">
            <div className="form-group">
              <input
                onChange={updateUser}
                type="password"
                id="password"
                className="form-control"
                placeholder="Re-Enter Password"
                required
              />
            </div>
          </fieldset>
          <fieldset className="margin">
            <div className="form-group">
              <label className="textDark">
                <input
                  onChange={(evt) => {
                    const copy = { ...user }
                    copy.isStaff = evt.target.checked
                    setUser(copy)
                  }}
                  type="checkbox"
                  id="isStaff"
                />
                I am an administrator{" "}
              </label>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <button className="login-btn btn-color" type="submit">
                Register
              </button>
            </div>
          </fieldset>
          </Card>
        </form>
      </section>
      <section>
        <Link to="/login" className="margin textDark">Already A Member?</Link>
      </section>
    </main>
  )
}
