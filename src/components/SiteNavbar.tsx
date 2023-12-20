import React  from 'react';

import { Navbar } from '@reusable-ui/components'
import { SiteNavbarMenu } from './SiteNavbarMenu'



export const SiteNavbar = () => {
    return (
        <Navbar theme='dark' className='siteNavbar' breakpoint='md'>{(params) =>
            <SiteNavbarMenu {...params} />
        }</Navbar>
    );
}
