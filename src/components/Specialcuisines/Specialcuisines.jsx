import { useNavigate } from 'react-router-dom';
import Styles from './Specialcuisines.module.css';

export default function Specialcuisines({ imageUrl, name }) {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/caterer'); 
  };

  return (
    <div className={Styles.container}>
      <img className={Styles.image} src={imageUrl} onClick={handleClick} alt='dish' />
      <h5 className={Styles.name}>
        {name}
      </h5>
    </div>
  );
}
