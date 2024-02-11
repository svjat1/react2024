import {useForm} from "react-hook-form";

import {commentsService} from "../../services/CommentsService";

const CommentForm= ({setComments}) => {
    const {reset, register, handleSubmit} =useForm()

    const save = (comment)=>{
        commentsService.create(comment).then(({data})=> setComments(prev => [...prev,data]))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'id'} {...register('id')}/>
            <input type='text' placeholder={'name'} {...register('name')}/>
            <input type='text' placeholder={'email'} {...register('email')}/>
            <input type='text' placeholder={'body'} {...register('body')}/>
            <button>Add new comment</button>
        </form>
    );
};

export {CommentForm};