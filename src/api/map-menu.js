export const mapMenu = (menu = {}) => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    menu: links = [],
  } = menu;

  const srcImg = menu.logo && menu.logo.url ? menu.logo.url : '';

  return {
    newTab,
    text,
    link,
    srcImg,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const {
      open_in_new_tab: newTab = false,
      url: link = '',
      link_text: children = '',
    } = item;

    return {
      newTab,
      children,
      link,
    };
  });
};
