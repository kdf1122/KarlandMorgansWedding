import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import Footer from '../components/Footer/Footer'

export default class Index extends React.Component {
	render() {
		return (
			<div className="container index-container">
				<Helmet>
					<title>{config.siteTitle}</title>
				</Helmet>
				<div>

				</div>
				<Footer />
			</div>
		)
	}
}
