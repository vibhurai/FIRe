import Link from 'next/link';
import Image from 'next/image';

import { useStoreState, useStoreActions } from 'easy-peasy';

import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const loginType = useStoreState((store) => store.accountModel.type);
    const logout = useStoreActions((actions) => actions.accountModel.logout);

    return (
        <nav data-testid='navbar' id={styles.navbar}>
            <Link href='/'>
                <a className={styles.brand}>
                    <Image
                        src='/images/logo.png'
                        alt='site logo'
                        width={50}
                        height={50}
                    />
                    FIRe
                </a>
            </Link>
            <Link href='/features'>
                <a className={styles.navLink}>Features</a>
            </Link>
            <Link href='/about'>
                <a className={styles.navLink}>About Us</a>
            </Link>

            {loginType ? (
                <Link href='/'>
                    <a
                        className='submit-border dark w-15 border-radius-15'
                        style={{
                            padding: '0.5rem 2rem',
                        }}
                        onClick={() => logout()}
                    >
                        Logout
                    </a>
                </Link>
            ) : (
                <></>
            )}
        </nav>
    );
};

export default Navbar;