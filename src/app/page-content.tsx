'use client'

// react:
import {
    // react:
    default as React,
    
    
    
    // hooks:
    useEffect,
}                           from 'react'

// cssfn:
import {
    // style sheets:
    dynamicStyleSheets,
}                           from '@cssfn/cssfn-react'           // writes css in react hook

// heymarco components:
import {
    GenericSection,
    Article,
    Section,
    Main,
    
    HeroSection,
}                           from '@heymarco/section'

// reusable-ui components:
import {
    // base-content-components:
    Container,
    
    
    
    // simple-components:
    Icon,
    
    
    
    // composite-components:
    AccordionItem,
    ExclusiveAccordion,
    Carousel,
    ButtonIcon,
    Accordion,
    ListItem,
    List,
    Form,
    Group,
    Label,
    TextInput,
    EmailInput,
    PasswordInput,
    Basic,
}                           from '@reusable-ui/components'      // a set of official Reusable-UI components



// styles:
import './page-styles';
const useHomePageStyleSheet = dynamicStyleSheets(
    () => import(/* webpackPrefetch: true */'./page-styles')
, { id: 'homepage' });



// react components:
export function HomePageContent(): JSX.Element|null {
    // styles:
    const styleSheet = useHomePageStyleSheet();
    
    
    
    // jsx:
    return (
        <Main
            // variants:
            nude={true}
        >
            <GenericSection
                // variants:
                theme='dark'
                mild={false}
                
                
                
                // classes:
                className={styleSheet.hero}
            >
                <Article className={styleSheet.intro}>
                    <span className={styleSheet.emphasis}>
                        #1 Most Powerful AI Companion
                    </span>
                    <h1 className={styleSheet.title}>
                        TAKE FULL <span className={styleSheet.emphasis}>CNTRL</span>
                        <br />OF YOUR AI
                    </h1>
                    <p className={styleSheet.motto}>
                        Optimize AI performance, tailor it to your needs, and extract valuable insights from your data with ease. Experience the simplicity of interacting with AI through CNTRL AI.
                    </p>
                    <div className={styleSheet.actions}>
                        <ButtonIcon theme='primary' icon='play_circle_outline'>WATCH VIDEO</ButtonIcon>
                        <ButtonIcon theme='primary' outlined icon='arrow_right_alt' iconPosition='end'>TRY FOR FREE</ButtonIcon>
                    </div>
                </Article>
                <Article>
                    <List className={styleSheet.features} listStyle='flush' mild={false}>
                        <ListItem>
                            <Icon className='icon' theme='primary' mild icon='lightbulb' size='lg' />
                            <h2 className='title'>Web Assisted AI Search</h2>
                            <div className='content'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a felis tristique, vestibulum mi volutpat, cursus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed aliquam placerat risus vitae aliquet. Suspendisse nec mi ut lacus posuere pellentesque. 
                                </p>
                            </div>
                        </ListItem>
                        <ListItem>
                            <Icon className='icon' theme='primary' mild icon='image' size='lg' />
                            <h2 className='title'>AI Image Generation</h2>
                            <div className='content'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a felis tristique, vestibulum mi volutpat, cursus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed aliquam placerat risus vitae aliquet. Suspendisse nec mi ut lacus posuere pellentesque. 
                                </p>
                            </div>
                        </ListItem>
                        <ListItem>
                            <Icon className='icon' theme='primary' mild icon='account_box' size='lg' />
                            <h2 className='title'>Custom Profiles</h2>
                            <div className='content'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a felis tristique, vestibulum mi volutpat, cursus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed aliquam placerat risus vitae aliquet. Suspendisse nec mi ut lacus posuere pellentesque. 
                                </p>
                            </div>
                        </ListItem>
                        <ListItem>
                            <Icon className='icon' theme='primary' mild icon='settings' size='lg' />
                            <h2 className='title'>Memory Managment</h2>
                            <div className='content'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a felis tristique, vestibulum mi volutpat, cursus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed aliquam placerat risus vitae aliquet. Suspendisse nec mi ut lacus posuere pellentesque. 
                                </p>
                            </div>
                        </ListItem>
                        <ListItem>
                            <Icon className='icon' theme='primary' mild icon='settings_applications' size='lg' />
                            <h2 className='title'>Custom Plugins</h2>
                            <div className='content'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a felis tristique, vestibulum mi volutpat, cursus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed aliquam placerat risus vitae aliquet. Suspendisse nec mi ut lacus posuere pellentesque. 
                                </p>
                            </div>
                        </ListItem>
                    </List>
                </Article>
                <Article className={styleSheet.signUp}>
                    <header>
                        <Icon icon='face' />
                        <h2>TRY IT FREE</h2>
                    </header>
                    <Form>
                        <Group orientation='block'>
                            <Label>FIRST NAME</Label>
                            <TextInput name='first-name' />
                        </Group>
                        <Group orientation='block'>
                            <Label>LAST NAME</Label>
                            <TextInput name='last-name' />
                        </Group>
                        <Group orientation='block'>
                            <Label>E-MAIL</Label>
                            <EmailInput name='email' />
                        </Group>
                        <Group orientation='block'>
                            <Label>PASSWORD</Label>
                            <PasswordInput name='password' />
                        </Group>
                    </Form>
                </Article>
            </GenericSection>
        </Main>
    );
}
