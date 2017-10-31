import React from 'react'
import Link from 'gatsby-link'

const rootPath = (process.env.NODE_ENV === `production`) ?
  '/cmarlow-static'
  : ''
const photos = [
  'DSCF6519.jpg',
  'DSCF6557.jpg',
  'DSCF6561.jpg',
  'DSCF6587-2.jpg',
  'DSCF6632-2.jpg',
  'DSCF6555.jpg',
  'DSCF6559.jpg',
  'DSCF6566.jpg',
  'DSCF6598-2.jpg',
  'DSCF6645-2.jpg',
]

const Photos = ({ photos }) =>
  <div>
    { photos
        .map(photo => `${rootPath}/images/high-park/${photo}`)
        .map(url => <img src={url} />)
    }
  </div>

const SecondPage = () => (
  <div>
    <h1>A walk in High Park</h1>
    <Photos photos={photos} />
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
