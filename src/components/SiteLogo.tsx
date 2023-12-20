'use client'

// react:
import {
    // react:
    default as React,
}                           from 'react'

// reusable-ui components:
import {
    Basic,
    // simple-components:
    Icon,
}                           from '@reusable-ui/components'      // a set of official Reusable-UI components
import {
    Link,
}                           from '@reusable-ui/next-compat-link'



// react components:
const SiteLogo = () => {
    // jsx:
    return (
        <Link href='/'>
            <Basic className='siteLogo' theme='primary' nude>
                <Icon
                    // appearances:
                    icon='logo'
                    
                    
                    
                    // variants:
                    size='lg'
                    mild={true}
                />
                CNTRL
            </Basic>
        </Link>
    );
};
export {
    SiteLogo,
    SiteLogo as default,
}
