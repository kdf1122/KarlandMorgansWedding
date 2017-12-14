import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import Footer from '../components/Footer/Footer'
import ProjectListing from '../components/ProjectListing/ProjectListing'

export default class Index extends React.Component {
	render() {
    const data = this.props
		console.log(data)
		return (
			<div className="container index-container">
				<Helmet>
					<title>{config.siteTitle}</title>
				</Helmet>
				<div>
					<ProjectListing />
				</div>
				<Footer />
			</div>
		)
	}
}
