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
								<a href="https://goo.gl/forms/yzP2UHq5qJXw9WgI2" target="_blank">RSVP</a>
								<Link to="/accommodations" activeClassName="active">
                  Accommodations
								</Link>
								<Link to="/wedding-day" activeClassName="active">
                  Wedding
								</Link>
								<Link to="/registry" activeClassName="active">
                  Registry
								</Link>
								<a href="https://photos.app.goo.gl/pEuD8l0WRJXAWXGe2" target="_blank">Photos</a>
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
            <Link to="/">
              <h3 style={{color: '#002121', marginTop: '-6px'}}>{config.siteTitle}</h3>
              <h4 style={{color: '#002121'}}>{config.date}</h4>
            </Link>
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
              <a href="https://goo.gl/forms/yzP2UHq5qJXw9WgI2" target="_blank">RSVP</a>
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
                Wedding
              </Link>
              <Link
                to="/registry"
                activeClassName="active"
                onClick={() => this.closeMenu()}
              >
                Registry
              </Link>
              <a href="https://photos.app.goo.gl/pEuD8l0WRJXAWXGe2" target="_blank">Photos</a>
						</Menu>
					</div>
				</div>
			</header>
		)
	}
}
