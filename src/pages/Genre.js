import React from 'react'
import AdminNavbar from '../components/admin/AdminNavbar'
import SideBar from '../components/admin/SideBar'

function Genre() {
  return (
    <div > 
      <AdminNavbar />
      <div className="admin-content">
        <SideBar/>        
      </div>
    </div>
  )
}
 
export default Genre    