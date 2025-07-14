import React from 'react'
import { Link } from 'react-router-dom'

const PhotoNavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Photos</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">AddPhoto</Link>
        <Link class="nav-link" to="/search">SearchPhoto</Link>
        <Link class="nav-link" to="/delete">DeletePhoto</Link>
        <Link class="nav-link" to="/viewall">ViewAllPhotos</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default PhotoNavBar