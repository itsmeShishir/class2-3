import { Outlet , Link} from 'react-router-dom'
const Dashboard = () => {
  return (
    
    <div>
         <div><Link to={`/admin`}> go to dashbaord</Link>
        <Link  to={`allProductAdmin`}> go to all product</Link>
        <Link  to={`login`}> go to login</Link></div>
        <Outlet />
    </div>
  )
}

export default Dashboard