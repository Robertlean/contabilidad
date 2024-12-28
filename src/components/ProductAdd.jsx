import { useState, React} from 'react'
import { MarketList } from './MarketList'


export const ProductAdd = () => {
  return (
    <>
      <form>
        <MarketList />
        <div className="border rounded-3 p-5">
          <h2 className='mb-3'>Agregar Productos</h2>
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
            <div class="col-12">
              <button class="btn btn-primary" type="submit">Agregar</button>
            </div>
          </div>
        </div>
      </form>
    </>

  )
}
