// union type
let subs: number | string =  '1M'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

let airlineSeats: 'aisle' | 'window' | 'middle' = 'middle'

airlineSeats = 'aisle'

// any type
const orders = ['12', '20', '28', '42'];

//let currentOrder
let currentOrder: string | undefined

for (let order of orders) {
  if(order === '28') {
    currentOrder = order
    break
  }
  currentOrder = '11'
}

console.log(currentOrder)
//Variable currentOrder is used before being assigned. (ts 2454)
