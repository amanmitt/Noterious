import React, { useEffect, useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../components/MainScreen";
import axios from "axios";

const MyNotes = () => {
  const [notes, setnotes] = useState([]); //to update the notes using set state

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/data"); // destructring of the 'data'
    setnotes(data); // getting data from api and setting it to usestate variable 'notes'.
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome Back Aman Mittal">
      <Link to="/createnote">
        <Button style={{ marginLeft: 10 }} size="lg">
          Create New Note
        </Button>
      </Link>

      {/*---------------- Note Card -------------------*/}

      {notes.map((note) => (
        <Card style={{ marginTop: 10 }}>
          <Card.Header style={{ display: "flex" }}>
            <div
              style={{
                flex: 1,
                cursor: "pointer",
              }}
            >
              {note.title}
            </div>
            <div>
              <Button href={`/note/${note._id}`} style={{ marginRight: 10 }}>
                Edit
              </Button>
              <Button onClick={() => deleteHandler(note._id)} variant="danger">
                Delete
              </Button>
            </div>
          </Card.Header>

          <Card.Body>
            <h6 style={{ color: "white" }}>
              <Badge bg="success">Category - {note.category}</Badge>
            </h6>
            <blockquote className="blockquote mb-0">
              <p>{note.content}</p>
              <footer className="blockquote-footer">Created on - Date</footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
