import axios from "axios";
import React, { useEffect, useState } from "react";
import NoteTimeline from "./NoteTimeline";

export default function Parent () {

const [comments,getComments] = useState('');
const url = 'http://127.0.0.1:8000/api/comments/comments/';

useEffect(() => {
    getAllNotes();
}, []);

const getAllNotes = () => {
    axios.get(`${url}`)
    .then((response) => {
        const allComments = response.data;
        getComments(allComments)
    })
    .catch(error => console.error(`Error: ${error}`));
}
    return(
            <NoteTimeline comments={comments}/>
    )
    }