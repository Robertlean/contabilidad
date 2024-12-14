import { useState, React } from 'react'

export const ProductAdd = () => {
  return (
    <div className="border rounded-3 p-5">
      <h2 className='mb-3'>Agregar gastos realizados</h2>
      <form>
        <div className='row'>
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
        <div className='row'>
          <div className="mb-3 col-6">
            <label htmlFor="productName" className="form-label">Nombre producto</label>
            <input type="text" className="form-control" id="productName" placeholder="Mayonesa Natura 500gr" />
          </div>
          <div className="mb-3 col-2">
            <label htmlFor="productCantidad" className="form-label">Cantidad</label>
            <input type="number" className="form-control" id="productCantidad" rows="3"></input>
          </div>
          <div className="mb-3 col-2">
            <label htmlFor="productPrecio" className="form-label">Precio</label>
            <input type="text" className="form-control" id="productPrecio" rows="3" />
          </div>
          <div className="mb-3 col-2">
            <label htmlFor="productDescuento" className="form-label">Descuento</label>
            <input type="text" className="form-control" id="productDescuento" rows="3" />
          </div>
         
        </div>
      </form>
    </div>
  )
}
