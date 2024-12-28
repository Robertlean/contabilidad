import React from 'react'

export const MarketList = () => {
  return (
    <div className="border rounded-3 p-5 mb-3">
      <h2 className='mb-3'>Registrar Local/Mercado</h2>
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="fecheCompra" className="form-label">Fecha de compra</label>
            <input type="date" className="form-control" id="fecheCompra" />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="lugarCompra" className="form-label">Lugar de compra</label>
            <select type="list" className="form-control" id="lugarCompra">
              <option value="carrefour">Carrrefour</option>
              <option value="coto">Coto</option>
              <option value="changomas">ChangoMas</option>
            </select>
          </div>
        </div>
    </div>
  )
}
