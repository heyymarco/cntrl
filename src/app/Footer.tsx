import { Container } from '@reusable-ui/components'
import {
    SiteLogo,
}                           from '@/components/SiteLogo'



export const Footer = () => {
    return (
        <Container tag='footer' className='siteFooter' theme='dark' mild={false}>
            <SiteLogo /> <p>All rights Reserved.</p>
        </Container>
    );
}
