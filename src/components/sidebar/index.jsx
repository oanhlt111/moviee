import React from 'react';
import './sidebar.scss';

import SidebarHeader from './SidebarHeader';
import SidebarList from './SidebarList/SidebarList';

function Sidebar() {
	const user = {
		avatar: {
			gravatar: {
				hash: 'c9e9fc152ee756a900db85757c29815d',
			},
		},
		id: 548,
		iso_639_1: 'en',
		iso_3166_1: 'CA',
		name: 'Travis Bell',
		include_adult: true,
		username: 'travisbell',
	};

	const listMenu = [
		{
			title: 'Menu',
			list: [
				{
					name: 'Home',
					icon: 'bx bxs-home',
					path: '/',
				},
				{
					name: 'Discover',
					icon: 'bx bxs-compass',
					path: '/discover/movie',
				},
				{
					name: 'Trending',
					icon: 'bx bx-trending-up',
					path: '/trending',
				},
			],
		},
		{
			title: 'Category',
			list: [
				{
					name: 'Movie',
					icon: 'bx bxs-movie-play',
					path: '/movie',
				},
				{
					name: 'TV Show',
					icon: 'bx bxs-tv',
					path: '/tv',
				},
			],
		},
		{
			title: 'General',
			list: [
				{
					name: 'Setting',
					icon: 'bx bxs-network-chart',
					path: '/setting',
				},
			],
		},
	];

	return (
		<aside id="sidebar">
			<SidebarHeader user={user} />
			<div id="sidebar__content">
				{listMenu.map((menu, i) => (
					<SidebarList title={menu.title} list={menu.list} key={i} />
				))}
			</div>
		</aside>
	);
}

export default Sidebar;
