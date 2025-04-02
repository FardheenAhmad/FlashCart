
import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        veg: [
            { name: "tomato", price: 27.99, image:"https://tse3.mm.bing.net/th?id=OIP.UjyrvgMD6tCjqDdDYG_RawHaE7&pid=Api&P=0&h=220"},
            { name: "potato", price: 34, image:"https://tse3.mm.bing.net/th?id=OIP.BwK17ejdeJ6r-TiCy6lMngHaE8&pid=Api&P=0&h=220" },
            {name: "brinjal", price:32,  image:"https://tse1.mm.bing.net/th?id=OIP.Z3E2bg2IPMtwQ9MCwHQEPQHaHa&pid=Api&P=0&h=220" },
            {name: "Carrot", price:76, image:"https://tse2.mm.bing.net/th?id=OIP.egC0hh-1Uy1h_fiWc_OlwQHaLH&pid=Api&P=0&h=220"},
            {name: "LadiesFinger", price: 43,  image:"https://tse2.mm.bing.net/th?id=OIP.LGxT3PCX7VZWs0CgJGkWugHaHa&pid=Api&P=0&h=220"},
            {name: "brocoulli", price:80, image:"https://tse1.mm.bing.net/th?id=OIP.XBdckQstq01SCe9JL2N--AHaEK&pid=Api&P=0&h=220" },
            {name: "cabbage", price:25, image:"https://tse1.mm.bing.net/th?id=OIP.YVbI8Z0kTcC_OkVXnv0QCAHaE5&pid=Api&P=0&h=220" },
            {name: "cauli flower", price:30, image:"https://tse4.mm.bing.net/th?id=OIP.qbtfTieEpOA4y66SY0zvEAHaHa&pid=Api&P=0&h=220" },
            {name: "capsicum", price: 55, image:"https://tse2.mm.bing.net/th?id=OIP.fR9lf_dMtbjMpKPqLKRLiQHaFy&pid=Api&P=0&h=220"}

        ],
        nonVeg: [
            { name: "chicken", price: 220 ,image: "https://tse2.mm.bing.net/th?id=OIP.YzGpgLsyBBqvhDpDYCzxmgHaE7&pid=Api&P=0&h=220" },
            { name: "mutton", price: 840 ,image:"https://tse1.mm.bing.net/th?id=OIP.m0PV-I4h7M5KuWsJjj-8xwHaE2&pid=Api&P=0&h=220" },
            {name: "fish", price:300, image:"https://tse4.mm.bing.net/th?id=OIP.4JIADLhBrheRyc_LAX5CuAHaFS&pid=Api&P=0&h=220" },
            {name: "prawns", price:220, image:"https://tse3.mm.bing.net/th?id=OIP.2zFM9j0-HqCU8Wko-EyHHwHaGG&pid=Api&P=0&h=220" },
            {name: "Eggs", price:10, image:"https://tse3.explicit.bing.net/th?id=OIP.7g3VODCs9OqLBvEfmx97ugHaE7&pid=Api&P=0&h=220" }
          
        ],
    
           
      cravings :[
         {name:"lays", price: 50 ,image :"https://i5.walmartimages.com/asr/a0104fff-c488-4a4e-811d-c6098646f17d_1.185c44e775ec7c73c4e6db0a2ce42b93.jpeg" },
         {name:"chips", price: 20 ,image :"https://th.bing.com/th/id/OIP.iD7g4YhB_RZTDhhbcXvXwQHaLH?rs=1&pid=ImgDetMain" },
         {name:"bread", price: 30 ,image :"" },
       {name: "soda", price: 40 ,image :"" },
         {name: "Coke", price:60 ,image :"" },
         {name: "Pepsi" ,price: 60 ,image :"" },
         {name: "Sprite", price: 60 ,image :"" },
         {name: "Water", price: 20 ,image :"" },
         {name: "Chocolate", price: 30 ,image :"" },
         {name: "diarymilk chocolate", price: 40 ,image :"" },
      {name:"cookies", price: 10 ,image :"" },
      {name:"cake", price: 60 ,image :"" },
      {name:"ice cream", price: 50 ,image :"" },
      {name:"fries", price: 30 ,image :"" },
      {name:"burger", price: 70 ,image :"" },
      {name:"pizza", price: 100 ,image :"" },
      {name:"pasta", price: 40 ,image :"" },
      {name:"noodles", price: 30 ,image :"" } 
        ]
    },
    reducers: {}
});

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.items.find(i => i.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const item = state.items.find(i => i.name === action.payload.name);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.items = state.items.filter(i => i.name !== action.payload.name);
            }
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});
const purchasedSlice = createSlice({
    name: "purchased",
    initialState: [],
    reducers: {
        addPurchase: (state, action) => {
            state.push(action.payload);
        }
    }
});
const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        purchased: purchasedSlice.reducer,
        
    }
});
export const { addPurchase } = purchasedSlice.actions;
export const { addToCart, removeFromCart,clearCart } = cartSlice.actions;
export default store;
