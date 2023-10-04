// "@reduxjs/toolkit" kütüphanesinden createSlice metodunu import ediyoruz.
// createSlice, Redux state ve actions'ları tek bir obje içinde tanımlamamıza olanak tanır.
import { createSlice } from "@reduxjs/toolkit"; 

// "@reduxjs/toolkit" kütüphanesinden configureStore metodunu import ediyoruz.
// configureStore, store'u oluştururken otomatik olarak birkaç middleware'ı ve devtools extension'ı ekler.
import { configureStore } from "@reduxjs/toolkit"; 

// Farklı özellikler (slices) için oluşturduğumuz reducer'ları import ediyoruz.
// Reducer'lar, state değişimlerini yönetir ve action'lara tepki olarak state'i günceller.
import counterReducer from "./counter/counterSlice";
import languageReducer from "./language/languageSlice";
import themeReducer from "./theme/themeSlice";

// configureStore kullanarak global Redux store'umuzu oluşturuyoruz.
// Store, uygulama state'ini içerir ve reducer'lar aracılığıyla güncellenir.
// "reducer" field'ı içinde her bir slice için bir reducer atıyoruz.
// Bu sayede, farklı slice'lar aracılığıyla state'in farklı kısımlarını yönetebiliriz.
export const store = configureStore({
    reducer: {
        counter: counterReducer, // counter adında bir slice, counterReducer ile yönetilir.
        language: languageReducer, // language adında bir slice, languageReducer ile yönetilir.
        theme: themeReducer, // theme adında bir slice, themeReducer ile yönetilir.
    },
});


// Bu kod parçası, Redux Toolkit kullanarak global bir Redux store oluşturur. Bu store, counter, language ve theme adında üç farklı "slice" içerir, ve her biri kendi reducer'ı ile yönetilir. Bu slice'lar, uygulama state'inin farklı kısımlarını yönetir ve organize eder, böylece büyük ve karmaşık uygulamalar daha yönetilebilir hale gelir.