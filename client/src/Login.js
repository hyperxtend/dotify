import React from "react"
import { Container } from "react-bootstrap"
import './login.css'

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=a499adc063e1439c944f7ca9c531ee82&response_type=code&redirect_uri=https://dotify-hyperxtend.herokuapp.com&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="login-container">
      <h1>dotify</h1>
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </div>
    </Container>
  )
}
