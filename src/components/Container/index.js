/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-unreachable */

import styles from "./Container.module.css";

function Container({ children }) {
    return (
    
    <section className={styles.container}>
        {children}

    </section>
    )
}
export default Container;