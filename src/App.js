import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardContent } from '@material-ui/core';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('https://api.gyanibooks.com/library/get_dummy_notes');
      setNotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // git remote set-url origin https://github.com/prajwalah28/materialuii.git

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Dummy Notes
      </Typography>
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid item xs={12} sm={6} md={4} key={note.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2">
                  {note.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  Category: {note.category}
                </Typography>
                <Typography variant="body2" component="p">
                  {JSON.parse(note.notes).content[0].content[0].text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
