
import AdminNavBar from './NavBar/AdminNavBar'
function AdminBase(props) {
  return (
    <div className='admin-Base'>
      
       <AdminNavBar/>
       <div>{props.children}</div>
    </div>
  )
}

export default AdminBase