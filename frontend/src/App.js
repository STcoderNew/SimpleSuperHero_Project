import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState('');
  const [superheroes, setSuperheroes] = useState([]);
  const [errors, setErrors] = useState({
    name: false,
    superpower: false,
    humilityScore: false,
  });

  // Fetch superheroes on initial load
  useEffect(() => {
    axios.get('http://localhost:3000/superheroes').then((response) => {
      setSuperheroes(response.data);
    });
  }, []);

  // Function to add a new superhero with validation
  const addSuperhero = () => {
    const newErrors = {
      name: !name,
      superpower: !superpower,
      humilityScore: humilityScore < 1 || humilityScore > 9 || isNaN(humilityScore),
    };

    setErrors(newErrors);

    // Check if any field is invalid
    if (newErrors.name || newErrors.superpower || newErrors.humilityScore) {
      return; // Don't submit if there's an error
    }

    // No validation errors, proceed with submitting data
    axios
      .post('http://localhost:3000/superheroes', {
        name,
        superpower,
        humilityScore: parseInt(humilityScore),
      })
      .then(() => {
        setName('');
        setSuperpower('');
        setHumilityScore('');
        // Fetch the updated list of superheroes
        axios.get('http://localhost:3000/superheroes').then((response) => {
          setSuperheroes(response.data);
        });
      })
      .catch((err) => {
        console.error('Error adding superhero:', err);
      });
  };

  // Function to delete a superhero by ID
  const deleteSuperhero = (id) => {
    axios.delete(`http://localhost:3000/superheroes/${id}`).then(() => {
      setSuperheroes(superheroes.filter(hero => hero.id !== id)); // Update UI after deletion
    });
  };

  return (
    <div className='row m-5'>
      <h1 className='center' style={{ color: "#239502" }}>Humble Superheroes</h1>
      <div className='col'>
        <input
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && <div className="invalid-feedback">Name is required.</div>}
      </div>
      <div className='col'>
        <input
          type="text"
          className={`form-control ${errors.superpower ? 'is-invalid' : ''}`}
          placeholder="Superpower"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
          required
        />
        {errors.superpower && <div className="invalid-feedback">Superpower is required.</div>}
      </div>
      <div className='col'>
        <input
          type="number"
          className={`form-control ${errors.humilityScore ? 'is-invalid' : ''}`}
          placeholder="Humility Score (1-9)"
          value={humilityScore}
          onChange={(e) => setHumilityScore(e.target.value)}
          min="1" max="9"
          required
        />
        {errors.humilityScore && (
          <div className="invalid-feedback">
            Humility score must be a number between 1 and 9.
          </div>
        )}
      </div>
      <div className='col'>
        <button className='btn btn-primary' onClick={addSuperhero}>Add Superhero</button>
      </div>
      <hr className='my-3' />
      <h2 className='mb-3'>Superheroes</h2>
      <div>
        <table className='table table-bordered table-hover table-striped'>
          <thead className='text-center'>
            <tr className='table-primary'>
              <th>Name</th>
              <th>Superpower</th>
              <th>Humility Score</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {superheroes.map((hero, index) => (
              <tr key={index} className='text-center'>
                <td>{hero.name}</td>
                <td>{hero.superpower}</td>
                <td>{hero.humilityScore}</td>
                <td>
                  <button
                    className='btn btn-danger'
                    onClick={() => deleteSuperhero(hero.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
