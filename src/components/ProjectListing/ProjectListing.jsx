import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Palette from 'react-palette'
import styles from './ProjectListing.module.scss'
import morgan from './assets/morgan1.jpg'
import karl from './assets/karl1.jpg'

export default class ProjectListing extends React.PureComponent {
	getList() {
		const List = []
		List.push({
			imageURL: karl,
			name: "Karl",
		})
		List.push({
			imageURL: morgan,
			name: "Morgan",
		})
		return List
	}
	render() {
		const List = this.getList()
		return (
			<div className={styles.base}>
				{List.map(project => (
					<div key={project.imageURL} className={styles.wrapper}>
						<div className={styles.content}>
							<div className={styles.image}>
								<img src={project.imageURL} />
							</div>
							<Palette image={project.imageURL}>
								{palette => (
									<div
										className={styles.overlay}
										style={{ backgroundColor: palette.vibrant }}
									/>
								)}
							</Palette>
							<h2>{project.name}</h2>
						</div>
					</div>
				))}
			</div>
		)
	}
}
