import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [data, setData] = useState()
  const BASE_URL = process.env.REACT_APP_BACKEND_URL
  useEffect(() => {
    axios.get(BASE_URL + 'api/admin/dashboard').then((resp) => {
      setData(resp.data)
    })
  }, [])
  return (
    <>
      <div className='content-wrapper p-2'>
        <div
          className='container-fluid shadow p-2 bg-white'
          style={{ minHeight: '88vh' }}
        >
          <h4 className='p-2 border-bottom border-success'>Admin Dashboard</h4>
          <div class='row'>
            <div class='col-sm-3'>
              <div class='card shadow m-2'>
                <div class='card-body p-3'>
                  <img src="/dash/user.png" alt="" />
                  <Link to='/customers'><h2>Registered Users</h2></Link>
                  <h2>{data?.customers}</h2>
                </div>

                {/* <div class='card-footer'>
                  <Link to='/customers'>View Details</Link>
                </div> */}
              </div>
            </div>
            <div class='col-sm-3'>
              <div class='card shadow m-2'>
                <div class='card-body p-3'>
                  <img src="/dash/logo.png" alt="" />
                  <Link to='/companies'><h2>Companies</h2></Link>
                  <h2>{data?.companies}</h2>
                </div>
                {/* <div class='card-footer'>
                  <Link to='/companies'>View Details</Link>
                </div> */}
              </div>
            </div>

            <div class='col-sm-3'>
              <div class='card shadow m-2'>
                <div class='card-body p-3'>
                  <img src="/dash/v2.png" alt="" />
                  <Link to='/variants'><h2>Variants</h2></Link>
                  <h2>{data?.variants}</h2>
                </div>
                {/* <div class='card-footer'>
                  <Link to='/variants'>View Details</Link>
                </div> */}
              </div>
            </div>

            <div class='col-sm-3'>
              <div class='card shadow m-2'>
                <div class='card-body p-3'>
                  <img src="/dash/v.png" alt="" />
                  <Link to='/cars'><h2>Cars</h2></Link>
                  <h2>{data?.cars}</h2>
                </div>
              </div>
            </div>

            <div class='col-sm-3'>
              <div class='card shadow m-2'>
                <div class='card-body p-3'>
                  <img src="/dash/r.png" alt="" />
                  <Link to='/reports'><h2>Reports</h2></Link>
                  <h2>{data?.reports}</h2>
                </div>
              </div>
            </div>





            <div class='col-sm-3'>
              <div class='card shadow m-2'>
                <div class='card-body p-3'>
                  <img src="/dash/bk.png" alt="" />
                  <Link to='/bookings'><h2>Bookings</h2></Link>
                  <h2>{data?.bookings}</h2>
                </div>
                {/* <div class='card-footer'>
                  <Link to='/bookings'>View Details</Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer className="f1"  >Copyrights @Manoj Goski</footer>
      </div>
    </>

  )
}

export default Dashboard
