import React from 'react';

type NavItemProps = {
    text: string;
};

const NavItem: React.FC<NavItemProps> = ({ text }) => {
    return (
        <div className="my-auto basis-auto">
            <a href={`#${text.toLowerCase().replace(' ', '-')}`}>{text}</a>
        </div>
    );
};

export default NavItem;