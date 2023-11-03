import { format, formatDistanceToNow} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'


export function Post ({ author, publishedAt, content}){

    const [comments, setComments] = useState([
        "Post muito bacana"
    ])

    const [newCommentText, setNewCommentText] = useState('')

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
        setNewCommentText("")


    }

    function handleNewCommentsChange() {
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)

    }


    return (
        <article className={styles.post}>
            <header>
                <time title='11 de Maios as 11:13' dateTime='2022-05-11 08:33:00'>
                {publishedDateRelativeToNow}
                </time>
            </header>


            <div className={styles.content}>
                {content.map((line) => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {  
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                < textarea
                    name='comment'
                    placeholder='Deixe um comentário' 
                    value={newCommentText}
                    onChange={handleNewCommentsChange}  
                />
             <footer>
                <button type="submit">Publicar</button>
             </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                    <Comment 
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                )
                })}
            </div>
        </article>
    )
}
