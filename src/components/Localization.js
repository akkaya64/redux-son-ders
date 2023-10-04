// React kütüphanesini import ediyoruz, çünkü bu dosyada JSX sözdizimini kullanacağız.
import React from "react";

// react-bootstrap kütüphanesinden Dropdown ve DropdownToggle bileşenlerini import ediyoruz.
// Bu bileşenleri kullanarak, kullanıcıların diller arasında seçim yapabileceği bir açılır menü oluşturacağız.
import { Dropdown, DropdownToggle } from "react-bootstrap";

// languages objesini import ediyoruz. Bu obje, kullanıcının seçebileceği dillerin listesini içerir.
import { languages } from "../utils/languages/lang";

// useDispatch ve useSelector hook'larını import ediyoruz. 
// useDispatch, action'ları tetiklemek için; useSelector ise store'dan state'e erişmek için kullanılır.
import { useDispatch, useSelector } from "react-redux";

// changeLanguage action'ını import ediyoruz. Bu action, kullanıcı bir dil seçtiğinde çağrılır ve dilin değişmesine neden olur.
import { changeLanguage } from "../store/language/languageSlice";

// Localization adında bir fonksiyonel bileşen oluşturuyoruz.
const Localization = () => {
    // useDispatch hook'unu kullanarak dispatch fonksiyonunu elde ediyoruz.
    const dispatch = useDispatch();
    
    // useSelector hook'u ile Redux store'daki dil bilgisini elde ediyoruz.
    const language = useSelector((state) => state.language);

    // handleSelect fonksiyonu, kullanıcı bir dil seçtiğinde tetiklenir. 
    // Bu fonksiyon, seçilen dili parametre olarak alır ve changeLanguage action'ını tetikler.
    const handleSelect = (event) => { // nfn kisa yolu ilede yapabilirsin
        dispatch(changeLanguage(event));
    };


    // require fonksiyonu ile seçilen dile uygun dil dosyasını dinamik olarak import ediyoruz.
    const localeLang = require(`../utils/languages/${language.value}.json`);

    // Bileşenimiz, bir Dropdown bileşeni render eder. 
    // Bu bileşen, kullanıcının diller arasında seçim yapmasına olanak tanır.
    // Dropdown bileşeni, mevcut dildeki "language" kelimesini gösteren bir buton ve dil seçeneklerinin listelendiği bir menü içerir.
    return (
        <Dropdown className="my-5" onSelect={handleSelect}>
            <DropdownToggle>{localeLang.trivialInfo.language}</DropdownToggle>
            <Dropdown.Menu>
                {languages.map((language) => (
                    <Dropdown.Item
                        key={language.value}
                        eventKey={language.value}>
                        {language.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

// Localization bileşenini export ediyoruz, böylece başka dosyalardan import edilebilir.
export default Localization;
