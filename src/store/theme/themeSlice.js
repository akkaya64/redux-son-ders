// @reduxjs/toolkit kütüphanesinden createSlice fonksiyonunu import ediyoruz.
// Bu fonksiyon, Redux store'unda bir slice oluşturmak için kullanılır. 
// Bir slice, store'daki bir parçayı, bir state'i ve onunla ilişkilendirilmiş reducer ve actions'ı temsil eder.
import { createSlice } from "@reduxjs/toolkit";

// themeSlice adında bir slice oluşturuyoruz.
const themeSlice = createSlice({
    // Bu slice için bir isim tanımlıyoruz, bu isim bu slice'ı tanımlamak için kullanılacaktır.
    // 'name' property'si, debugging sırasında bu slice'ı tanımak için önemlidir ve action type'larını oluştururken kullanılır.
    name: "theme",
    
    // Bu slice için başlangıç state ini tanımlıyoruz.
    // initialState, bu slice'ın state'inin başlangıç değeridir.
    initialState: {
        value: "light", // Başlangıçta tema 'light' olarak ayarlanmıştır.
    },
    
    // Reducer'ları tanımlıyoruz.
    // Reducer'lar, gelen action'lara göre state'i nasıl güncelleyeceğini tanımlar.
    reducers: {
        // 'changeTheme' adında bir action tanımlıyoruz.
        // Bu action, mevcut theme değerini değiştirmek için kullanılacaktır.
        changeTheme: (state) => {
            // Eğer mevcut theme 'light' ise 'dark' olarak değiştiriyoruz, değilse 'light' olarak değiştiriyoruz.
            // Bu sayede kullanıcı, temayı koyu ve açık tema arasında değiştirebilir.
            state.value = state.value === "light" ? "dark" : "light";
        },
    },
});

// 'changeTheme' action'ını dışa aktarıyoruz.
// Böylece, bu action diğer bileşenler veya dosyalar tarafından kullanılabilecek.
export const { changeTheme } = themeSlice.actions;

// themeSlice'ın reducer'ını dışa aktarıyoruz.
// Bu reducer, configureStore metodunu kullanarak oluşturulan store'a eklenmelidir.
export default themeSlice.reducer;


// Yukarıda yer alan kod, @reduxjs/toolkit kullanarak Redux içinde bir 'slice' oluşturur. Bu 'slice', 'theme' adında bir state parçasını, bu state'e bağlı bir reducer ve bir action içerir. changeTheme action'ı mevcut 'theme' değerini değiştirir, yani 'light' ise 'dark' yapar, 'dark' ise 'light' yapar. Bu, genellikle kullanıcının bir düğme/button aracılığıyla temayı değiştirebilmesi için kullanılır.