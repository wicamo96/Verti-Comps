import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { getUserInfoByEmail } from "../../services/UserServices.jsx"
import { Card, CardBody, CardTitle } from "reactstrap"

export const Login = () => {
    const [email, setEmail] = useState("chrisc@email.com")
    const [password, setPassword] = useState("crimpinainteasy")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        getUserInfoByEmail(email).then((foundUsers) => {
            if (foundUsers.length === 1) {
                const user = foundUsers[0]
                if(user.password !== password) {
                    window.alert("Invalid password")
                } else {
                    
                    localStorage.setItem(
                        "verti_user",
                        JSON.stringify({
                            id: user.id,
                            isStaff: user.isStaff,
                        })
                    )
                    navigate("/")
                }
            } else {
                window.alert("Invalid login")
            }
        })
    }

  return (
    <main className="container-login">
      <h1 className="textDark">Verti Comps</h1>
      <section>
        <form className="form-login" onSubmit={handleLogin}>
          <Card className="card">
            <CardBody>
            <CardTitle><h2 className="margin textDark">Please sign in</h2></CardTitle>
            <fieldset className="margin">
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                  className="form-control"
                  placeholder="Email address"
                  required
                  autoFocus
                />
              </div>
            </fieldset>
            <fieldset className="margin">
              <div className="form-group">
                <input
                  type="password"
                  value={password}
                  onChange={(evt) => setPassword(evt.target.value)}
                  className="form-control"
                  placeholder="Password"
                  required
                  autoFocus
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <button className="login-btn margin btn-color" type="submit">
                  Sign in
                </button>
              </div>
            </fieldset>
            </CardBody>
          </Card>
        </form>
      </section>
      <section>
        <Link to="/register" className="textDark">Not a member yet?</Link>
      </section>
    </main>
  )
}
