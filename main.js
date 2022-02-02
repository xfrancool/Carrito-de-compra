const carrito = document.getElementById("carrito");
const tamplate = document.getElementById("tamplate");
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll(".card .btn");

const carritoObjeto = {};

const agregarAlcarrito = (e) => {
  console.log();
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  if (carritoObjeto.hasOwnProperty(producto.id)) {
    producto.cantidad = carritoObjeto[producto.id].cantidad + 1;
  }
  carritoObjeto[producto.titulo] = producto;
  pintarCarrito(producto);
  /* console.log(carritoObjeto); */
};

const pintarCarrito = (producto) => {
  carrito.textContent = "";
  Object.values(carritoObjeto).forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;
    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
};

btnesBotones.forEach((btn) => btn.addEventListener("click", agregarAlcarrito));
