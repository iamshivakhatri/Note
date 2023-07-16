import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
    const a  = useContext(noteContext);
    return (
        <div>
            I am {a.name} and I am {a.age} years old.
        </div>
    )
}

export default About
