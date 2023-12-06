const mahasiswaNim = 20202022; // Replace with the actual nim

// PUT Request to update data
const updatedData = {
  nama: 'haidar',
  gender: 'L',
  prodi: 'TE',
  alamat: 'Jl. Cibolang Kaler'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedData)
})
  .then(response => response.json())
  .then(data => console.log('Update Result:', data))
  .catch(error => console.error('Update Error:', error));


// DELETE Request to delete data
const nimToDelete = '111111';

fetch(`http://localhost:3000/mahasiswa/${nimToDelete}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log('Delete Result:', data))
  .catch(error => console.error('Delete Error:', error));


const newData = {
  nim: '222222',  // Pastikan nim dikirimkan sebagai string dengan tanda kutip
  nama: 'fikry',
  gender: 'P',
  prodi: 'TI',
  alamat: 'Jl. Ciogong'
};

fetch('http://localhost:3000/mahasiswa', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newData)
})
  .then(response => {
    console.log('Response Status:', response.status);
    return response.json();
  })
  .then(data => console.log('Post Result:', data))
  .catch(error => console.error('Post Error:', error));
