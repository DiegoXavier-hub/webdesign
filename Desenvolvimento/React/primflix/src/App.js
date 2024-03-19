import React, { useState, useEffect } from 'react';
import './app.css'
import axios from 'axios'

function App(){

  const [nutri, setNutri] = useState([])

  useEffect(()=>{

    const loadApi =() => {
      const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      axios.get(url)
      .then(response => {
        const data = response.data
        setNutri(data)
      })
      .catch(error=>{
        console.log('Error fetching data: ', error)
      })
    }

    loadApi()
  }, [])

  return(
    <main className='container'>
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item)=>{
        return(
          <article key={item.id} className='post'>
            <strong className='titulo'> {item.titulo} </strong>
            <img src={item.capa} alt={item.titulo} className='capa'/>
            <p className='subtitulo'>{item.subtitulo}</p>
            <a href='http://localhost:3000' className='botao'>Ver Mais.</a>
          </article>
        )
      })}

    </main>
  )
}

export default App;
