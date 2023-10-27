import { format, formatDistanceToNow} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'


export function Post ({ author, publishedAt }){

    const [comments, setComments] = useState([
        "Post muito bacana"
    ])

    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'às' HH:mm'h'", {
        locale:ptBr
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale : ptBr,
    })

    function handleCreateNewComment (e) {
        e.preventDefault()
        
        const newCommentText = e.target.comment.value

        setComments([...comments, newCommentText])
        e.target.comment.value = ""

    }
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title='11 de Maios as 11:13' dateTime='2022-05-11 08:33:00'>
                {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
            <p>Fala galeraa 👋 </p>
            <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p><a href=''>👉{' '} jane.design/doctorcare</a></p>
            <p>
                <a href=''>#novoprojeto </a>{' '}
                <a href=''>#nlw </a>{' '}
                <a href=''>#rocketseat</a>{' '}
            </p>
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea name='comment' placeholder='Deixe um comentário'>   

                </textarea>
             <footer>
                <button type="submit">Publicar</button>
             </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment content={comment}/>
                })}
            </div>
        </article>
    )
}