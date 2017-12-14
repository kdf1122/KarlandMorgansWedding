import React, { Component } from 'react'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'
import { FaInstagram, FaBehance, FaDribbble } from 'react-icons/lib/fa'
import { slide as Menu } from 'react-burger-menu'
import { Fade } from 'react-reveal'
import config from '../../../config/SiteConfig'
import styles from './Navigation.module.scss'
import './Headroom.scss'

export default class Navigation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuOpen: false,
		}
		this.handleStateChange = this.handleStateChange.bind(this)
	}

	handleStateChange(state) {
		this.setState({ menuOpen: state.isOpen })
	}

	closeMenu() {
		this.setState({ menuOpen: false })
	}
	render() {
		return (
			<header>
				<Headroom calcHeightOnResize disableInlineStyles>
					<Fade down duration={2000} className={styles.wrapper}>
						<nav className={styles.navigation}>
							<span>
								<Link to="/photos" activeClassName="active">
                  Photos
								</Link>
								<Link to="/rsvp" activeClassName="active">
                  RSVP
								</Link>
								<Link to="/accommodations" activeClassName="active">
                  Accommodations
								</Link>
								<Link to="/wedding-day" activeClassName="active">
                  Wedding Day
								</Link>
								<Link to="/registry" activeClassName="active">
                  Registry
								</Link>
							</span>
						</nav>
						<div className={styles.name}>
							<span>
								<Link to="/">
									<h3>{config.siteTitle}</h3>
								</Link>
							</span>
						</div>
						<div className={styles.socialMedia}>
							<span>{config.date}</span>
						</div>
					</Fade>
				</Headroom>
				<div className={styles.mobileNav}>
					<div className={styles.mobileNavName}>
						<h3>{config.siteTitle}</h3>
						<h4>{config.date}</h4>
					</div>
					<div className={styles.menu}>
						<Menu
							isOpen={this.state.menuOpen}
							onStateChange={this.handleStateChange}
							width={'100%'}
						>
							<Link to="/" onClick={() => this.closeMenu()}>
								<h1>{config.siteTitle}</h1>
								<h2>{config.date}</h2>
								<hr />
							</Link>
							<Link
								to="/photos"
								activeClassName="active"
								onClick={() => this.closeMenu()}
							>
                Photos
							</Link>
							<Link
								to="/rsvp"
								activeClassName="active"
								onClick={() => this.closeMenu()}
							>
                RSVP
							</Link>
              <Link
                to="/accommodations"
                activeClassName="active"
                onClick={() => this.closeMenu()}
              >
                Accommodations
              </Link>
              <Link
                to="/wedding-day"
                activeClassName="active"
                onClick={() => this.closeMenu()}
              >
                Wedding Day
              </Link>
              <Link
                to="/registry"
                activeClassName="active"
                onClick={() => this.closeMenu()}
              >
                Registry
              </Link>
						</Menu>
					</div>
				</div>
			</header>
		)
	}
}
