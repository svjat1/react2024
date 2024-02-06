const Launch = ({launches}) => {
    const {mission_name, launch_year, links:{mission_patch_small}} = launches

    return (
        <div>
            <div>Name: {mission_name}</div>
            <div>Year: {launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Launch};