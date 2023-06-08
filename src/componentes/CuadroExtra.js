<div className='item' key={index}>
					<figure>
						<img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.infobae.com%2Fsociedad%2F2023%2F01%2F19%2Fdia-del-pochoclo-por-que-se-come-en-el-cine-los-nombres-que-tiene-y-como-hacerlo-en-casa%2F&psig=AOvVaw2sHV4EjQBr6zoSulnKr_w-&ust=1686271139006000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDEl9a3sv8CFQAAAAAdAAAAABAF"} alt={extra.producto} />
					</figure>
					<div className='info-product'>
						<h2>{extra.producto}</h2>
						<p className='tipo'>{extra.tamaño}</p>
						<button >
							Precio: ${extra.precio}
						</button>
					</div>
				</div>