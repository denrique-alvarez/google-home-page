import './styles.css';

import { FooterSection1 } from './footer-section-1/FooterSection1';
import { FooterSection2 } from './footer-section-2/FooterSection2';
import { FooterSection3 } from './footer-section-3/FooterSection3';

export const Footer = () => {
    return (
        <footer>
            <FooterSection1 />
            <FooterSection2 />
            <FooterSection3 />
        </footer>
    )
}
