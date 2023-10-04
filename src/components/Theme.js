import React from "react";
// react-bootstrap kütüphanesinden Button bileşeni import edilir.
// Bu bileşen, kullanıcının tıklayabileceği bir buton oluşturur.
import { Button } from "react-bootstrap";

// react-redux kütüphanesinden useDispatch ve useSelector hookları import edilir.
// useDispatch, action'ları tetiklemek için; useSelector, store'daki state'e erişmek için kullanılır.
import { useDispatch, useSelector } from "react-redux";

// themeSlice dosyasından changeTheme action creator import edilir.
// Bu fonksiyon, temayı değiştirmek için kullanılır.
import { changeTheme } from "../store/theme/themeSlice";

const Theme = () => {
    // useSelector hook'u ile Redux state'inden theme state'ine erişilir.
    const theme = useSelector((state) => state.theme);
    
    // useDispatch hook'u ile bir dispatch fonksiyonu oluşturulur.
    // Bu fonksiyon, action'ları Redux store'una göndermek için kullanılır.
    const dispatch = useDispatch();

    // Kullanıcının geçerli temaya göre, temanın karşıtını hesaplar.
    // Eğer geçerli tema "light" ise, karşıt tema "dark" olur; tam tersi durumda "light" olur.
    const oppositeTheme = theme.value === "light" ? "dark" : "light";

    return (
        <>
            {/* 
                Bir Button bileşeni render edilir.
                Bu buton, temanın karşıtını temsil eder.
                Kullanıcı bu butona tıkladığında, changeTheme action'ı dispatch edilir.
                Böylece, uygulamanın temayı değiştirmesi tetiklenir.
            */}
            <Button
                className="text-uppercase"
                variant={oppositeTheme}
                onClick={() => dispatch(changeTheme())}>
                {oppositeTheme}
            </Button>
        </>
    );
};

// Theme componenti, bu modülün default export'u olarak belirlenir.
// Bu sayede bu component, başka dosyalardan import edilebilir.
export default Theme;
