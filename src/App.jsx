import "../src/global.css";
import styles from "../src/App.module.css"
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

// author: { avatar_url: "", name: "", role: ""}
// publisedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/tatianasstavares.png",
      name: "Tatiana Tavares",
      role: "Software developer"
    },
    content: [
      {type: 'paragraph', content: "Fala galeraa 👋"},
      {type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: 'link', content:"👉 jane.design/doctorcare"} 
    ],
    publishedAt: new Date('2023-10-20 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/thiagoltavares.png",
      name: "Thiago Lanhellas",
      role: "Software Engineer"
    },
    content: [
      {type: 'paragraph', content: "Fala galeraa 👋"},
      {type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: 'link', content:"👉 jane.design/doctorcare"} 
    ],
    publishedAt: new Date('2023-10-10 21:00:00')
  },
]



function App() {
   return (
   <div>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map((post) =>{
          return (
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
