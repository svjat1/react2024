const Simpson = ({simpson}) => {
    const {name, age, img} = simpson;
    return (
        <div>
              <div>Name: {name}</div>
              <div>Age: {age}</div>
              <img src={img} alt='photo'/>
        </div>
    );
};

export {Simpson};