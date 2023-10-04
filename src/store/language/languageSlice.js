// "@reduxjs/toolkit" paketinden "createSlice" fonksiyonunu import ediyoruz.
// "createSlice", action creator fonksiyonları ve action type'larını otomatik olarak oluşturarak, 
// Redux için kod yazmayı kolaylaştıran bir yardımcıdır.
import { createSlice } from "@reduxjs/toolkit";

// "createSlice" fonksiyonunu kullanarak bir "slice" oluşturuyoruz. 
// Bir "slice", Redux state'inin bir parçasını ve o state parçası üzerindeki 
// reducer ve actions'ları temsil eder.
// "name" prop'unda belirttiğimiz "language" ismi, bu slice için kullanılan action type'ları oluştururken kullanılır.
// Bu isimlendirme, genellikle debugging sırasında Redux DevTools'ta hangi action'ın hangi slice'a ait olduğunu anlamamıza yardımcı olur.
const languageSlice = createSlice({
    // Bu slice'ın ismi "language" olarak belirlenmiştir.
    // Bu isim, otomatik olarak oluşturulan action type'larda kullanılacaktır.
    name: "language",
    
    // initialState ile bu slice için başlangıç state'ini belirliyoruz.
    initialState: {
        value: "tr", // Başlangıç dilini "tr" olarak ayarlıyoruz.
    },
    
    // "reducers" alanında bu slice için tanımlayacağımız reducer fonksiyonlarını belirtiyoruz.
    // Burada "changeLanguage" adında bir reducer tanımlanmış.
    // Bu reducer, dil değerini değiştirmek için kullanılacaktır.
    reducers: {
        changeLanguage: (state, action) => {
            // "changeLanguage" reducer'ı, gelen action'ın payload'ını kullanarak state.value'yi güncelliyor.
            // Bu, dil değişikliği gerektiğinde kullanılacaktır.
            state.value = action.payload;
        },
    },
});

// Bu slice'a ait action creator'ları export ediyoruz.
// Böylece bu action creator'ları, component'lerde veya başka yerlerde kullanabiliriz.
export const { changeLanguage } = languageSlice.actions;

// Bu slice'a ait reducer'ı export ediyoruz.
// Bu reducer, configureStore metodu içerisinde combineReducers kullanılarak eklenmelidir.
export default languageSlice.reducer;


// Bu kod parçasında, createSlice fonksiyonu, dil bilgisini tutan ve güncelleyen bir Redux slice oluşturur. Bu slice, bir isme ("language"), başlangıç durumuna ({ value: "tr" }), ve bu durumu güncellemek için kullanılacak reducer fonksiyonlarına (changeLanguage) sahiptir. action.payload ise, dispatched action ile birlikte gönderilen veridir, bu örnekte yeni dil değeridir.