import React from 'react'
import AdminNavbar from '../components/admin/AdminNavbar'
import SideBar from '../components/admin/SideBar'
import BookShow from '../components/home/BookShow'

function Books() {
  return (
    <div > 
      <AdminNavbar />
      <div className="admin-content">
        <SideBar/>
          
      </div>
    </div>
  )
}

export default Books