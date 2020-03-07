import * as React from "react"
import styles from "./queue.module.scss";

const Queue: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.queueList}>
                <div className={styles.queueList__item}>
                    <img src="https://i.pravatar.cc/150" className={styles.avatar} />
                    <h5 className={styles.name}>User of test 1</h5>
                </div>
            </div>
            <div className={styles.queueList}>
                <div className={styles.queueList__item}>
                    <img src="https://i.pravatar.cc/150" className={styles.avatar} />
                    <h5 className={styles.name}>User of test 1</h5>
                </div>
            </div>
        </div>

    )
}

export default Queue