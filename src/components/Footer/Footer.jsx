import React from 'react'
import Link from 'gatsby-link'
import styles from './Footer.module.scss'
import config from '../../../config/SiteConfig'

export default class Footer extends React.Component {
	render() {
		return (
			<footer className={styles.footer}>
				Built with <a href="https://www.gatsbyjs.org">Gatsby</a>.
			</footer>
		)
	}
}
