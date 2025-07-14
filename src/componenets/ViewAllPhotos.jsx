import React, { useEffect, useState } from 'react'
import PhotoNavBar from './PhotoNavBar'
import axios from 'axios'

const ViewAllPhotos = () => {
  const [photoData, ChangephotoData] = useState(
    []
  )
  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(
      (response) => {
        ChangephotoData(response.data)
      }
    ).catch()
  }
  useEffect(() => { fetchData() }, [])
  return (
    <div>
      <div className="container">
        <PhotoNavBar />
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">

              {photoData.map(
                (value, index) => {
                  return (
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                      <div class="card">
                        <img src={value.url} className="card-img-top" alt={value.title} style={{ objectFit: 'cover', height: '200px' }} />
                        <div class="card-body">
                          <h5 class="card-title">{value.title}</h5>
                          <img src={value.thumbnailUrl} alt="Thumbnail" className="img-thumbnail mt-2" style={{ width: '75px', height: '75px' }} />
                        </div>
                      </div>
                    </div>
                  )
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAllPhotos