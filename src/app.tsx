import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import styles from './app.module.css'
import './global.css'




const posts = [ 
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/daniellevi22.png',
      name: 'Daniel Levi',
      rule: 'Web Develooper'
    },
    content:[
      {type:'paragraph', content:'Fala galeraa 👋'},
      {type:'paragraph', content:'a Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2021/09/05 12:00:05'),
  },  
  {
    id:2,
    author: {
      avatarUrl: 'https://oportaln10.com.br/revistadegames/wp-content/uploads/2022/12/fotos-de-free-fire-para-perfil-ordem-e-progresso.jpg',
      name: 'Alan Magalhaes',
      rule: 'Prostituto'
    },
    content:[
      {type:'paragraph', content:'Fala galeraa 👋'},
      {type:'paragraph', content:'a Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023/01/08 12:00:05'),
  },  
];







function App() {


  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post=>{
            return(
              <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}
        </main>


      </div>





    </div>
  )
}

export default App
