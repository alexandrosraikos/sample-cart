/**
 * The product showcase item component.
 * 
 * @param {Product} item The product item.
 */
const ShowcaseItem = ({ item }) => (
    <div className="my-6 flex">
        <div className="max-w-[100px] h-32 mr-6">
            <img src={`/product_images/${item.slug}.jpg`} alt={item.name} className="max-w-[100px] rounded-xl" />
        </div>
        <div className="mx-4 text-left">
            <div>
                {item.name}
            </div>
            <div className="paragraph">
                {item.description}
            </div>
            <div className="bg-gray-200 rounded-full px-2 py-1 text-xs inline-block">
                {item.category}
            </div>
        </div>
        <div className="font-bold text-[18px] whitespace-nowrap">
            € {parseFloat(item.price).toFixed(2)}
        </div>
    </div>
)

export default ShowcaseItem;