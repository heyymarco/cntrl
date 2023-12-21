'use client'

// react:
import {
    // react:
    default as React, useRef, useState,
}                           from 'react'

// cssfn:
import {
    // style sheets:
    dynamicStyleSheets,
}                           from '@cssfn/cssfn-react'           // writes css in react hook

// reusable-ui core:
import {
    // react helper hooks:
    useIsomorphicLayoutEffect
}                           from '@reusable-ui/core'            // a set of reusable-ui packages which are responsible for building any component

// reusable-ui components:
import {
    Icon,
    ButtonIcon,
    ListItem,
    List,
    Form,
    Group,
    Label,
    TextInput,
    EmailInput,
    PasswordInput,
    Basic,
    Control,
    TelInput,
    DropdownListButton,
    EditableControl,
}                           from '@reusable-ui/components'      // a set of official Reusable-UI components

// heymarco components:
import {
    GenericSection,
    Article,
}                           from '@heymarco/section'



// styles:
import './section-hero';
const useSectionHeroStyleSheet = dynamicStyleSheets(
    () => import(/* webpackPrefetch: true */'./section-hero')
, { id: 'section-hero' });



// react components:
export function SectionHero(): JSX.Element|null {
    // styles:
    const styleSheet = useSectionHeroStyleSheet();
    
    
    
    // effects:
    const articleIntroRef = useRef<HTMLElement|null>(null);
    const dummyArticleIntroRef = useRef<HTMLDivElement|null>(null);
    useIsomorphicLayoutEffect(() => {
        // conditions:
        const articleIntroElm = articleIntroRef.current;
        const dummyArticleIntroElm = dummyArticleIntroRef.current;
        if (!articleIntroElm) return;
        if (!dummyArticleIntroElm) return;
        
        
        
        // setups:
        const observer = new ResizeObserver((entries) => {
            const entry = entries[0];
            dummyArticleIntroElm.style.blockSize = `${entry.borderBoxSize[0].blockSize}px`;
        });
        observer.observe(articleIntroElm, {
            box: 'border-box',
        });
        
        
        
        // cleanups:
        return () => {
            observer.disconnect();
        };
    }, []);
    
    
    
    // states:
    const [aiExp, setAiExp] = useState<string>('');
    const [enableValidation, setEnableValidation] = useState<boolean>(false);
    
    
    
    // jsx:
    return (
        <GenericSection
            // variants:
            theme='dark'
            mild={false}
            
            
            
            // classes:
            className={styleSheet.hero}
        >
            <div className={`${styleSheet.overlay} ${styleSheet.overlay1}`}>
                <div ref={dummyArticleIntroRef} className={styleSheet.intro} />
                <Article className={styleSheet.features}>
                    <List className={styleSheet.featuresList} listStyle='flush' mild={false}>
                        <ListItem>
                            <Icon className='icon' theme='primary' mild icon='bulb' size='lg' />
                            <h2 className='title'>Web Assisted AI Search</h2>
                            <div className='content'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a felis tristique, vestibulum mi volutpat, cursus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed aliquam placerat risus vitae aliquet. Suspendisse nec mi ut lacus posuere pellentesque. 
                                </p>
                            </div>
                        </ListItem>
                        <ListItem>
                            <Icon className='icon' theme='primary' mild icon='picture' size='lg' />
                            <h2 className='title'>AI Image Generation</h2>
                            <div className='content'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a felis tristique, vestibulum mi volutpat, cursus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed aliquam placerat risus vitae aliquet. Suspendisse nec mi ut lacus posuere pellentesque. 
                                </p>
                            </div>
                        </ListItem>
                        <ListItem>
                            <Icon className='icon' theme='primary' mild icon='profile' size='lg' />
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
                            <Icon className='icon' theme='primary' mild icon='sliders' size='lg' />
                            <h2 className='title'>Custom Plugins</h2>
                            <div className='content'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a felis tristique, vestibulum mi volutpat, cursus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed aliquam placerat risus vitae aliquet. Suspendisse nec mi ut lacus posuere pellentesque. 
                                </p>
                            </div>
                        </ListItem>
                    </List>
                </Article>
            </div>
            <div className={`${styleSheet.overlay} ${styleSheet.overlay2}`}>
                <Article elmRef={articleIntroRef} className={styleSheet.intro}>
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
                        <ButtonIcon theme='primary' size='xl' icon='play'>WATCH VIDEO</ButtonIcon>
                        <ButtonIcon theme='primary' size='xl' outlined icon='arrow_right' iconPosition='end'>TRY FOR FREE</ButtonIcon>
                    </div>
                </Article>
                <Basic tag='aside' className={styleSheet.signUp} theme='primary' size='lg'>
                    <header className={styleSheet.signUpHeader}>
                        <Icon className='logo' icon='logo' size='xl' />
                        <h2 className='title'>TRY IT FREE</h2>
                        <p className='motto'>
                            Take control of your AI today
                        </p>
                    </header>
                    <Form className={styleSheet.signUpForm} theme='light' enableValidation={enableValidation} nude>
                        <Control className='firstname' theme='primary' size='lg'>
                            <Group orientation='block' listStyle='flat'>
                                <Label className='label' theme='inherit'>FIRST NAME</Label>
                                <TextInput name='first-name' placeholder='Tony' focused={false} arrived={false} autoCapitalize='words' />
                            </Group>
                        </Control>
                        <Control className='lastname' theme='primary' size='lg'>
                            <Group orientation='block' listStyle='flat'>
                                <Label className='label' theme='inherit'>LAST NAME</Label>
                                <TextInput name='last-name' placeholder='Stark' focused={false} arrived={false} autoCapitalize='words' />
                            </Group>
                        </Control>
                        <Control className='email' theme='primary' size='lg'>
                            <Group orientation='block' listStyle='flat'>
                                <Label className='label' theme='inherit'>EMAIL</Label>
                                <EmailInput name='email' placeholder='JohnDoe@YoMomma.com' focused={false} arrived={false} />
                            </Group>
                        </Control>
                        <Control className='phone' theme='primary' size='lg'>
                            <Group orientation='block' listStyle='flat'>
                                <Label className='label' theme='inherit'>PHONE</Label>
                                <TelInput name='phone' placeholder='08123456789' focused={false} arrived={false} />
                            </Group>
                        </Control>
                        <EditableControl className='ai-exp' theme='primary' size='lg' isValid={!!aiExp}>
                            <Group orientation='inline'>
                                <Group orientation='block' listStyle='flat'>
                                    <Label className='label' theme='inherit'>AI EXPERIENCE</Label>
                                    <TextInput className='input' name='industry' placeholder='Please Select' focused={false} arrived={false} value={aiExp} readOnly />
                                </Group>
                                <DropdownListButton theme='primary' mild floatingPlacement='bottom-end'>
                                    {['Beginner', 'Intermediate', 'Advanced'].map((option, index) =>
                                        <ListItem
                                            key={index}
                                            active={(option === aiExp)}
                                            onClick={() => setAiExp(option)}
                                        >
                                            {option}
                                        </ListItem>
                                    )}
                                </DropdownListButton>
                            </Group>
                        </EditableControl>
                        <Control className='industry' theme='primary' size='lg'>
                            <Group orientation='block' listStyle='flat'>
                                <Label className='label' theme='inherit'>INDUSTRY</Label>
                                <TextInput name='industry' placeholder='Financial Services' focused={false} arrived={false} autoCapitalize='words' />
                            </Group>
                        </Control>
                    </Form>
                    <ButtonIcon className={styleSheet.signUpAction} icon='arrow_right' iconPosition='end' theme='primary' size='xl' onClick={() => {
                        setEnableValidation(true);
                        // TODO: submit
                    }}>
                        GET STARTED TODAY
                    </ButtonIcon>
                </Basic>
            </div>
        </GenericSection>
    );
}
