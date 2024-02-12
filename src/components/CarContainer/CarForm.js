import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register, reset, handleSubmit, formState:{isValid, errors}, setValue} = useForm({
        mode: "all"
    })

    const save =(data)=>{
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            <input type='text' placeholder={'price'} {...register('price')}/>
            <input type='text' placeholder={'year'} {...register('year')}/>
            <button>Save</button>
        </form>
    );
};

export {CarForm};