import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.gihub.com/users/SomyakantSwain')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })

    }, [])

    return (
        <div className=' text-center m-4 bg-gray-500 text-white p-4 
        text-3xl '>Github follower:{data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github