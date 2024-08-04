import Styles from './Specialcuisines.module.css'

export default function Specialcuisines({imageUrl,name}){
    return (
        <div className={Styles.container}>
            <div className={Styles.whiteBorder}>
            <img className={Styles.image} src={imageUrl} alt='dish'/>
            </div>
            <h4 className={Styles.name}>
                {name}
            </h4>
        </div>
    )
}