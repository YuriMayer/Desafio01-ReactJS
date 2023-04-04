import styles from './Header.module.css'
import logoToDo from '../assets/logoToDo.svg'

export function Header(){
  return(
    <header className={styles.hearder}>
      <img src={logoToDo} alt="Logotipo do Ignite" />
    </header>
  );
}