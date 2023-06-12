
import {useCart} from "react-use-cart";


export default function CuadroExtra(props) {

	const {addItem} = useCart();

  return(
	<div>
		<div className='item' key={props.id}>
            <figure>
                <img src={"https://www.infobae.com/new-resizer/EtGmhBt5kJBjkMvnFTiziNUTu_I=/768x432/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/ZTCBDSR5DVBNJPMMDYTSUKAGPE.jpg"} alt={props.producto} />
            </figure>
            <div className='info-product'>
                <h2>{props.producto}</h2>
                <p className='tipo' >{props.tamaño}</p>
                <p className='tipo'> $ {props.precio}</p>
                <button onClick={ () => addItem(props)}>Add to cart</button>
            </div>
        </div>
	</div>

  );
}