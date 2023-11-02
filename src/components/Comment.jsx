import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content, onDeleteComment}){

    function handleDeleteComment() {
        console.log('Delete comment');

        onDeleteComment(content)
    }
    return(
        <div className={styles.comment}>
           <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/62269978?v=4" />
           <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Tatiana Tavares</strong>
                            <time title='11 de Maios as 11:13' dateTime='2022-05-11 08:33:00'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div> 
        </div>

    )
}