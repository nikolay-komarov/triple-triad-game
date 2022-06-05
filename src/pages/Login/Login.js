import React, {useState} from 'react';
import {Input, Button} from "./components";
import Logo from '../../assets/logo-login.png';
import {ReactComponent as IconPen} from '../../assets/icon-pen.svg';
import cn from 'classnames';
import s from './Login.module.scss';

const formLoginInit = {
    email: '',
    password: '',
};
const formRegisterInit = {
    signupEmail: '',
    signupPassword: '',
    signupRepeatPassword: '',
};

export const Login = () => {
    const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);
    const [formLogin, setFormLogin] = useState(formLoginInit);
    const [formRegister, setFormRegister] = useState(formRegisterInit);

    const handleRegisterToggle = () => {
        setIsRegisterFormOpen(prev => !prev);
    };

    const handleFormLoginChange = (evt) => {
        setFormLogin(prev => ({
            ...prev,
            [evt.target.name]: evt.target.value,
        }));
    };
    const handleFormLoginSubmit = (evt) => {
        evt.preventDefault();
        console.log('### formLoginSubmit ', formLogin);
        setFormLogin(formLoginInit);
    };

    const handleFormRegisterChange = (evt) => {
        setFormRegister(prev => ({
            ...prev,
            [evt.target.name]: evt.target.value,
        }));
    };
    const handleFormRegisterSubmit = (evt) => {
        evt.preventDefault();
        console.log('### formRegisterSubmit ', formRegister);
        setFormRegister(formRegisterInit);
    };

    return (
        <>
            <div className={s.headerLogo}>
                <img src={Logo} alt="Logo" />
            </div>
            <div className={cn(s.container, {[s.active]: isRegisterFormOpen})}>
                <div className={s.card}></div>
                <div className={s.card}>
                    <h1 className={s.title}>Login</h1>
                    <form onSubmit={handleFormLoginSubmit}>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            label="Email"
                            isRequired={true}
                            value={formLogin['email']}
                            onChange={handleFormLoginChange}
                        />
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            label="Password"
                            isRequired={true}
                            value={formLogin['password']}
                            onChange={handleFormLoginChange}
                        />
                        <Button label="Go" />
                    </form>
                </div>
                <div className={cn(s.card, s.alt)}>
                    <div className={cn(s.toggle, {[s.active]: isRegisterFormOpen})} onClick={handleRegisterToggle}>
                        <IconPen />
                    </div>
                    <h1 className={s.title}>Register
                        <div className={s.close} onClick={handleRegisterToggle}></div>
                    </h1>
                    <form onSubmit={handleFormRegisterSubmit}>
                        <Input
                            id="signupEmail"
                            type="email"
                            name="signupEmail"
                            label="Email"
                            isRequired={true}
                            value={formRegister['signupEmail']}
                            onChange={handleFormRegisterChange}
                        />
                        <Input
                            id="signupPassword"
                            type="password"
                            name="signupPassword"
                            label="Password"
                            isRequired={true}
                            value={formRegister['signupPassword']}
                            onChange={handleFormRegisterChange}
                        />
                        <Input
                            id="signupRepeatPassword"
                            type="password"
                            name="signupRepeatPassword"
                            label="Repeat Password"
                            isRequired={true}
                            value={formRegister['signupRepeatPassword']}
                            onChange={handleFormRegisterChange}
                        />
                        <Button label="Register" />
                    </form>
                </div>
            </div>
        </>
    );
};
