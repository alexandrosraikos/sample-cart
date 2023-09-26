import useDummyProducts from '../../hooks/useDummyProducts';
import ShowcaseItem from './ShowcaseItem';

/**
 * The product showcase component.
 */
const Showcase = ({className}) => {

    const products = useDummyProducts();

    return (
        <div className={`${className} my-4 px-8 py-4 bordered`}>
            {products.map(p => <ShowcaseItem item={p} key={p.id} />)}
        </div>
    )
}

export default Showcase;