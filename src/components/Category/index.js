import styles from "./Category.module.css"
function Category({ category, children }) {
    return (
        <section className={styles.category}>
            <h2>{category}</h2>
            <div>
                {/* Lista de cards */}
                {children}
            </div>
        </section>
    )
}
export default Category;