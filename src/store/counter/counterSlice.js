// "@reduxjs/toolkit" kütüphanesinden createSlice fonksiyonunu içe aktarırız.
// createSlice, Redux state ve actions oluşturmak için kullanılır.
import { createSlice } from "@reduxjs/toolkit";

// counterSlice, state ve bu state üzerinde gerçekleştirilebilecek actions'ları içerir.
const counterSlice = createSlice({
    // Bu slice için benzersiz bir isim belirlenir.
    name: "counter",
    
    // initialState, bu state'in başlangıç değerini belirler.
    initialState: {
        value: 0,
    },
    
    // reducers, state üzerinde gerçekleştirilebilecek değişiklikleri tanımlar.
    reducers: {
        // increment, mevcut state değerini bir artırır.
        increment: (state) => {
            state.value += 1;
        },
        
        // decrement, mevcut state değerini bir azaltır.
        decrement: (state) => {
            state.value -= 1;
        },
        
        // reset, mevcut state değerini sıfırlar.
        reset: (state) => {
            state.value = 0;
        },
    },
});

// counterSlice.actions objesinden action creator'ları içe aktarırız.
// Bu sayede, bu actions'ları componentlerimizde kullanabiliriz.
export const { increment, decrement, reset } = counterSlice.actions;

// counterSlice.reducer, bu slice'a ait reducer'ı içe aktarır.
// Bu reducer'ı, store'umuzu oluştururken kullanırız.
export default counterSlice.reducer;


// Bu kod bloğu, Redux Toolkit ile counter uygulamasının temel yapı taşlarını oluşturur. Bu uygulama, counter değerini artırmak, azaltmak ve sıfırlamak için üç action içerir. Bu actions, kullanıcı arayüzündeki butonlara tıklandığında tetiklenir ve state'i günceller.
