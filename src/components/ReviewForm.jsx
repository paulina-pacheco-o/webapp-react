import React from 'react'

const ReviewForm = () => {
  return (
    <div className='detail-card p-4'>
      <h2 className='text-light'>Aggiungi recensione</h2>
      <form>
        <div className="form-group mt-3">
          <label htmlFor="" className='form-label'>Nome</label>
          <input type='text'
            className='form-control'
            placeholder='Nome'
            name='name'
            id='name' />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="" className='form-label'>Voto</label>
          <input type='number'
            className='form-control'
            placeholder='voto'
            min="0"
            max="5"
            name='vote'
            id='vote' />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="" className='form-label'>Testo recensione</label>
          <input type='text'
            className='form-control'
            placeholder='Testo recensione'
            name='text'
            id='text' />
        </div>
        <div className="form-group">
          <button className="btn-secondary mt-4" type='submit'>Salva</button>
        </div>
      </form>
    </div>
  )
}

export default ReviewForm
