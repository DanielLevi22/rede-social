import styles from './styles.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import { useState } from 'react';

interface CommentsProps {
    content: string;
    onDeleComment: (comment: string)=> void;
}


export function Comment({content, onDeleComment}:CommentsProps){

    const [likeCount, SetLikeCount] = useState(0)



    function handleDeleteComment(){
        onDeleComment(content);
    }

    function handleLikeComment(){
        SetLikeCount(state => state + 1)    
    }

    return(
        <div className={styles.comment}>


            <Avatar hasBorder={false} src="https://github.com/daniellevi22.png" alt="" />

            <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Daniel Levi</strong>
                                <time title='10 de abril as 09:40' dateTime='2021-05-11  09:13:40'>cerca de 1 hr atras</time>
                            </div>

                            <button 
                            onClick={handleDeleteComment}
                            title='Deletar comentario'>
                                <Trash size={24}/>
                            </button>
                        </header>
                        <p>{content}</p>
                    </div>

                    <footer>
                        <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                           Aplaudir <span>{likeCount}</span>
                        </button>
                    </footer>
            </div>
        </div>
    )
}