import React from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap"; // Bootstrap componentleri import edilir, UI tasarımını kolaylaştırmak için kullanılır.
import { useDispatch, useSelector } from "react-redux"; // Redux store'ını kullanmak için gereken hook'lar import edilir.
import { decrement, increment, reset } from "../store/counter/counterSlice"; // Redux store'undan action creator'lar import edilir.

// Counter adında bir functional component oluşturulur.
const Counter = () => {
    // Redux state'inden counter state'ini çekmek için useSelector hook kullanılır.
    const counter = useSelector((state) => state.counter);
    
    // Action'ları dispatch etmek için useDispatch hook kullanılır.
    const dispatch = useDispatch();

    // Button click event'lerini handle etmek için bir event handler fonksiyonu tanımlanır.
    const handleClick = (event) => {
        if (event.target.id === "increment") {
            // Eğer tıklanan butonun id'si "increment" ise, counter'ı arttıran action dispatch edilir.
            dispatch(increment());
        } else if (event.target.id === "decrement") {
            // Eğer tıklanan butonun id'si "decrement" ise, counter'ı azaltan action dispatch edilir.
            dispatch(decrement());
        } else if (event.target.id === "reset") {
            // Eğer tıklanan butonun id'si "reset" ise, counter'ı sıfırlayan action dispatch edilir.
            dispatch(reset());
        }
    };

    // Component'in render kısmı.
    return (
        <Container> {/* Bootstrap Container component'i. Responsive bir layout sağlar. */}
            <h2>COUNTER</h2> {/* Başlık olarak "COUNTER" yazılır. */}
            <ButtonGroup> {/* Gruplanmış butonları içeren Bootstrap component'i */}
                <Button id="decrement" variant="danger" onClick={handleClick}>
                    - {/* Azaltma butonu. Tıklanırsa handleClick fonksiyonunu çalıştırır. */}
                </Button>
                <Button variant="secondary">{counter.value}</Button> {/* Counter değerini gösteren buton. */}
                <Button id="increment" variant="success" onClick={handleClick}>
                    + {/* Arttırma butonu. Tıklanırsa handleClick fonksiyonunu çalıştırır. */}
                </Button>
                <Button id="reset" variant="warning" onClick={handleClick}>
                    RESET {/* Sıfırlama butonu. Tıklanırsa handleClick fonksiyonunu çalıştırır. */}
                </Button>
            </ButtonGroup>
        </Container>
    );
};

// Counter component'i export edilir, böylece başka dosyalardan import edilebilir.
export default Counter;
