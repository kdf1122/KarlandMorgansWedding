import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import Footer from '../components/Footer/Footer'
import ProjectListing from '../components/ProjectListing/ProjectListing'
import Img from "gatsby-image";

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
          {/*<Img resolutions={data.file.childImageSharp.resolutions} />*/}

					<ProjectListing />
				</div>
				<Footer />
			</div>
		)
	}
}

export const pageQuery = graphql`
query ImageByPath {
	file(relativePath: { eq: "./assets/karl1.jpg" }) {
		childImageSharp {
			resolutions(width: l25, height: 125) {
				src
				srcSet
				width
				height
			}
		}
	}
}
`