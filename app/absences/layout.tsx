import React from 'react'

import styles from './styles.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
	return <div className={styles.container}>{children}</div>
}
