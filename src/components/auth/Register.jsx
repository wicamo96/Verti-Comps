import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import { createUser, getUserInfoByEmail } from "../../services/UserServices.jsx"

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
    createUser(user).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "verti_user",
          JSON.stringify({
            id: createdUser.id,
            staff: createdUser.isStaff,
          })
        )

        navigate("/")
      }
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
    <main style={{ textAlign: "center" }}>
      <form className="form-login" onSubmit={handleRegister}>
        <h1>Verti Comps</h1>
        <h2>Please Register</h2>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="fullName"
              className="form-control"
              placeholder="Enter your name"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
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
        <fieldset>
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
        <fieldset>
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
        <fieldset>
          <div className="form-group">
            <label>
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
            <button className="login-btn btn-info" type="submit">
              Register
            </button>
          </div>
        </fieldset>
        <section>
          <Link to="/login">Already A Member?</Link>
        </section>
      </form>
    </main>
  )
}
