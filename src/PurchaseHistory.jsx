import { useSelector } from "react-redux";

function PurchaseHistory()
{



 
  const purchasedItems =useSelector(state=>state.purchased);
  
 
  
  return (
    <div>
      <h2>Purchase History</h2>
      {purchasedItems.length === 0 ? (
        <p>No purchase history available.</p>
      ) : (
        <ul>
          {purchasedItems.map((purchase, index) => (
            <li key={index}>
              <p>Date: {purchase.date}</p>
              <p>Total Amount: ${purchase.total ? purchase.total.toFixed(2) : "N/A"}</p>

              <ul>
                {purchase.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.name} - ${item.price} x {item.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default PurchaseHistory;