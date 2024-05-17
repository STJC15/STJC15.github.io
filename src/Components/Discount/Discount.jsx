import React from 'react';
import Item from '../Item/Item';
import './discount.css';

const DiscountItems = ( {props} ) => {
  return (
    <div>
      {props.length === 0 ? (
        // Display no results found when not loading and props are empty or null
        <div>
          <h1 className='discount-items-container'>No results found</h1>
        </div>
      ) : (
        <div className='discount-items-container'>
          <h1>Discount Items</h1>
          <hr />
          <div className='discount-items'>
            {props?.map((item, i) => (
              <Item key={i} 
                    name={item.title} 
                    image={item.image?.imageUrl ?? item.thumbnailImages?.imageUrl ?? item?.additionalImages?.[0]?.imageUrl}
                    old_price={item.marketingPrice?.originalPrice?.value ?? undefined}
                    discount_price={item.marketingPrice?.discountAmount?.value ?? undefined}
                    new_price={item.price.value}
                    coupons={item.availableCoupons}
                    discount_percent={item.marketingPrice?.discountPercentage ?? undefined}
                    shipping_cost={item.shippingOptions?.[0]?.shippingCost?.value ?? undefined}
                    itemUrl={item.itemWebUrl}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DiscountItems;