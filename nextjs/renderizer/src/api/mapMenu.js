export const mapMenu = (menu = {}) => {
	const {
		open_in_new_tab: newTab = false,
		logo_text: text = '',
		logo_link: link = '',
		logo: { url: src = '' } = {},
		menu_link: links = [],
	} = menu;

	return { newTab, text, link, src, links: mapMenuLinks(links) };
};

export const mapMenuLinks = (links = []) => {
	return links.map(({ id = '', link_text = '', url = '' }) => ({
		id,
		text: link_text,
		link: url,
	}));
};
