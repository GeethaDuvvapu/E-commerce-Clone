import React from 'react'
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className='content1'>
          <p>Hello Vitatheme (not Vitatheme? <span>Log out</span> )</p>
          <p>
             From your account dashboard you can view your <span>recent orders</span>, manage your <span>shipping and billing addresses</span> , and edit your <span>password and account details</span>.
          </p>
        </div>
    </div>
  )
}

export default Dashboard