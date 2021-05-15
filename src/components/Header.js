import Button from './Button';
import {useLocation} from 'react-router-dom';
const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation();
    return (
       <header className='header'>
           <h1>{title}</h1>
           {location.pathname==='/' && (
           <Button color={showAdd? 'red':'green'} text={showAdd? 'CLOSE':'ADD'}onClick={onAdd} />)}
       </header>
    )
}
Header.defaultProps={
    title: 'Task Tracker'
};
// Header.PropTypes={
//     title: PropTypes.string.isRequired
// }


export default Header
