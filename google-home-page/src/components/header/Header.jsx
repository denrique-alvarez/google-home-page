import './styles.css';
import { HeaderTitle } from "./header-title/HeaderTitle";
import { InputForm } from "./input-form/InputForm";
import { HeaderBtn } from "./header-btn/HeaderBtn";

export const Header = () => {
    return (
        <header>
            <HeaderTitle />
            <InputForm />
            <HeaderBtn />
        </header>
    );
};
