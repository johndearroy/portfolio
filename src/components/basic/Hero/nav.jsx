import Switch from "./switch";
import data from '../../../mock/data.json'

const Nav = ({toggle}) => {
  return (
    <div className={'row'}>
      <div className="container">
        <div className={'nav col-12 col-lg-12 d-flex justify-content-between align-items-center position-fixed p-3'}>
          <h3>{data.name}</h3>
          <Switch/>
          <i onClick={toggle} className="bi bi-list mobile-nav-toggle d-xl-none"/>
        </div>
      </div>
    </div>
  )
}

export default Nav;
