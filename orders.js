const Orders = [
  {
    productName: "Foldable Mini Drone",
    productNumber: "85631",
    paymentStatus: "Due",
    shipping: "Pending"
  },
  {
    productName: "LARVENDER KF102 Drone",
    productNumber: "36378",
    paymentStatus: "Refunded",
    shipping: "Declined"
  },
  {
    productName: "Ruko F11 Pro Drone",
    productNumber: "49347",
    paymentStatus: "Due",
    shipping: "Pending"
  },
  {
    productName: "Drone with Camera Drone",
    productNumber: "96996",
    paymentStatus: "Paid",
    shipping: "Delivered"
  },
  {
    productName: "GPS 4K Drone",
    productNumber: "22821",
    paymentStatus: "Paid",
    shipping: "Delivered"
  },
  {
    productName: "DJI Air 25",
    productNumber: "81475",
    paymentStatus: "Due",
    shipping: "Pending"
  },
  {
    productName: "Lozengz Drone",
    productNumber: "00482",
    paymentStatus: "Paid",
    shipping: "Delivered"
  }
];

//fill orders in table

Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trcontent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.shipping === 
        'Declined' ? 'danger' : order.shipping 
        === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
        <td class="primary">Details</td>`;
    
    tr.innerHTML = trcontent;
    document.querySelector('table tbody').appendChild(tr);
})