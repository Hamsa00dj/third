import React from 'react'


function Home(props) {
    const navigateToAbout = () =>{
        console.log(props)
        props.history.push('/About')

    }
    
    return (
        <div>
            Home Page
            <button onClick = {navigateToAbout}>Navigate To About</button>
        </div>
    )
}

export default Home
