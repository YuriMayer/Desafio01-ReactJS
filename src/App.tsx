import styles from './App.module.css'
import { Header } from './components/Header'
import { Task } from './components/Task'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/YuriMayer.png',
      name: 'Yuri Mayer',
      role: 'Gestor Ti',
    },
    content: [
      {type: 'paragraph', content: 'Fala Dev'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare Dev'},
    ],
    publishedAt: new Date('2023-03-16 10:50:30')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/leonardovaz3.png',
      name: 'Leonardo Vaz',
      role: 'Dev Jr.',
    },
    content: [
      {type: 'paragraph', content: 'Fala Dev Teste 2'},
      {type: 'paragraph', content: '2 - Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '#Teste2'},
    ],
    publishedAt: new Date('2023-03-21 10:50:30'),
  }
]

export function App() {

  return (
    <div>  
      <Header/>    
      <div className={styles.wrapper}>
        <Task/>    
      </div>
    </ div>
  )
}

