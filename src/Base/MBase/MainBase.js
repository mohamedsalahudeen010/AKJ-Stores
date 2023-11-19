import MainNavBar from "./NavBar/MainNavBar"






function MainBase(props) {
  return (
    <div>
    
        <MainNavBar/>
        <div>{props.children}</div>
    </div>
  )
}

export default MainBase