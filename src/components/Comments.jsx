import { Route, Link } from "react-router-dom"
import { useState } from "react";
import axios from "axios"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Comments(){
    let location = useLocation().pathname.split("/")[1]
    const [comments, setComments] = useState([]);
    async function fetchData() {
        await fetch(`https://helen-dream-world-api.fly.dev/comments/dic27`)
        .then(response => response.json())
        .then(responseData => {
            setComments(responseData);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    useEffect(() => {
        fetchData()
    }, [])

    const [form, setForm] = useState({
        comment: "",
        name: ""
    });

    function handleChange(e){
        setForm({...form, [e.target.name] : e.target.value})
    }
    
    
    console.log([form.comment, location, form.name])
    console.log(comments)

    async function submitComment(e){
        e.preventDefault()
        await axios.post("https://helen-dream-world-api.fly.dev/comments", {
            content : form.comment,
            publicationName: location,
            userName: form.name
        })
        await fetchData()
        setForm({
            comment: "",
            name: ""
        })
    }

    return(
        <div>
            <div className="formulario">
                    <form onSubmit={(e) => submitComment(e)}>
                        <input type="text" name="name" value={form.name} onChange={(e) => {handleChange(e)}} />
                        <textarea name="comment" value={form.comment} onChange={(e) => {handleChange(e)}}  cols="30" rows="10"></textarea>
                        <input type="submit" value={"Submit"} />
                    </form>
            </div>
            <div>
                {comments.map(c => (
                    <div className="comentario">
                        <span className="usuariocomentario">{c.userName}</span>
                        <p>{c.content}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}