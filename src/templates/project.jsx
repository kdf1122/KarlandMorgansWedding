import React from 'react'
import Header from '../components/Header/Header'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import Footer from '../components/Footer/Footer'
import Container from '../components/Container/Container'
import styles from './project.module.scss'

export default class Project extends React.Component {
	render() {
		const { slug } = this.props.pathContext
		const postNode = this.props.data.markdownRemark
		const project = postNode.frontmatter
		if (!project.id) {
			project.id = slug
		}
		return (
			<div className="container project-container">
				<Helmet title={`${project.title} | ${config.siteTitle}`} />
        <Header>{`${project.title}`}</Header>
				<Container>
					<div
						className={styles.content}
						dangerouslySetInnerHTML={{ __html: postNode.html }}
					/>
				</Container>
				<Footer />
			</div>
		)
	}
}

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
      excerpt
    }
  }
`
