export interface Item {
  id: number
  name: string
  price: number
  balance: number
  unit_name: string
  item_categories_name: string
  image_url: string
  updated_at_th?: string
  mobile:string
}

export interface addNewItem {
  name: string
  unit_name: string
  item_id: number
  amount: number
  balance: number
}

export interface ItemPrice {
  id: number
  price: number
}