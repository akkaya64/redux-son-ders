// React kütüphanesini import ediyoruz, çünkü bu component React bileşeni olacak.
import React from "react";

// react-bootstrap kütüphanesinden Container bileşenini import ediyoruz.
// Bu bileşen, sayfa içeriğimizi merkezileştirecek ve stil uygulayacaktir.
import { Container } from "react-bootstrap";

// React-Redux kütüphanesinin sağladiği useSelector hook'unu import ediyoruz.
// Bu hook, Redux state'ine erişim sağlar.
import { useSelector } from "react-redux";

const Content = () => {
    // useSelector hook'u kullanarak, Redux state'inden dil bilgisini çekiyoruz.
    // Burada 'state.language' kullanilarak Redux state'indeki dil bilgisi çekilir.
    const language = useSelector((state) => state.language);
    
    // Seçili dildeki dil dosyasini (localeFile) dinamik olarak import ediyoruz.
    // Bu, kullanicinin seçtiği dili yansitmak için yapilir.
    const localeFile = require(`../utils/languages/${language.value}.json`);
    
    // Bileşen, Container bileşeni içinde başlik ve metinleri render eder.
    return (
        <Container className="mt-5 text-center">
            {/* localeFile içerisinden çeviri string'lerini çekiyoruz ve ekrana yazdiriyoruz.
            Bu sayede, uygulama çoklu dil desteği sağlamiş olur. */}
            <h1>{localeFile.trivialInfo.welcome}</h1>
            <h2>{localeFile.trivialInfo.aboutUs}</h2>
            <h3>{localeFile.trivialInfo.contact}</h3>
            
            {/* Sabit bir metin yazdiriyoruz. Bu metin herhangi bir çeviri içermiyor.
            Genellikle buraya gerçek içerik gelecektir. */}
            <h4>
            İHTAR: Besmelenin rahmet noktasinda parlak bir nuru, sönük aklima uzaktan göründü. Onu, kendi nefsim için, nota
 suretinde kaydetmek istedim. Ve yirmi otuz kadar sirlar ile, o nurun etrafinda bir daire çevirmekle avlamak ve zaptetmek arzu ettim. Fakat, maatteessüf, şimdilik o arzuma tam muvaffak olamadim. Yirmi otuzdan beş altiya indi.
            </h4>
        </Container>
    );
};

// Content bileşenini dişariya aktariyoruz, böylece diğer dosyalardan import edilebilir.
export default Content;
